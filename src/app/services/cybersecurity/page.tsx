"use client";

import React from "react";
import Link from "next/link";
import { Shield, Monitor, AlertCircle, Lock, Eye, Zap, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import TrueFocus from "../../../components/TrueFocus";
import DecryptedText from "../../../components/DecryptedText";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FlexibleBackgroundMeteors from "../../components/FlexibleBackgroundMeteors";

const features = [
  {
    icon: Monitor,
    title: "24/7 Threat Monitoring",
    description: "Continuous monitoring of your network and systems to detect and respond to threats in real-time."
  },
  {
    icon: Lock,
    title: "Advanced Firewall Protection",
    description: "Next-generation firewall solutions with deep packet inspection and threat intelligence."
  },
  {
    icon: AlertCircle,
    title: "Incident Response",
    description: "Rapid response team ready to contain and remediate security incidents when they occur."
  },
  {
    icon: Eye,
    title: "Vulnerability Assessment",
    description: "Regular security assessments to identify and address potential vulnerabilities before they're exploited."
  },
  {
    icon: Zap,
    title: "Endpoint Protection",
    description: "Comprehensive protection for all devices connected to your network, including mobile devices."
  },
  {
    icon: Shield,
    title: "Data Encryption",
    description: "End-to-end encryption solutions to protect sensitive data both at rest and in transit."
  }
];

const benefits = [
  "Reduce cyber attack risk by up to 95%",
  "24/7 monitoring and support",
  "Compliance with industry standards",
  "Rapid incident response",
  "Regular security updates",
  "Expert security consultation"
];

export default function CybersecurityPage() {
  return (
    <div className="font-sans overflow-x-hidden">


      <FlexibleBackgroundMeteors>
        <section className="py-16 sm:py-24 lg:py-32">
          <div
            className="mx-auto px-4 sm:px-6 lg:px-8"
            style={{ maxWidth: "1500px" }}
          >
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 text-gray-600 hover:text-[#7030a1] font-medium rounded-xl hover:bg-white/50 transition-all duration-300 group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Services
              </Link>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <TrueFocus
                sentence="Cybersecurity Services"
                borderColor="purple"
                blurAmount={0}
              />
              <div className="max-w-4xl mx-auto mt-6 sm:mt-10" style={{ minHeight: '6rem' }}>
                <DecryptedText
                  text="Protect your business from evolving cyber threats with our comprehensive cybersecurity solutions. From advanced threat detection to incident response, we provide the security infrastructure your organization needs to operate safely in the digital world."
                  className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light"
                  animateOn="view"
                  speed={25}
                  sequential={true}
                  revealDirection="start"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Our Cybersecurity Services?
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] p-8 lg:p-12 rounded-3xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Ready to Secure Your Business?
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Don't wait for a cyber attack to happen. Our cybersecurity experts are ready to assess your current security posture and implement comprehensive protection measures tailored to your business needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3" />
                    <span>Free Security Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="w-5 h-5 mr-3" />
                    <span>24/7 Monitoring Setup</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-3" />
                    <span>Rapid Implementation</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>
      </FlexibleBackgroundMeteors>


    </div>
  );
}