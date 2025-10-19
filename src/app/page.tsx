import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import ServicesSection from "./components/ServicesSection";
import OurProduct from "./components/OurProduct";
import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FlexibleBackgroundMeteors from "./components/FlexibleBackgroundMeteors";



export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      {/* Main content with animated meteor background */}
      <FlexibleBackgroundMeteors>
        <WhatWeDo />
        <OurProduct />
        <ServicesSection />
        <AboutUs />
        <ContactSection />
      </FlexibleBackgroundMeteors>
      <Footer />
    </div>
  );
}
