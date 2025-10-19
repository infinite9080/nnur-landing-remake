"use client";

import React, { useEffect, useState, useCallback, memo } from "react";

import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";
import Link from "next/link";

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
      "A system to securely manage user identities, authentication, and access rights",
    hasPage: true,
  },
  {
    image: "/All-Logos/nErim/nErim-Icon.png",
    link: "/products/nerim",
    title: "nErim",
    description:
      "A centralized solution for identifying, assessing, and managing enterprise-level risks",
    hasPage: true,
  },
  {
    image: "/All-Logos/nBoard/Logo-icon2.png",
    link: "/products/nboard",
    title: "nBoard",
    description:
      "A digital solution to streamline board governance, manage meetings, agendas, and documentation",
    hasPage: true,
  },
  {
    image: "/All-Logos/nISMA/Logo2-512x533.png",
    link: "/products/nisma",
    title: "nISMA",
    description:
      "A tool for assessing and improving the maturity of information security practices",
    hasPage: true,
  },
];

// Memoized carousel indicators to prevent re-renders
const CarouselIndicators = memo(({ currentSlide, onSlideChange }: { currentSlide: number; onSlideChange: (index: number) => void }) => (
  <div className="flex justify-center mt-8 space-x-2">
    {PRODUCT_MENU_ITEMS.map((_, index) => (
      <button
        key={`indicator-${index}`}
        onClick={() => onSlideChange(index)}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-[#7030a1]' : 'bg-gray-300 hover:bg-[#7030a1]'
          }`}
      />
    ))}
  </div>
));

CarouselIndicators.displayName = 'CarouselIndicators';

const OurProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % PRODUCT_MENU_ITEMS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + PRODUCT_MENU_ITEMS.length) % PRODUCT_MENU_ITEMS.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play carousel with stable reference
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PRODUCT_MENU_ITEMS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="max-w-4xl mx-auto mt-10 min-h-[4rem] flex items-center">
            <DecryptedText
              text="Discover our comprehensive suite of cybersecurity and compliance products designed to protect and empower your business operations."
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

            if (product.hasPage) {
              return (
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
                      {product.description.length > 120 ? `${product.description.substring(0, 120)}...` : product.description}
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
              );
            } else {
              return (
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
                      {product.description.length > 120 ? `${product.description.substring(0, 120)}...` : product.description}
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
              );
            }
          })}
        </div>

        {/* Product Carousel Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Our Products</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of cybersecurity and compliance solutions through our interactive product carousel.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {PRODUCT_MENU_ITEMS.map((product, index) => (
                <div key={`carousel-${product.title}`} className="min-w-full px-4">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full max-w-2xl mx-auto">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg border border-gray-200">
                        <img
                          src={product.image}
                          alt={`${product.title} Logo`}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 text-[#7030a1]">
                        {product.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                        {product.description}
                      </p>
                      {product.hasPage ? (
                        <a
                          href={product.link}
                          className="inline-flex items-center px-6 py-3 bg-[#7030a1] text-white font-semibold rounded-lg hover:bg-[#5a2581] transition-colors duration-300"
                        >
                          Learn More
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      ) : (
                        <span className="inline-flex items-center px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed">
                          Coming Soon
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <CarouselIndicators currentSlide={currentSlide} onSlideChange={goToSlide} />

          {/* Additional Product Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-[#7030a1] mb-2">
                  99.9%
                </div>
                <div className="text-gray-600 font-medium">
                  Uptime Guarantee
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-[#7030a1] mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">
                  Support Available
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-[#7030a1] mb-2">
                  ISO 27001
                </div>
                <div className="text-gray-600 font-medium">
                  Certified Security
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;