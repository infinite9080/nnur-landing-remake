"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Users, Monitor, Shield, BookOpen, Award, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import TrueFocus from "../../../components/TrueFocus";
import DecryptedText from "../../../components/DecryptedText";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FlexibleBackgroundMeteors from "../../components/FlexibleBackgroundMeteors";

const features = [
  {
    icon: Users,
    title: "Security Awareness Training",
    description: "Comprehensive training programs to educate employees about cybersecurity threats and best practices."
  },
  {
    icon: Monitor,
    title: "Phishing Simulation",
    description: "Realistic phishing simulations to test and improve employee response to social engineering attacks."
  },
  {
    icon: BookOpen,
    title: "Custom Training Programs",
    description: "Tailored training content designed specifically for your industry and organizational needs."
  },
  {
    icon: Award,
    title: "Certification Preparation",
    description: "Preparation courses for industry-standard cybersecurity certifications and qualifications."
  },
  {
    icon: Shield,
    title: "Incident Response Training",
    description: "Hands-on training for incident response procedures and crisis management protocols."
  },
  {
    icon: GraduationCap,
    title: "Leadership Security Training",
    description: "Executive-level training focusing on security governance, risk management, and decision-making."
  }
];

const trainingPrograms = [
  {
    title: "Basic Security Awareness",
    duration: "2-4 hours",
    audience: "All employees",
    topics: ["Password security", "Email safety", "Social engineering", "Physical security", "Data protection"]
  },
  {
    title: "Advanced Threat Detection",
    duration: "1-2 days",
    audience: "IT professionals",
    topics: ["Advanced persistent threats", "Malware analysis", "Network monitoring", "Forensics basics", "Threat hunting"]
  },
  {
    title: "Executive Security Briefing",
    duration: "4-6 hours",
    audience: "Leadership team",
    topics: ["Risk governance", "Compliance requirements", "Business continuity", "Crisis communication", "Strategic planning"]
  },
  {
    title: "Industry-Specific Training",
    duration: "Customized",
    audience: "Sector-specific",
    topics: ["Regulatory compliance", "Industry threats", "Best practices", "Case studies", "Practical exercises"]
  }
];

const benefits = [
  "Reduce human error-related security incidents",
  "Improve overall security culture",
  "Meet compliance training requirements",
  "Increase threat detection capabilities",
  "Build internal security expertise",
  "Enhance incident response readiness"
];

export default function SecurityTrainingPage() {
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
                sentence="Security Training Services"
                borderColor="purple"
                blurAmount={0}
              />
              <div className="max-w-4xl mx-auto mt-6 sm:mt-10" style={{ minHeight: '6rem' }}>
                <DecryptedText
                  text="Build a strong security culture and reduce human error with cybersecurity training that prepares your team to face cyber threats."
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

            {/* Training Programs */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                Our Training Programs
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {trainingPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100 hover:border-[#7030a1]/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        {program.title}
                      </h4>
                      <span className="bg-[#7030a1]/10 text-[#7030a1] px-3 py-1 rounded-full text-base font-medium">
                        {program.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-base">
                      <strong>Target Audience:</strong> {program.audience}
                    </p>
                    <div>
                      <p className="text-gray-700 font-medium mb-3 text-base">Key Topics:</p>
                      <ul className="space-y-2">
                        {program.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-base text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#7030a1] rounded-full mr-3"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Training Benefits
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
                  Training Delivery Methods
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  We offer flexible training delivery options to accommodate your organization's needs and preferences, ensuring maximum engagement and knowledge retention.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Monitor className="w-5 h-5 mr-3" />
                    <span>Online Interactive Sessions</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    <span>On-site Workshops</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-3" />
                    <span>Self-paced Learning Modules</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-3" />
                    <span>Blended Learning Programs</span>
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