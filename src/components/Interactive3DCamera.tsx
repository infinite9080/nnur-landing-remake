"use client";

import React, { useEffect, useRef } from "react";

const Interactive3DCamera: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Create the HTML structure
    wrapper.innerHTML = `
      <canvas id="canvas3d"></canvas>
    `;

    // Add the JavaScript code
    const script = document.createElement("script");
    script.innerHTML = `
      // Utility functions
      window.Utils = {
        unproject2DCoords: function(x, y, camera, z) {
          var vector = new THREE.Vector3();
          vector.set(
            (x / window.innerWidth) * 2 - 1,
            (y / window.innerHeight) * 2 - 1,  // Fixed: removed negative sign to fix inversion
            0.5
          );
          vector.unproject(camera);
          var dir = vector.sub(camera.position).normalize();
          var distance = (z - camera.position.z) / dir.z;
          var pos = camera.position.clone().add(dir.multiplyScalar(distance));
          return pos;
        },
        loadOBJ: function(objUrl, mtlUrl, callback) {
          // Use the actual OBJ loader for the camera
          var loader = new THREE.OBJLoader();
          if (mtlUrl) {
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.load(mtlUrl, function(materials) {
              materials.preload();
              loader.setMaterials(materials);
              loader.load(objUrl, callback);
            });
          } else {
            loader.load(objUrl, callback);
          }
        }
      };

      // Watcher (Camera) class
      function Watcher(camera, onReady) {
        this.onReady = onReady;
        this.camera = camera;
        this.mouseX = 0;
        this.mouseY = 0;
        this.loaded = false;
        var self = this;
        
        this.el = new THREE.Object3D();
        var scale = 1.8;
        this.el.scale.set(scale, scale, scale);
        
        // Center the camera properly
        this.el.position.set(0, 0, 5);
        
        // Load OBJ File with Materials
        Utils.loadOBJ('https://s3-us-west-2.amazonaws.com/s.cdpn.io/356608/cam.obj', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/356608/cam.mtl', function(object) {
          var body = new THREE.Object3D(),
              base = new THREE.Object3D(),
              pivot = new THREE.Object3D();
          
          // Apply shadows
          object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          
          var glass = object.getObjectByName('Glass');
          if (glass) {
            glass.material = new THREE.MeshPhongMaterial({
              color: 'black', 
              shininess: 300, 
              reflectivity: 10, 
              opacity: 0.7
            });
            glass.material.transparent = true;
          }
          
          // Separate parts of the camera into groups
          var lensBody = object.getObjectByName('lens_body');
          var glassObj = object.getObjectByName('Glass');
          var camBody = object.getObjectByName('cam_body');
          var rotateNode = object.getObjectByName('rotate_node02');
          var lens01 = object.getObjectByName('lens01');
          var rainCover = object.getObjectByName('rain_cover');
          var camBase = object.getObjectByName('cam_base');
          var rotateNodeZ = object.getObjectByName('Rotate_node_Z');
          
          if (lensBody) body.add(lensBody);
          if (glassObj) body.add(glassObj);
          if (camBody) body.add(camBody);
          if (rotateNode) body.add(rotateNode);
          if (lens01) body.add(lens01);
          if (rainCover) body.add(rainCover);
          if (camBase) base.add(camBase);
          if (rotateNodeZ) pivot.add(rotateNodeZ);
          
          self.body = body;
          self.base = base;
          self.pivot = pivot;
          
          self.el.add(body);
          self.el.add(base);
          self.el.add(pivot);
          
          self.loaded = true;
          self.onReady();
        });
        
        // Add mouse movement - camera follows mouse
        var self = this;
        document.addEventListener('mousemove', function(e) {
          self.onMouseMove(e);
        });
      }
      
      Watcher.prototype.onMouseMove = function(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        if (this.body) {
          // Calculate mouse position relative to screen center
          var centerX = window.innerWidth / 2;
          var centerY = window.innerHeight / 2;
          
          // Get offset from center
          var offsetX = (this.mouseX - centerX) / centerX; // -1 to 1
          var offsetY = (this.mouseY - centerY) / centerY; // -1 to 1
          
          // Calculate target rotation angles
          var targetRotationY = offsetX * 0.8; // Horizontal rotation
          var targetRotationX = offsetY * 0.5; // Vertical rotation (fixed: removed negative sign)
          
          // Apply smooth rotation
          if (typeof TweenMax !== 'undefined') {
            TweenMax.to(this.body.rotation, 0.2, {
              x: targetRotationX,
              y: targetRotationY,
              ease: Power2.easeOut
            });
          } else {
            // Fallback: direct assignment
            this.body.rotation.x = targetRotationX;
            this.body.rotation.y = targetRotationY;
          }
        }
      };
      
      // Initialize the scene
      var wW, wH, canvas3d, scene, camera, renderer, watcher, numObjectsLoaded = 0;
      
      function init() {
        canvas3d = document.getElementById('canvas3d');
        setSize();
        
        // Set up 3D Canvas
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(30, wW / wH, 0.1, 1000);
        camera.position.set(0, 0, 30);
        camera.lookAt(0, 0, 0);
        
        renderer = new THREE.WebGLRenderer({
          canvas: canvas3d,
          antialias: true,
          alpha: true
        });
        renderer.setClearColor(0x000000, 0); // Transparent background
        renderer.setSize(wW, wH);
        renderer.shadowMap.enabled = true;
        
        watcher = new Watcher(camera, checkReady);
        scene.add(watcher.el);
        
        var light = new THREE.SpotLight(0xffffff);
        light.position.set(10, 20, 25);
        light.castShadow = true;
        light.shadow.mapSize.width = 4096;
        light.shadow.mapSize.height = 4096;
        light.shadow.camera.near = 1;
        light.shadow.camera.far = 200;
        light.shadow.camera.fov = 45;
        scene.add(light);
        
        var light2 = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(light2);
        
        // Remove background plane for transparent background
        
        light.lookAt(watcher.el.position);
        render();
      }
      
      function setSize() {
        var wrapper = document.getElementById('wrapper') || document.querySelector('[data-wrapper]');
        if (wrapper) {
          wW = wrapper.clientWidth;
          wH = wrapper.clientHeight;
        } else {
          wW = 200;
          wH = 200;
        }
        
        if (canvas3d) {
          canvas3d.style.width = wW + 'px';
          canvas3d.style.height = wH + 'px';
        }
      }
      
      function checkReady() {
        numObjectsLoaded++;
        // Camera is ready, no intro elements to hide
      }
      
      function render() {
        requestAnimationFrame(render);
        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      }
      
      // Load Three.js and start
      if (typeof THREE === 'undefined') {
        var threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        threeScript.onload = function() {
          var gsapScript = document.createElement('script');
          gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js';
          gsapScript.onload = function() {
            // Add Linear easing reference
            window.Linear = { easeNone: Power0.easeNone };
            var objScript = document.createElement('script');
            objScript.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js';
            objScript.onload = function() {
              var mtlScript = document.createElement('script');
              mtlScript.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/MTLLoader.js';
              mtlScript.onload = init;
              document.head.appendChild(mtlScript);
            };
            document.head.appendChild(objScript);
          };
          document.head.appendChild(gsapScript);
        };
        document.head.appendChild(threeScript);
      } else {
        init();
      }
    `;

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      data-wrapper
      className="w-full h-full relative"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default Interactive3DCamera;
