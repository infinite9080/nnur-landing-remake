"use client";

import React from "react";
import { Shield, FileCheck, AlertTriangle, Zap } from "lucide-react";
import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";

const WhatWeDo = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1500px" }}
      >
        {/* Section Title */}
        <div className="text-center mb-20 lg:mb-28">
          <TrueFocus
            sentence="What We Do?"
            borderColor="purple"
            blurAmount={0}
          />
          <div className="max-w-4xl mx-auto mt-10">
            <DecryptedText
              text="We provide comprehensive cybersecurity and compliance solutions to protect your digital assets and ensure regulatory adherence across all business operations."
              className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light"
              animateOn="view"
              speed={25}
              sequential={true}
              revealDirection="start"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Advanced Security
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Multi-layered protection systems designed to defend against
                sophisticated cyber attacks and data breaches.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Compliance Management
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance on regulatory requirements including GDPR,
                HIPAA, SOX, and industry-specific standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Risk Assessment
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Proactive risk assessment and management strategies to minimize
                vulnerabilities and business disruption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  24/7 Monitoring
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Continuous monitoring and rapid response to security threats
                with our advanced threat detection systems.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                  Advanced Security
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Multi-layered protection systems designed to defend against
                  sophisticated cyber attacks and data breaches.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                  Compliance Management
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Expert guidance on regulatory requirements including GDPR,
                  HIPAA, SOX, and industry-specific standards.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                  Risk Assessment
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Proactive risk assessment and management strategies to
                  minimize vulnerabilities and business disruption.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                  24/7 Monitoring
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Continuous monitoring and rapid response to security threats
                  with our advanced threat detection systems.
                </p>
              </div>
            </div>
          </div>

          {/* Central Feature Image */}
          <div className="flex justify-center">
            <div className="relative w-96 h-96 xl:w-[450px] xl:h-[450px] rounded-full shadow-2xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="happy-business-people-laughing-and-enjoying-a-casual-chat-in-an-office-taking-a-break-from-paperwo.webp"
                  alt="Security Background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/80 via-[#8b5cf6]/70 to-[#9d4edd]/80"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                <p className="text-white/90 text-base xl:text-lg font-medium leading-relaxed max-w-xs">
                  Securing your digital future with advanced cybersecurity
                  solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
