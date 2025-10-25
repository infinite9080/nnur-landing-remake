"use client";

import React from "react";
import Link from "next/link";
import { Shield, FileCheck, AlertTriangle, GraduationCap, Users, ArrowRight } from "lucide-react";
import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlexibleBackgroundMeteors from "../components/FlexibleBackgroundMeteors";

const services = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: Shield,
    description: "Comprehensive protection against cyber threats with advanced security solutions and monitoring.",
    features: ["24/7 Threat Monitoring", "Advanced Firewall Protection", "Incident Response", "Vulnerability Assessment"],
    href: "/services/cybersecurity"
  },
  {
    id: "compliance",
    title: "Compliance",
    icon: FileCheck,
    description: "Ensure regulatory adherence with expert guidance on GDPR, HIPAA, SOX, and industry standards.",
    features: ["Regulatory Compliance", "Policy Development", "Audit Preparation", "Documentation Management"],
    href: "/services/compliance"
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    icon: AlertTriangle,
    description: "Identify, analyze, and mitigate potential risks to your business operations and data.",
    features: ["Risk Analysis", "Threat Modeling", "Business Impact Assessment", "Mitigation Strategies"],
    href: "/services/risk-assessment"
  },
  {
    id: "security-training",
    title: "Security Training",
    icon: GraduationCap,
    description: "Empower your team with comprehensive cybersecurity awareness and training programs.",
    features: ["Security Awareness", "Phishing Simulation", "Custom Training Programs", "Certification Preparation"],
    href: "/services/security-training"
  },
  {
    id: "consulting",
    title: "Consulting",
    icon: Users,
    description: "Expert cybersecurity consulting to develop and implement robust security strategies.",
    features: ["Security Strategy", "Architecture Review", "Implementation Planning", "Best Practices"],
    href: "/services/consulting"
  }
];

export default function ServicesPage() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />

      <FlexibleBackgroundMeteors>
        <section className="py-16 sm:py-24 lg:py-32">
          <div
            className="mx-auto px-4 sm:px-6 lg:px-8"
            style={{ maxWidth: "1500px" }}
          >
            {/* Section Title */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <TrueFocus
                sentence="Our Services"
                borderColor="purple"
                blurAmount={0}
              />
              <div className="max-w-4xl mx-auto mt-6 sm:mt-10" style={{ minHeight: '6rem' }}>
                <DecryptedText
                  text="Comprehensive cybersecurity and compliance services that protect your business, ensure regulatory compliance, and equip your team with the tools for a secure digital future."
                  className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light"
                  animateOn="view"
                  speed={25}
                  sequential={true}
                  revealDirection="start"
                />
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-base text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#7030a1] rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex items-center text-[#7030a1] hover:text-[#5a2581] font-semibold text-base transition-colors duration-300">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border-2 border-gray-100 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need a Custom Solution?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our experts can design a tailored cybersecurity strategy that meets your specific business needs and compliance requirements.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-[#7030a1] to-[#9d4edd] hover:from-[#5a2581] hover:to-[#8a3bc8] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FlexibleBackgroundMeteors>

      <Footer />
    </div>
  );
}