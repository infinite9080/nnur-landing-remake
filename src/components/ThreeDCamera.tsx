"use client";

import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
    TweenMax: any;
    TweenLite: any;
    Linear: any;
    Quad: any;
    Utils: any;
    Fly: any;
    Watcher: any;
  }
}

const ThreeDCamera: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Load required libraries
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initThreeJS = async () => {
      try {
        // Check if libraries are already loaded
        if (
          typeof window.THREE !== "undefined" &&
          typeof window.TweenMax !== "undefined"
        ) {
          console.log("Libraries already loaded, skipping...");
        } else {
          // Load Three.js and dependencies
          await loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          );
          await loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          );
        }

        // Add utility functions
        window.Utils = {
          toRad: (deg: number) => (deg * Math.PI) / 180,
          unproject2DCoords: (x: number, y: number, camera: any, z: number) => {
            const vector = new window.THREE.Vector3();
            vector.set(
              (x / window.innerWidth) * 2 - 1,
              -(y / window.innerHeight) * 2 + 1,
              0.5
            );
            vector.unproject(camera);
            const dir = vector.sub(camera.position).normalize();
            const distance = (z - camera.position.z) / dir.z;
            const pos = camera.position
              .clone()
              .add(dir.multiplyScalar(distance));
            return pos;
          },
          loadOBJ: (
            objUrl: string,
            mtlUrl: string | null,
            callback: (object: any) => void
          ) => {
            // Create a more realistic CCTV camera model
            const group = new window.THREE.Group();

            // Main camera body (white housing)
            const bodyGeometry = new window.THREE.BoxGeometry(1.5, 0.8, 0.8);
            const bodyMaterial = new window.THREE.MeshPhongMaterial({
              color: 0xffffff,
            });
            const body = new window.THREE.Mesh(bodyGeometry, bodyMaterial);
            body.name = "cam_body";
            group.add(body);

            // Camera lens (black cylinder pointing forward)
            const lensGeometry = new window.THREE.CylinderGeometry(
              0.25,
              0.25,
              0.4,
              16
            );
            const lensMaterial = new window.THREE.MeshPhongMaterial({
              color: 0x333333,
            });
            const lens = new window.THREE.Mesh(lensGeometry, lensMaterial);
            lens.name = "lens_body";
            lens.rotation.z = Math.PI / 2;
            lens.position.x = 0.6; // Position at front of camera
            group.add(lens);

            // Lens glass (dark glass at front)
            const glassGeometry = new window.THREE.CylinderGeometry(
              0.2,
              0.2,
              0.05,
              16
            );
            const glassMaterial = new window.THREE.MeshPhongMaterial({
              color: 0x000000,
              transparent: true,
              opacity: 0.8,
            });
            const glass = new window.THREE.Mesh(glassGeometry, glassMaterial);
            glass.name = "Glass";
            glass.rotation.z = Math.PI / 2;
            glass.position.x = 0.8; // At the very front
            group.add(glass);

            // LED indicator (red dot)
            const ledGeometry = new window.THREE.SphereGeometry(0.05, 8, 8);
            const ledMaterial = new window.THREE.MeshPhongMaterial({
              color: 0xff0000,
              emissive: 0x440000,
            });
            const led = new window.THREE.Mesh(ledGeometry, ledMaterial);
            led.position.set(0.3, 0.3, 0.3);
            group.add(led);

            setTimeout(() => callback(group), 100);
          },
        };

        // Watcher class
        window.Watcher = function (
          this: any,
          camera: any,
          onReady: () => void
        ) {
          this.onReady = onReady;
          this.camera = camera;
          this.loaded = false;

          this.el = new window.THREE.Object3D();
          const scale = 1.2;
          this.el.scale.set(scale, scale, scale);

          // Position camera in center
          this.el.position.set(0, 0, 5);

          window.Utils.loadOBJ("", null, (object: any) => {
            this.body = object;

            // Point camera directly at the user (lens facing forward)
            this.body.rotation.x = 0;
            this.body.rotation.y = 0; // Face forward (lens pointing toward user)
            this.body.rotation.z = 0;

            this.el.add(object);
            this.loaded = true;
            this.onReady();

            // Add subtle breathing animation to make it feel alive
            if (window.TweenMax) {
              window.TweenMax.to(this.body.position, 2, {
                y: 0.05,
                yoyo: true,
                repeat: -1,
                ease: window.Quad.easeInOut,
              });

              // Subtle lens focus animation
              window.TweenMax.to(this.body.scale, 3, {
                x: 1.02,
                y: 1.02,
                z: 1.02,
                yoyo: true,
                repeat: -1,
                ease: window.Quad.easeInOut,
              });

              // LED blinking animation
              const led = object.children.find(
                (child: any) => child.material && child.material.color.r > 0.5
              );
              if (led) {
                window.TweenMax.to(led.material, 1, {
                  opacity: 0.3,
                  yoyo: true,
                  repeat: -1,
                  ease: window.Quad.easeInOut,
                });
              }
            }
          });
        };

        // Initialize the 3D scene
        let scene: any, camera: any, renderer: any, watcher: any;
        let numObjectsLoaded = 0;

        const canvas = canvasRef.current;
        const wrapper = wrapperRef.current;
        const intro = introRef.current;
        const bg = bgRef.current;

        if (!canvas || !wrapper) return;

        const wW = wrapper.clientWidth;
        const wH = wrapper.clientHeight;

        scene = new window.THREE.Scene();
        camera = new window.THREE.PerspectiveCamera(45, wW / wH, 0.1, 1000);
        camera.position.set(0, 0, 8);
        camera.lookAt(0, 0, 0);

        renderer = new window.THREE.WebGLRenderer({
          canvas: canvas,
          antialias: true,
          alpha: true,
        });
        renderer.setSize(wW, wH);
        renderer.shadowMap.enabled = true;

        watcher = new window.Watcher(camera, () => {
          numObjectsLoaded++;
          if (numObjectsLoaded >= 1) {
            if (window.TweenLite && intro && bg) {
              window.TweenLite.to([intro, bg], 1, { opacity: 0 });
            }
          }
        });

        scene.add(watcher.el);

        // Lighting
        const directionalLight = new window.THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 10);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        // Add a point light for better camera visibility
        const pointLight = new window.THREE.PointLight(0xffffff, 0.8, 100);
        pointLight.position.set(0, 0, 10);
        scene.add(pointLight);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      } catch (error) {
        console.error("Failed to load 3D camera:", error);
      }
    };

    initThreeJS();

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll(
        'script[src*="three"], script[src*="gsap"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-full rounded-2xl overflow-hidden relative"
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div ref={bgRef} className="absolute w-full h-full bg-yellow-400" />
      <img
        ref={introRef}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/356608/distraction.jpg"
        className="absolute max-h-[90%] max-w-[90%] opacity-0 shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt="CCTV"
      />
    </div>
  );
};

export default ThreeDCamera;
