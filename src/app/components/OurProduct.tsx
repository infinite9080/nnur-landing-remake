"use client";

import React, { useState, useEffect } from "react";
import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";
import Link from "next/link";
import styles from "./OurProduct.module.css";

// Move productMenuItems outside component to prevent re-creation
const PRODUCT_MENU_ITEMS = [
  {
    image: "/All-Logos/nAMS/icononly_transparent_nobuffer.png",
    link: "https://nams.nnur.ca/",
    title: "nAMS",
    description:
      "A platform for managing internal and external audits efficiently across the organization.",
    hasPage: true,
  },
  {
    image: "/All-Logos/nIAM/niamofficiallogo.svg",
    link: "https://niam.nnur.ca/",
    title: "nIAM",
    description:
      "A system to securely manage user identities, authentication, and access rights.",
    hasPage: true,
  },
  {
    image: "/All-Logos/nErim/nErim-Icon.png",
    link: "/products/nerim",
    title: "nErim",
    description:
      "A centralized solution for identifying, assessing, and managing enterprise-level risks.",
    hasPage: true,
  },
  {
    image: "/All-Logos/nBoard/Logo-icon2.png",
    link: "/products/nboard",
    title: "nBoard",
    description:
      "A digital solution to streamline board governance, manage meetings, agendas, and documentation.",
    hasPage: true,
  },
  {
    image: "/All-Logos/nISMA/Logo2-512x533.png",
    link: "/products/nisma",
    title: "nISMA",
    description:
      "A tool for assessing and improving the maturity of information security practices.",
    hasPage: true,
  },
];

const OurProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % PRODUCT_MENU_ITEMS.length);
    }, 4000); // Change slide every 4 seconds

    // Reset timer on manual interaction
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1500px" }}
      >
        {/* Section Title */}
        <div className="text-center mb-20 lg:mb-28">
          <TrueFocus
            sentence="Our Products"
            borderColor="purple"
            blurAmount={0}
          />
          <div className="max-w-4xl mx-auto mt-10" style={{ minHeight: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <DecryptedText
              text="Discover our comprehensive sets of cybersecurity and compliance products designed to protect and empower your business operations."
              className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light"
              animateOn="view"
              speed={25}
              sequential={true}
              revealDirection="start"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {PRODUCT_MENU_ITEMS.map((product, index) => {
            const categories = ["Audit & Compliance", "Identity & Access Control", "Risk Intelligence", "Smart Governance", "Security Maturity"];
            return (
              product.hasPage ? (
                <Link
                  key={`grid-${product.title}`}
                  href={product.link}
                  className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-gray-200">
                      <img
                        src={product.image}
                        alt={`${product.title} Logo`}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#7030a1] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      <span className="px-2 py-1 bg-[#7030a1]/10 text-[#7030a1] text-xs font-medium rounded-full">
                        {categories[index]}
                      </span>
                    </div>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-[#7030a1] hover:text-[#5a2581] font-semibold text-sm transition-colors duration-300">
                        Learn more
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={`grid-${product.title}`}
                  className="group bg-white p-6 rounded-3xl shadow-lg border-2 border-gray-100 relative overflow-hidden opacity-75"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center mb-4 shadow-lg border border-gray-200">
                      <img
                        src={product.image}
                        alt={`${product.title} Logo`}
                        className="w-10 h-10 object-contain grayscale"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                        {categories[index]}
                      </span>
                    </div>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-gray-400 font-semibold text-sm">
                        Coming Soon
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>

        {/* Product Accordion Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Deep Dive</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore each cybersecurity solution in detail. Our products automatically cycle, or you can click to learn more.
            </p>
          </div>

          <div className="flex w-full items-start justify-between gap-12">
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                {PRODUCT_MENU_ITEMS.map((product, index) => (
                  <div key={`accordion-${product.title}`} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setCurrentSlide(index)}
                      className={`w-full px-6 py-4 text-left transition-all duration-300 rounded-lg ${currentSlide === index ? 'bg-[#7030a1] text-white' : 'bg-white text-gray-900 hover:bg-gray-50'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${currentSlide === index ? 'bg-white/20' : 'bg-gray-100'}`}>
                            <img src={product.image} alt={`${product.title} Logo`} className="w-8 h-8 object-contain" />
                          </div>
                          <h6 className="text-xl font-semibold">{product.title}</h6>
                        </div>
                        <svg className={`w-5 h-5 transition-transform duration-300 ${currentSlide === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {currentSlide === index && (
                      <div className={`px-6 pb-6 pt-2 ${styles.accordionContent}`}>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {[
                            "Streamline your audit processes with automated workflows, comprehensive reporting, and real-time compliance tracking. Built for organizations that need to maintain rigorous audit standards while reducing manual overhead.",
                            "Secure your digital infrastructure with advanced identity management, multi-factor authentication, and granular access controls. Protect sensitive data while ensuring seamless user experiences across all platforms.",
                            "Transform your risk management strategy with intelligent threat detection, predictive analytics, and comprehensive vulnerability assessments. Stay ahead of emerging risks with data-driven insights and automated monitoring.",
                            "Revolutionize board operations with digital meeting management, secure document sharing, and collaborative decision-making tools. Enhance governance efficiency while maintaining the highest security standards.",
                            "Elevate your security posture with comprehensive maturity assessments, benchmarking against industry standards, and actionable improvement roadmaps. Build a robust security culture that evolves with emerging threats."
                          ][index]}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-[#7030a1]/10 text-[#7030a1] text-sm font-medium rounded-full">
                              {["Audit & Compliance", "Identity & Access Control", "Risk Intelligence", "Smart Governance", "Security Maturity"][index]}
                            </span>
                          </div>
                          {product.hasPage ? (
                            <Link href={product.link} className="inline-flex items-center px-4 py-2 bg-[#7030a1] text-white font-semibold rounded-lg hover:bg-[#5a2581] transition-colors duration-300">
                              Learn More
                              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                          ) : (
                            <span className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Preview Carousel */}
            <div className="relative hidden w-1/2 overflow-hidden rounded-xl bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 md:flex md:flex-col">
              {/* This flex-grow div ensures the content inside is centered in the available space */}
              <div className="flex-grow flex items-center justify-center p-8 relative overflow-hidden">
                <div key={currentSlide} className={`text-center ${styles.carouselContent}`}>
                  <div className="bg-white rounded-3xl w-32 h-32 flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <img
                      src={PRODUCT_MENU_ITEMS[currentSlide].image}
                      alt={`${PRODUCT_MENU_ITEMS[currentSlide].title} Preview`}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-[#7030a1] mb-3">
                    {PRODUCT_MENU_ITEMS[currentSlide].title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {[
                      "Streamline your audit processes with automated workflows, comprehensive reporting, and real-time compliance tracking.",
                      "Secure your digital infrastructure with advanced identity management, multi-factor authentication, and granular access controls.",
                      "Transform your risk management strategy with intelligent threat detection, predictive analytics, and comprehensive vulnerability assessments.",
                      "Revolutionize board operations with digital meeting management, secure document sharing, and collaborative decision-making tools.",
                      "Elevate your security posture with comprehensive maturity assessments, benchmarking against industry standards, and actionable improvement roadmaps."
                    ][currentSlide]}
                  </p>
                </div>
              </div>
              
              {/* Dots Container */}
              <div className={styles.dotsContainer}>
                {PRODUCT_MENU_ITEMS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-[#7030a1] mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-[#7030a1] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-[#7030a1] mb-2">ISO 27001</div>
              <div className="text-gray-600 font-medium">Certified Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;