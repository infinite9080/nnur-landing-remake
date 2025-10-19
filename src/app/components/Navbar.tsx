"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import StaggeredMenu from "../../components/StaggeredMenu";
import styles from "./Navbar.module.css";

interface MenuItem {
  label: string;
  link: string;
  ariaLabel: string;
}

interface SocialItem {
  label: string;
  link: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const menuItems: MenuItem[] = [
    { label: "Home", link: "/", ariaLabel: "Go to home page" },
    { label: "About", link: "/about", ariaLabel: "Go to about page" },
    { label: "Services", link: "/services", ariaLabel: "Go to services page" },
    {
      label: "Portfolio",
      link: "/portfolio",
      ariaLabel: "Go to portfolio page",
    },
    { label: "Contact", link: "/contact", ariaLabel: "Go to contact page" },
  ];

  // Social media links
  const socialItems: SocialItem[] = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "Instagram", link: "https://instagram.com" },
  ];

  const handleMenuOpen = () => {
    console.log("Menu opened");
  };

  const handleMenuClose = () => {
    console.log("Menu closed");
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <nav className={`${styles.desktopNavbar} ${isScrolled ? styles.scrolled : ''} hidden md:flex fixed z-50 transition-all duration-500 ease-out ${isScrolled
        ? "top-4 bg-white border border-purple-200/40 shadow-2xl rounded-2xl"
        : "top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
        }`} style={{
          left: isScrolled ? '8%' : '0',
          right: isScrolled ? '8%' : '0',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
        <div className={`w-full ${isScrolled ? "px-6" : "px-4 sm:px-6 lg:px-8"}`} style={{
          maxWidth: isScrolled ? 'none' : '1500px',
          marginLeft: isScrolled ? '0' : 'max(1rem, calc((100vw - 1500px) / 2 + 1rem))',
          marginRight: isScrolled ? '0' : 'auto',
          transition: 'all 0.5s ease-out'
        }}>
          <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? "h-14" : "h-16"}`}>
            {/* Logo with Text */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-1">
                <img
                  src="/nNur-Logo-Icon.svg"
                  alt="nNur Logo"
                  className="h-8 w-auto"
                />
                <span className={`${styles.logoText} ${isScrolled ? 'text-4xl' : ''}`}>
                  nnur
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`${styles.navLink} px-4 py-3 text-sm font-semibold relative group rounded-xl ${isScrolled
                    ? "text-gray-700 hover:text-[#7030a1] hover:bg-purple-50/50"
                    : "text-gray-700 hover:text-[#7030a1] hover:bg-purple-50/50"
                    }`}
                  aria-label={item.ariaLabel}
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7030a1] to-[#c77dff] transition-all duration-500 group-hover:w-3/4 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className={`${styles.ctaButton} px-8 py-3 rounded-full text-sm font-bold relative overflow-hidden transition-all duration-300 ${isScrolled
                  ? "bg-gradient-to-r from-[#7030a1] to-[#9d4edd] text-white hover:from-[#5d2685] hover:to-[#8b3fd1] shadow-lg"
                  : "bg-gradient-to-r from-[#7030a1] to-[#9d4edd] text-white hover:from-[#5d2685] hover:to-[#8b3fd1] shadow-lg"
                  }`}
                style={{
                  background: 'linear-gradient(135deg, #7030a1 0%, #9d4edd 50%, #c77dff 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile StaggeredMenu - Hidden on desktop */}
      <div className="md:hidden">
        <StaggeredMenu
          position="right"
          colors={["#1a1a2e", "#16213e", "#0f3460"]}
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          logoUrl="/nNur-Logo-Icon.svg"
          menuButtonColor="#000000"
          openMenuButtonColor="#000000"
          accentColor="#5227FF"
          changeMenuColorOnOpen={true}
          isFixed={true}
          className={styles.navbarStaggered}
          onMenuOpen={handleMenuOpen}
          onMenuClose={handleMenuClose}
        />
      </div>
    </>
  );
};

export default Navbar;
