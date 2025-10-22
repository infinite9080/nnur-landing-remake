"use client";

import React, { useEffect, useState } from "react";
import { Shield, FileCheck, AlertTriangle, Zap } from "lucide-react";
import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";
import Interactive3DCamera from "../../components/Interactive3DCamera";

const WhatWeDo = () => {
  const [metrics, setMetrics] = useState({
    identity: 94.2,
    compliance: 98.7,
    risk: 12,
    maturity: 80
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        identity: Math.max(90, Math.min(98, prev.identity + (Math.random() - 0.5) * 2)),
        compliance: Math.max(95, Math.min(100, prev.compliance + (Math.random() - 0.5) * 1)),
        risk: Math.max(8, Math.min(20, prev.risk + (Math.random() - 0.5) * 3)),
        maturity: Math.max(75, Math.min(85, prev.maturity + (Math.random() - 0.5) * 2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
            style={{ minHeight: "2.5rem", display: "flex", alignItems: "center" }}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              {/* TrueFocus Corner Borders */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>

              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#7030a1] transition-colors duration-300">
                  Identity Governance
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                Identity governance solutions designed to streamline and secure onboarding, offboarding, and user access across your organization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              {/* TrueFocus Corner Borders */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>

              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#7030a1] transition-colors duration-300">
                  Compliance Management
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                Expert guidance on regulatory requirements including GDPR, HIPAA, SOX, and industry-specific standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              {/* TrueFocus Corner Borders */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>

              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#7030a1] transition-colors duration-300">
                  Risk Assessment
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                Proactive risk assessment and management strategies to minimize vulnerabilities and business disruption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative">
              {/* TrueFocus Corner Borders */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>

              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#7030a1] transition-colors duration-300">
                  24/7 Monitoring
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                Continuous monitoring and rapid response to security threats with our advanced threat detection systems.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[450px] xl:h-[500px]">
            {/* Top Left Card */}
            <div className="absolute top-0 left-0 w-64 bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group z-20">
              {/* TrueFocus Corner Borders */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                  Identity Governance
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Identity governance solutions designed to streamline and secure onboarding, offboarding, and user access across your organization.
                </p>
              </div>
            </div>

            {/* Top Right Card */}
            <div className="absolute top-0 right-0 w-64 bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group z-20">
              {/* TrueFocus Corner Borders */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                  Compliance Management
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Efficient audit management to help you maintain regulatory compliance and reduce risk across your organization.
                </p>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute bottom-0 left-0 w-64 bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group z-20">
              {/* TrueFocus Corner Borders */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                  Risk Management
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Empower your organization to proactively identify, assess, and manage enterprise risks through a centralized platform with advanced analytics and reporting tools.
                </p>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="absolute bottom-0 right-0 w-64 bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group z-20">
              {/* TrueFocus Corner Borders */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-[3px] border-t-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-[3px] border-b-[3px] border-[#7030a1] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'drop-shadow(0px 0px 4px #7030a1)' }}></div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                  Security Maturity Assessment
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Continuous evaluation of your organization's security posture with in-depth analysis, benchmarking, and actionable improvement plans.
                </p>
              </div>
            </div>

            {/* Central Feature - 3D Camera with Image Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px] flex items-center justify-center pointer-events-auto">

                {/* 3D Camera */}
                <div className="relative z-10">
                  <Interactive3DCamera />
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <img
                    src="/cctvmonitor.jpg"
                    alt="Security overlay"
                    className="w-full h-full object-contain opacity-20"
                  />
                </div>

                {/* Mac-style Security Monitor Window */}
                <div className="absolute inset-4 z-30 pointer-events-none">
                  {/* Window Frame */}
                  <div className="w-full h-full bg-transparent rounded-lg border border-gray-700/50 shadow-2xl">

                    {/* Mac Window Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-800/90 rounded-t-lg border-b border-gray-700">
                      {/* Mac Traffic Light Buttons */}
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>

                      {/* Window Title */}
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-sm font-mono">CyberSec Compliance Monitor</span>
                      </div>

                      {/* Status */}
                      <div className="text-xs text-gray-400 font-mono">
                        THREAT-INTEL | SOC2
                      </div>
                    </div>

                    {/* Monitor Content Area - Transparent to show camera through */}
                    <div className="relative w-full h-full bg-transparent">

                      {/* Cybersecurity Indicators */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-black/70 backdrop-blur-sm rounded px-2 py-1 space-y-1">
                          <div className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-green-400 text-xs font-mono">FIREWALL: ACTIVE</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-cyan-400 text-xs font-mono">IDS: SCANNING</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-blue-400 text-xs font-mono">GDPR: COMPLIANT</span>
                          </div>
                        </div>
                      </div>

                      {/* Threat Level Indicator */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                          <div className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-green-400 text-xs font-mono">THREAT LEVEL: LOW</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Status Bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-b-lg border-t border-gray-700">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-400">SECURE</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                              <span className="text-cyan-400">MONITORING</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-blue-400">COMPLIANT</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                              <span className="text-orange-400">0 THREATS</span>
                            </div>
                          </div>
                          <div className="text-gray-400">
                            {new Date().toLocaleTimeString()}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-full blur-2xl -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute inset-8 bg-gradient-to-tl from-emerald-400/3 to-blue-400/3 rounded-full blur-xl -z-10 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
              <div className="absolute inset-16 bg-gradient-to-br from-amber-400/2 to-purple-400/2 rounded-full blur-lg -z-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;