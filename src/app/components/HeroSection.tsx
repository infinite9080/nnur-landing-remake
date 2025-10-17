import React from "react";
import styles from "./Hero.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      {/* Full viewport SVG background */}
      <div className={styles.svgBackground}>
        <object
          data="/shield.svg"
          type="image/svg+xml"
          className={styles.fullScreenSvg}
        />
      </div>

      {/* Text content positioned on the left */}
      <div className={styles.textContent}>
        <div className="max-w-2xl">
          {/* Placeholder for animated text - will be replaced with your text code */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Your Animated Text Here
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              This is where your animated text will go. Ready for your custom
              animation code.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
