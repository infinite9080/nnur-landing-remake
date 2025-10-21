"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import LogoIcon from "./LogoIcon";

const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Use a GSAP context for safe cleanup
    const ctx = gsap.context(() => {
      // Find all the individual <path> elements within the SVG
      const paths = logoRef.current?.querySelectorAll("path");
      const timeline = gsap.timeline();

      // Safety check in case the elements aren't rendered yet
      if (!paths || !textRef.current || !containerRef.current) return;

      // --- ANIMATION TIMELINE ---

      // 1. Set initial states for all elements
      gsap.set(textRef.current, { opacity: 0, y: 20 });
      gsap.set(paths, {
        autoAlpha: 0, // More performant than opacity, handles visibility
        scale: 0.2,
        transformOrigin: "50% 50%",
      });

      // 2. Animate the logo paths transforming into place
      timeline.to(paths, {
        autoAlpha: 1,
        scale: 1,
        duration: 1.5,
        ease: "expo.out",
        // The "stagger" is the key to the construction effect
        stagger: {
          each: 0.007,
          from: "random", // Animates paths in a random order
        },
      });

      // 3. Animate the text, starting slightly before the logo finishes
      timeline.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "expo.out",
        },
        "-=1.2" // Overlap animations for a smoother flow
      );

      // 4. Add a subtle pulse after the main animation is complete
      gsap.to(logoRef.current, {
        scale: 1.02,
        duration: 1.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.5, // Start pulsing after the intro
      });

      // 5. Fade out the entire preloader after a delay
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 2.5, // Total hold time before fading out
        ease: "power2.in",
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = "none";
            document.body.classList.remove("overflow-hidden");
          }
        },
      });
    }, containerRef);

    // Lock scroll while the preloader is active
    document.body.classList.add("overflow-hidden");

    // Cleanup function to revert all GSAP animations
    return () => {
      ctx.revert();
      document.body.classList.remove("overflow-hidden");
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 1 }}
        className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
      >
        <div className="flex items-center">
          {/* SVG Logo */}
          <div ref={logoRef} className="w-20 h-20">
            <LogoIcon />
          </div>

          {/* Text "nnur" */}
          <span
            ref={textRef}
            className="text-[#732e9e] text-7xl md:text-7xl font-bold italic tracking-tight"
            style={{ fontFamily: "Abingdon, serif" }}
          >
            nnur
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
