"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

// Lazy load heavy components
const WhatWeDo = dynamic(() => import("./components/WhatWeDo"), {
  loading: () => <div className="min-h-screen" />,
});

const OurProduct = dynamic(() => import("./components/OurProduct"), {
  loading: () => <div className="min-h-screen" />,
});

const AboutUs = dynamic(() => import("./components/AboutUs"), {
  loading: () => <div className="min-h-screen" />,
});

const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => <div className="min-h-screen" />,
});

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

const FlexibleBackgroundMeteors = dynamic(
  () => import("./components/FlexibleBackgroundMeteors"),
  {
    ssr: false,
    loading: () => <div />,
  }
);

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>

      <FlexibleBackgroundMeteors key="main-content">
        <>
          <div id="what-we-do">
            <WhatWeDo />
          </div>
          <div id="our-products">
            <OurProduct />
          </div>
          <div id="about-us">
            <AboutUs />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </>
      </FlexibleBackgroundMeteors>
      <Footer />
    </div>
  );
}
