"use client";

import React from "react";
import Link from "next/link";
import { Users, Lightbulb, Target, Cog, BarChart3, CheckSquare, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import TrueFocus from "../../../components/TrueFocus";
import DecryptedText from "../../../components/DecryptedText";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FlexibleBackgroundMeteors from "../../components/FlexibleBackgroundMeteors";

const features = [
  {
    icon: Lightbulb,
    title: "Security Strategy Development",
    description: "Comprehensive security strategy planning aligned with your business objectives and risk tolerance."
  },
  {
    icon: Target,
    title: "Architecture Review",
    description: "In-depth analysis of your current security architecture with recommendations for improvement."
  },
  {
    icon: Cog,
    title: "Implementation Planning",
    description: "Detailed roadmaps and project plans for implementing security solutions and best practices."
  },
  {
    icon: BarChart3,
    title: "Security Maturity Assessment",
    description: "Evaluation of your organization's security maturity level with benchmarking against industry standards."
  },
  {
    icon: CheckSquare,
    title: "Best Practices Implementation",
    description: "Guidance on implementing industry-leading security practices and frameworks."
  },
  {
    icon: Users,
    title: "Executive Advisory",
    description: "Strategic advisory services for C-level executives and board members on cybersecurity governance."
  }
];

const consultingAreas = [
  {
    title: "Strategic Planning",
    description: "Long-term cybersecurity strategy development",
    services: ["Security roadmap development", "Budget planning and optimization", "Technology selection guidance", "Risk appetite definition"]
  },
  {
    title: "Technical Architecture",
    description: "Security architecture design and optimization",
    services: ["Zero-trust architecture", "Cloud security design", "Network segmentation", "Identity management architecture"]
  },
  {
    title: "Governance & Compliance",
    description: "Security governance and regulatory compliance",
    services: ["Policy framework development", "Compliance program design", "Audit preparation", "Board reporting structures"]
  },
  {
    title: "Incident Response",
    description: "Incident response planning and optimization",
    services: ["Response plan development", "Team structure design", "Playbook creation", "Crisis communication planning"]
  }
];

const benefits = [
  "Expert guidance from seasoned professionals",
  "Customized solutions for your business",
  "Cost-effective security investments",
  "Accelerated implementation timelines",
  "Industry best practices adoption",
  "Ongoing strategic support"
];

export default function ConsultingPage() {
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
                sentence="Cybersecurity Consulting"
                borderColor="purple"
                blurAmount={0}
              />
              <div className="max-w-4xl mx-auto mt-6 sm:mt-10" style={{ minHeight: '6rem' }}>
                <DecryptedText
                  text="Transform your cybersecurity posture with expert consulting services. Our experienced consultants work closely with your team to develop comprehensive security strategies, implement best practices, and build resilient defense systems tailored to your business needs."
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

            {/* Consulting Areas */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                Our Consulting Areas
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {consultingAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-[#7030a1]/20 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {area.title}
                    </h4>
                    <p className="text-gray-600 mb-6 text-base">
                      {area.description}
                    </p>
                    <div>
                      <p className="text-gray-700 font-medium mb-3 text-base">Key Services:</p>
                      <ul className="space-y-2">
                        {area.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-base text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#7030a1] rounded-full mr-3"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                Our Consulting Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Discovery</h4>
                  <p className="text-gray-600 text-base">Understanding your current state, challenges, and objectives</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Analysis</h4>
                  <p className="text-gray-600 text-base">Comprehensive assessment and gap analysis</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Strategy</h4>
                  <p className="text-gray-600 text-base">Developing customized recommendations and roadmaps</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Implementation</h4>
                  <p className="text-gray-600 text-base">Supporting execution and ongoing optimization</p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Our Consulting Services
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
                  Expert Guidance When You Need It
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Our consulting team brings decades of combined experience across various industries, providing you with proven strategies and practical solutions that deliver real results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-3" />
                    <span>Strategic Planning</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3" />
                    <span>Implementation Support</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-3" />
                    <span>Performance Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    <span>Team Development</span>
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