"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, Search, BarChart3, Target, Shield, FileText, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import TrueFocus from "../../../components/TrueFocus";
import DecryptedText from "../../../components/DecryptedText";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageLoader from "../../../components/PageLoader";
import FlexibleBackgroundMeteors from "../../components/FlexibleBackgroundMeteors";

const features = [
  {
    icon: Search,
    title: "Comprehensive Risk Analysis",
    description: "Thorough examination of your business operations to identify potential security vulnerabilities and threats."
  },
  {
    icon: BarChart3,
    title: "Risk Quantification",
    description: "Detailed risk scoring and prioritization to help you focus on the most critical security concerns."
  },
  {
    icon: Target,
    title: "Threat Modeling",
    description: "Advanced threat modeling techniques to understand potential attack vectors and scenarios."
  },
  {
    icon: Shield,
    title: "Business Impact Assessment",
    description: "Evaluation of potential business impact from various security incidents and data breaches."
  },
  {
    icon: FileText,
    title: "Mitigation Strategies",
    description: "Customized risk mitigation plans with actionable recommendations and implementation roadmaps."
  },
  {
    icon: AlertTriangle,
    title: "Continuous Monitoring",
    description: "Ongoing risk monitoring and assessment to adapt to evolving threats and business changes."
  }
];

const assessmentTypes = [
  {
    title: "Cybersecurity Risk Assessment",
    description: "Comprehensive evaluation of your digital infrastructure and security posture",
    includes: ["Network security analysis", "Application security review", "Data protection assessment", "Access control evaluation"]
  },
  {
    title: "Operational Risk Assessment",
    description: "Analysis of business processes and operational vulnerabilities",
    includes: ["Process vulnerability analysis", "Human factor assessment", "Physical security review", "Business continuity planning"]
  },
  {
    title: "Compliance Risk Assessment",
    description: "Evaluation of regulatory compliance gaps and associated risks",
    includes: ["Regulatory requirement mapping", "Compliance gap analysis", "Penalty risk evaluation", "Remediation planning"]
  }
];

const benefits = [
  "Identify critical vulnerabilities before they're exploited",
  "Prioritize security investments effectively",
  "Meet regulatory compliance requirements",
  "Reduce potential business impact",
  "Improve overall security posture",
  "Make informed risk management decisions"
];

export default function RiskAssessmentPage() {
  return (
    <div className="font-sans overflow-x-hidden">
      <PageLoader />
      <Navbar />
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
                sentence="Risk Assessment Services"
                borderColor="purple"
                blurAmount={0}
              />
              <div className="max-w-4xl mx-auto mt-6 sm:mt-10" style={{ minHeight: '6rem' }}>
                <DecryptedText
                  text="Identify, analyze, and mitigate potential risks to your business with our comprehensive risk assessment services. Our expert team helps you understand your security landscape, prioritize threats, and develop effective strategies to protect your organization."
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

            {/* Assessment Types */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                Types of Risk Assessments
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {assessmentTypes.map((assessment, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-[#7030a1]/20 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {assessment.title}
                    </h4>
                    <p className="text-gray-600 mb-6 text-base">
                      {assessment.description}
                    </p>
                    <ul className="space-y-2">
                      {assessment.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-base text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#7030a1] rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Risk Assessment Matters
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
                  Our Assessment Process
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Our systematic approach ensures comprehensive coverage of all potential risks, providing you with actionable insights and clear recommendations for improvement.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Search className="w-5 h-5 mr-3" />
                    <span>Discovery & Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-3" />
                    <span>Risk Scoring & Prioritization</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 mr-3" />
                    <span>Detailed Reporting</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3" />
                    <span>Mitigation Planning</span>
                  </div>
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