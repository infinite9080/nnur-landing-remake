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
        <div className="text-center mb-12 lg:mb-16">
          <TrueFocus
            sentence="What We Do?"
            borderColor="purple"
            blurAmount={0}
          />
          <div
            className="max-w-3xl mx-auto mt-6"
            style={{
              minHeight: "2.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DecryptedText
              text="We provide comprehensive cybersecurity and compliance solutions to protect your digital assets and ensure regulatory adherence."
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-5"
              animateOn="view"
              speed={25}
              sequential={true}
              revealDirection="start"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              {/* TrueFocus Corner Borders */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>

              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#7030a1] transition-colors duration-300">
                  Identity Governance
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                Identity governance solutions designed to streamline and secure
                onboarding, offboarding, and user access across your
                organization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              {/* TrueFocus Corner Borders */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>

              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#7030a1] transition-colors duration-300">
                  Compliance Management
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                Expert guidance on regulatory requirements including GDPR,
                HIPAA, SOX, and industry-specific standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              {/* TrueFocus Corner Borders */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>

              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#7030a1] transition-colors duration-300">
                  Risk Assessment
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                Proactive risk assessment and management strategies to minimize
                vulnerabilities and business disruption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              {/* TrueFocus Corner Borders */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>

              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#7030a1] transition-colors duration-300">
                  24/7 Monitoring
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                Continuous monitoring and rapid response to security threats
                with our advanced threat detection systems.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[500px] xl:h-[550px]">
            {/* Top Left Card */}
            <div className="absolute top-0 left-[15%] w-60 bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group z-20">
              {/* TrueFocus Corner Borders */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                  Identity Governance
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Identity governance solutions designed to streamline and
                  secure onboarding, offboarding, and user access across your
                  organization.
                </p>
              </div>
            </div>

            {/* Top Right Card */}
            <div className="absolute top-0 right-[15%] w-60 bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group z-20">
              {/* TrueFocus Corner Borders */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                  Compliance Management
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Efficient audit management to help you maintain regulatory
                  compliance and reduce risk across your organization.
                </p>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute bottom-0 left-[15%] w-60 bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group z-20">
              {/* TrueFocus Corner Borders */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                  Risk Management
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Empower your organization to proactively identify, assess, and
                  manage enterprise risks through a centralized platform with
                  advanced analytics and reporting tools.
                </p>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="absolute bottom-0 right-[15%] w-60 bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group z-20">
              {/* TrueFocus Corner Borders */}
              <div
                className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "drop-shadow(0px 0px 4px #7030a1)" }}
              ></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                  Security Maturity Assessment
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Continuous evaluation of your organization's security posture
                  with in-depth analysis, benchmarking, and actionable
                  improvement plans.
                </p>
              </div>
            </div>

            {/* Central Feature - Clean Security Visualization */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="relative w-[400px] h-[400px] xl:w-[450px] xl:h-[450px]">
                {/* Central NNUR Logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    {/* Main Logo Container */}
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-2xl border-2 border-gray-100 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                      <img
                        src="/nNur-Logo-Icon.svg"
                        alt="NNUR Logo"
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    {/* Animated Rings */}
                    <div
                      className="absolute inset-0 border-2 border-[#7030a1]/20 rounded-3xl animate-ping"
                      style={{ animationDuration: "3s" }}
                    ></div>
                    <div
                      className="absolute -inset-2 border border-[#7030a1]/10 rounded-3xl animate-ping"
                      style={{ animationDuration: "4s", animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>

                {/* Floating Compliance Badges */}
                <div className="absolute top-16 left-16 z-10">
                  <div
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 hover:shadow-xl transition-shadow duration-300 animate-bounce"
                    style={{ animationDuration: "4s", animationDelay: "0s" }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-700">
                        GDPR
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Compliant</div>
                  </div>
                </div>

                <div className="absolute top-16 right-16 z-10">
                  <div
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 hover:shadow-xl transition-shadow duration-300 animate-bounce"
                    style={{ animationDuration: "4s", animationDelay: "1s" }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-700">
                        SOX
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Verified</div>
                  </div>
                </div>

                <div className="absolute bottom-16 left-16 z-10">
                  <div
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 hover:shadow-xl transition-shadow duration-300 animate-bounce"
                    style={{ animationDuration: "4s", animationDelay: "2s" }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-700">
                        HIPAA
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Secured</div>
                  </div>
                </div>

                <div className="absolute bottom-16 right-16 z-10">
                  <div
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 hover:shadow-xl transition-shadow duration-300 animate-bounce"
                    style={{ animationDuration: "4s", animationDelay: "3s" }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-700">
                        ISO 27001
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Certified</div>
                  </div>
                </div>

                {/* Security Metrics Cards */}

                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-4 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        <Shield className="w-6 h-6 mx-auto" />
                      </div>
                      <div className="text-sm text-gray-600">Secure</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-4 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">
                        <FileCheck className="w-6 h-6 mx-auto" />
                      </div>
                      <div className="text-sm text-gray-600">Compliant</div>
                    </div>
                  </div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute inset-0">
                  {/* Subtle connection lines */}
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#7030a1"
                          stopOpacity="0.1"
                        />
                        <stop
                          offset="50%"
                          stopColor="#7030a1"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#7030a1"
                          stopOpacity="0.1"
                        />
                      </linearGradient>
                    </defs>

                    {/* Lines from center to corners */}
                    <line
                      x1="200"
                      y1="200"
                      x2="80"
                      y2="80"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="320"
                      y2="80"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="80"
                      y2="320"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="320"
                      y2="320"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    />

                    {/* Lines to side metrics */}
                    <line
                      x1="200"
                      y1="200"
                      x2="100"
                      y2="200"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: "3s" }}
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="300"
                      y2="200"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: "3.5s" }}
                    />
                  </svg>
                </div>

                {/* Outer Security Perimeter */}
                <div
                  className="absolute inset-0 border-2 border-dashed border-[#7030a1]/10 rounded-full animate-spin"
                  style={{ animationDuration: "30s" }}
                ></div>
                <div
                  className="absolute inset-8 border border-dashed border-[#7030a1]/5 rounded-full animate-spin"
                  style={{
                    animationDuration: "20s",
                    animationDirection: "reverse",
                  }}
                ></div>

                {/* Subtle Background Glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 via-transparent to-blue-400/5 rounded-full blur-3xl animate-pulse"
                  style={{ animationDuration: "6s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
