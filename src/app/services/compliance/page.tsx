"use client";

import React from "react";
import Link from "next/link";
import { FileCheck, Shield, BookOpen, Users, CheckSquare, FileText, ArrowRight, CheckCircle } from "lucide-react";
import TrueFocus from "../../../components/TrueFocus";
import DecryptedText from "../../../components/DecryptedText";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FlexibleBackgroundMeteors from "../../components/FlexibleBackgroundMeteors";

const features = [
  {
    icon: Shield,
    title: "GDPR Compliance",
    description: "Comprehensive GDPR compliance solutions including data mapping, privacy policies, and breach response procedures."
  },
  {
    icon: FileCheck,
    title: "HIPAA Compliance",
    description: "Healthcare compliance services ensuring patient data protection and regulatory adherence."
  },
  {
    icon: BookOpen,
    title: "SOX Compliance",
    description: "Sarbanes-Oxley compliance for financial reporting and internal controls over financial reporting."
  },
  {
    icon: Users,
    title: "Policy Development",
    description: "Custom policy creation and documentation to meet specific regulatory requirements."
  },
  {
    icon: CheckSquare,
    title: "Audit Preparation",
    description: "Comprehensive audit preparation services to ensure you're ready for regulatory inspections."
  },
  {
    icon: FileText,
    title: "Documentation Management",
    description: "Organized documentation systems to maintain compliance records and evidence."
  }
];

const regulations = [
  {
    name: "GDPR",
    description: "General Data Protection Regulation",
    coverage: "EU data protection and privacy"
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act",
    coverage: "Healthcare data protection"
  },
  {
    name: "SOX",
    description: "Sarbanes-Oxley Act",
    coverage: "Financial reporting and controls"
  },
  {
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    coverage: "Payment card data protection"
  },
  {
    name: "ISO 27001",
    description: "Information Security Management",
    coverage: "Information security standards"
  },
  {
    name: "NIST",
    description: "National Institute of Standards and Technology",
    coverage: "Cybersecurity framework"
  }
];

const benefits = [
  "Avoid regulatory fines and penalties",
  "Maintain customer trust and reputation",
  "Streamlined audit processes",
  "Comprehensive policy documentation",
  "Expert regulatory guidance",
  "Ongoing compliance monitoring"
];

export default function CompliancePage() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />

      <FlexibleBackgroundMeteors>
        <section className="py-16 sm:py-24 lg:py-32">
          <div
            className="mx-auto px-4 sm:px-6 lg:px-8"
            style={{ maxWidth: "1500px" }}
          >
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <TrueFocus
                sentence="Compliance Services"
                borderColor="purple"
                blurAmount={0}
              />
              <div className="max-w-4xl mx-auto mt-6 sm:mt-10" style={{ minHeight: '6rem' }}>
                <DecryptedText
                  text="Navigate complex regulatory requirements with confidence. Our compliance experts help you achieve and maintain adherence to industry standards including GDPR, HIPAA, SOX, and more, ensuring your business operates within legal boundaries while protecting sensitive data."
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
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Regulations Coverage */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                Regulatory Standards We Cover
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regulations.map((regulation, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#7030a1]/20 transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-[#7030a1] mb-2">
                      {regulation.name}
                    </h4>
                    <p className="text-gray-900 font-medium mb-2">
                      {regulation.description}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {regulation.coverage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefits of Our Compliance Services
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
                  Compliance Made Simple
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Don't let complex regulations overwhelm your business. Our compliance experts simplify the process, providing clear guidance and practical solutions to meet all regulatory requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FileCheck className="w-5 h-5 mr-3" />
                    <span>Compliance Gap Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-3" />
                    <span>Policy Documentation</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    <span>Staff Training Programs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border-2 border-gray-100 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ensure Your Compliance Today
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get started with a comprehensive compliance assessment. Our experts will identify gaps and provide a roadmap to full regulatory compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-[#7030a1] to-[#9d4edd] hover:from-[#5a2581] hover:to-[#8a3bc8] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                  >
                    Get Compliance Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-8 py-4 border-2 border-[#7030a1] text-[#7030a1] hover:bg-[#7030a1] hover:text-white font-bold rounded-xl transition-all duration-300"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FlexibleBackgroundMeteors>

      <Footer />
    </div>
  );
}