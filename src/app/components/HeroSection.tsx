"use client";

import React from "react";
import styles from "./Hero.module.css";
import DecryptedText from "../../components/DecryptedText";
import TrueFocus from "../../components/TrueFocus";
import {
  CircleCheck,
  Shield,
  Lock,
  Eye,
  Zap,
  ShieldCheck,
  FileCheck2,
  AlertTriangle,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      {/* SVG Background - Hidden on mobile */}
      <div className={`${styles.svgBackground} hidden lg:block`}>
        <object
          data="/shield.svg"
          type="image/svg+xml"
          className={styles.fullScreenSvg}
        />
      </div>

      {/* Mobile Background */}
      <div className={`${styles.mobileBackground} lg:hidden`}></div>

      {/* Animated Background Elements - Centered */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-full max-w-4xl">
          <div className="absolute top-20 left-1/4 animate-pulse">
            <Shield className="w-8 h-8 text-[#7030a1]/20" />
          </div>
          <div
            className="absolute top-40 right-1/4 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <Lock className="w-6 h-6 text-[#7030a1]/30" />
          </div>
          <div
            className="absolute bottom-32 left-1/3 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <Eye className="w-7 h-7 text-[#7030a1]/25" />
          </div>
          <div
            className="absolute bottom-20 right-1/3 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Zap className="w-5 h-5 text-[#7030a1]/20" />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className={styles.textContent}>
        <div
          className="px-4 my-auto sm:px-6 lg:px-8 w-full mx-auto"
          style={{
            maxWidth: "1500px",
          }}
        >
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Main Title with TrueFocus */}
            <div className="space-y-4 sm:space-y-6">
              <div className={`hero-title-container ${styles.animateFadeInUp}`}>
                <TrueFocus
                  sentence="Cybersecurity & Compliance"
                  borderColor="purple"
                  blurAmount={0}
                  manualMode={false}
                  animationDuration={0.8}
                  pauseBetweenAnimations={2}
                />
              </div>
            </div>

            {/* Enhanced Description */}
            <div
              className={`max-w-4xl mx-auto lg:mx-0 text-center lg:text-left ${styles.animateZoomIn}`}
              style={{ animationDelay: "0.6s" }}
            >
              <div
                style={{
                  minHeight: "4rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
                className="decrypted-text-container"
              >
                <DecryptedText
                  text="Protect your digital assets with robust security, regulatory compliance, and proactive risk management."
                  className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light"
                  parentClassName="block w-full"
                  animateOn="view"
                  speed={30}
                  sequential={true}
                  revealDirection="start"
                />
              </div>
            </div>

            {/* Enhanced Trust Indicators */}
            <div
              className={`flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start ${styles.animateRotateIn}`}
              style={{ animationDelay: "1.2s" }}
            >
              <div className="group flex items-center gap-3 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm px-5 py-4 rounded-2xl shadow-lg border border-white/40 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CircleCheck
                  size={20}
                  className="text-[#7030a1] flex-shrink-0 group-hover:animate-spin"
                />
                <span className="font-bold text-gray-800 group-hover:text-[#7030a1] transition-colors">
                  ISO 27001
                </span>
              </div>

              <div className="group flex items-center gap-3 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm px-5 py-4 rounded-2xl shadow-lg border border-white/40 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CircleCheck
                  size={20}
                  className="text-[#7030a1] flex-shrink-0 group-hover:animate-spin"
                />
                <span className="font-bold text-gray-800 group-hover:text-[#7030a1] transition-colors">
                  SOC 2
                </span>
              </div>
              {/* 
              <div className="group flex items-center gap-3 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm px-5 py-4 rounded-2xl shadow-lg border border-white/40 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CircleCheck
                  size={20}
                  className="text-[#7030a1] flex-shrink-0 group-hover:animate-spin"
                />
                <span className="font-bold text-gray-800 group-hover:text-[#7030a1] transition-colors">
                  24/7 Monitoring
                </span>
              </div>

              <div className="group flex items-center gap-3 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm px-5 py-4 rounded-2xl shadow-lg border border-white/40 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CircleCheck
                  size={20}
                  className="text-[#7030a1] flex-shrink-0 group-hover:animate-spin"
                />
                <span className="font-bold text-gray-800 group-hover:text-[#7030a1] transition-colors">
                  99% Secure
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
