import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <ServicesSection />
    </div>
  );
}
