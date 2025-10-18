"use client";

import React from "react";

import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";
import InfiniteMenu from "../../components/InfiniteMenu";
import "./InfiniteMenuStyles.css";

const OurProduct = () => {
  // Product menu items for the infinite menu
  const productMenuItems = [
    {
      image: "/All-Logos/nAMS/icononly_transparent_nobuffer.png",
      link: "/products/nams",
      title: "nAMS",
      description:
        "Comprehensive Asset Management System for tracking and managing organizational assets efficiently",
    },
    {
      image: "/All-Logos/nIAM/niam-icon.png",
      link: "/products/niam",
      title: "nIAM",
      description:
        "Identity and Access Management solution for secure user authentication and authorization",
    },
    {
      image: "/All-Logos/nErim/nErim-Icon.png",
      link: "/products/nerim",
      title: "nErim",
      description:
        "Enterprise Resource Information Management platform for streamlined business operations",
    },
    {
      image: "/All-Logos/nBoard/Logo-icon2.png",
      link: "/products/nboard",
      title: "nBoard",
      description:
        "Digital board management solution for effective governance and decision-making processes",
    },
    {
      image: "/All-Logos/nISMA/Logo2-512x533.png",
      link: "/products/nisma",
      title: "nISMA",
      description:
        "Information Security Management Application for comprehensive security governance",
    },
  ];

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
          <div className="max-w-4xl mx-auto mt-10">
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
          {/* nAMS */}
          <div className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-gray-200">
                <img
                  src="/All-Logos/nAMS/icononly_transparent_nobuffer.png"
                  alt="nAMS Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#7030a1] transition-colors duration-300">
                nAMS
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Asset Management System for tracking and managing organizational
                assets efficiently.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-[#7030a1]/10 text-[#7030a1] text-xs font-medium rounded-full">
                  Asset Tracking
                </span>
              </div>
            </div>
          </div>

          {/* nIAM */}
          <div className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-gray-200">
                <img
                  src="/All-Logos/nIAM/niam-icon.png"
                  alt="nIAM Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#7030a1] transition-colors duration-300">
                nIAM
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Identity and Access Management solution for secure user
                authentication.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-[#7030a1]/10 text-[#7030a1] text-xs font-medium rounded-full">
                  Identity
                </span>
              </div>
            </div>
          </div>

          {/* nErim */}
          <div className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-gray-200">
                <img
                  src="/All-Logos/nErim/nErim-Icon.png"
                  alt="nErim Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#7030a1] transition-colors duration-300">
                nErim
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Enterprise Resource Information Management platform for business
                operations.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-[#7030a1]/10 text-[#7030a1] text-xs font-medium rounded-full">
                  ERP
                </span>
              </div>
            </div>
          </div>

          {/* nBoard */}
          <div className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-gray-200">
                <img
                  src="/All-Logos/nBoard/Logo-icon2.png"
                  alt="nBoard Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#7030a1] transition-colors duration-300">
                nBoard
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Digital board management solution for effective governance
                processes.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-[#7030a1]/10 text-[#7030a1] text-xs font-medium rounded-full">
                  Governance
                </span>
              </div>
            </div>
          </div>

          {/* nISMA */}
          <div className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border border-gray-200">
                <img
                  src="/All-Logos/nISMA/Logo2-512x533.png"
                  alt="nISMA Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#7030a1] transition-colors duration-300">
                nISMA
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Information Security Management Application for comprehensive
                security governance.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-[#7030a1]/10 text-[#7030a1] text-xs font-medium rounded-full">
                  Security
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 3D Product Menu Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div>
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Navigate through our comprehensive product offerings using our
                interactive 3D menu. Drag to rotate and explore each product in
                detail.
              </p>
            </div>

            {/* 3D Infinite Menu Integration */}
            <div className="infinite-menu-container w-full h-[600px] lg:h-[700px] rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg">
              <InfiniteMenu items={productMenuItems} />
            </div>

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
      </div>
    </section>
  );
};

export default OurProduct;
