"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("mobile-menu-button");

      if (isMobileMenuOpen && mobileMenu && menuButton) {
        if (!mobileMenu.contains(target) && !menuButton.contains(target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Navigation items
  const menuItems: MenuItem[] = [
    { label: "Home", link: "/", ariaLabel: "Go to home page" },
    {
      label: "Our Products",
      link: "/#our-products",
      ariaLabel: "Go to our products section",
    },
    // { label: "Our Services", link: "/#our-services", ariaLabel: "Go to our services section" },
    {
      label: "About Us",
      link: "/#about-us",
      ariaLabel: "Go to about us section",
    },
    { label: "Contact", link: "/#contact", ariaLabel: "Go to contact section" },
  ];

  // Social media links
  const socialItems: SocialItem[] = [
    {
      label: "Facebook",
      link: "https://www.facebook.com/people/nNur-Inc/61578344970738/",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/company/nnur-inc/posts/?feedView=all",
    },
    { label: "WhatsApp", link: "https://wa.me/14373261371" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // ---- MODIFICATION: Removed 'w-full' class ----
    <nav
      className={`${styles.navbar} ${
        isScrolled ? styles.scrolled : ""
      } relative lg:fixed z-50`}
    >
      {/* Background with blur effect */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-purple-200/40 shadow-2xl lg:rounded-3xl lg:lg:rounded-[28px]"
            : "bg-white/98 backdrop-blur-sm border-b border-gray-200/50 shadow-lg"
        }`}
      />

      {/* Content container */}
      <div
        className={`relative transition-all duration-500 ${
          isScrolled
            ? "mx-auto px-4 sm:px-6 lg:mx-0 lg:px-3"
            : "mx-auto px-4 sm:px-6 lg:px-8"
        }`}
        style={!isScrolled ? { maxWidth: "1500px" } : {}}
      >
        <div
          className={`flex items-center transition-all duration-500 ${
            isScrolled ? "h-16 justify-between" : "h-20 justify-between"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/nNur-Logo-Icon.svg"
                alt="nNur Logo"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-8" : "h-10"
                }`}
              />
              <span className={`${styles.logoText} pr-2`}>nnur</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${styles.navLink} px-4 py-2 text-sm font-semibold relative group rounded-lg transition-all duration-300`}
                aria-label={item.ariaLabel}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#7030a1] to-[#c77dff] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="/#contact"
              className={`${styles.ctaButton} px-6 py-3 rounded-full text-sm font-bold transition-all duration-300`}
            >
              <span className="flex items-center space-x-2">
                <span>Get Started</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              className={`${styles.mobileMenuButton} p-2 rounded-lg transition-all duration-300`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } ${isScrolled ? "top-16" : "top-20"}`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Menu Panel */}
        <div
          className={`relative bg-white/98 backdrop-blur-md border-b border-gray-200/50 shadow-2xl transform transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Navigation Links */}
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`${styles.mobileNavLink} block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-300`}
                  aria-label={item.ariaLabel}
                  data-delay={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="pt-4 border-t border-gray-200/50">
              <a
                href="/#contact"
                className={`${styles.mobileCTA} block w-full text-center px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300`}
              >
                Get Started
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-gray-200/50">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">
                Connect with us
              </h3>
              <div className="flex space-x-4">
                {socialItems.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialLink} px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
