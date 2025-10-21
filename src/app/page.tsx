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
      <div id="home">
        <HeroSection />
      </div>

      <FlexibleBackgroundMeteors>
        <div id="what-we-do">
          <WhatWeDo />
        </div>
        <div id="our-products">
          <OurProduct />
        </div>
        <div id="our-services">
          <ServicesSection />
        </div>
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </FlexibleBackgroundMeteors>
      <Footer />
    </div>
  );
}
