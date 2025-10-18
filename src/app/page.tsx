import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import ServicesSection from "./components/ServicesSection";
import OurProduct from "./components/OurProduct";

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      {/* Main content with consistent background */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
        <WhatWeDo />
        <OurProduct />
        <ServicesSection />
      </div>
    </div>
  );
}
