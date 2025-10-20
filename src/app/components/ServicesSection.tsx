"use client";

import React, { useState } from "react";
import {
  Shield,
  Globe,
  RefreshCw,
  Smartphone,
  Wifi,
  Users,
  Target,
  Microscope,
  UserCheck,
  TestTube,
  Bot,
  BarChart3,
  FileText,
  ClipboardList,
  GraduationCap,
  Newspaper,
  Mail,
  Building,
  Key,
  Radio,
  Search,
  Asterisk,
} from "lucide-react";
import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const serviceCategories = [
    {
      title: "Core Infrastructure & Application Security",
      icon: Shield,
      color: "from-blue-500 to-blue-700",
      services: [
        {
          icon: Globe,
          title: "Website Security",
          description: "Protect your online presence from cyber threats.",
        },
        {
          icon: RefreshCw,
          title: "API Security",
          description: "Secure your digital interfaces and data exchanges.",
        },
        {
          icon: Smartphone,
          title: "Mobile App Security",
          description:
            "Ensure the safety and reliability of your mobile applications.",
        },
        {
          icon: Wifi,
          title: "Network Security",
          description: "Proactively defend your critical IT infrastructure.",
        },
        {
          icon: Users,
          title: "Active Directory Security",
          description: "Fortify your organization's user management systems.",
        },
      ],
    },
    {
      title: "Threat Simulation & Realistic Testing",
      icon: Target,
      color: "from-red-500 to-red-700",
      services: [
        {
          icon: Microscope,
          title: "Attack Simulation",
          description: "Real-world scenarios to identify vulnerabilities.",
        },
        {
          icon: TestTube,
          title: "Advanced Persistent Threat Simulation",
          description: "Simulate sophisticated cyber threats.",
        },
        {
          icon: UserCheck,
          title: "Insider Threat Detection",
          description: "Safeguard your business from internal security risks.",
        },
        {
          icon: Shield,
          title: "Security Controls Testing",
          description:
            "Assess your EDR and defense stack against advanced threats.",
        },
      ],
    },
    {
      title: "AI-Enhanced Security Intelligence",
      icon: Bot,
      color: "from-purple-500 to-purple-700",
      services: [
        {
          icon: BarChart3,
          title: "Intelligent Risk Profiling",
          description: "Accurate, AI-driven risk assessment.",
        },
        {
          icon: FileText,
          title: "AI Policy Advisor",
          description: "Smart guidance on cybersecurity policy creation.",
        },
        {
          icon: ClipboardList,
          title: "Automated Security Reports",
          description: "Timely, clear, actionable security insights.",
        },
      ],
    },
    {
      title: "Security Awareness & Training",
      icon: GraduationCap,
      color: "from-green-500 to-green-700",
      services: [
        {
          icon: GraduationCap,
          title: "Interactive Awareness Training",
          description: "Engaging sessions tailored to your team.",
        },
        {
          icon: Newspaper,
          title: "Monthly Security Insights",
          description: "Stay informed with the latest cybersecurity trends.",
        },
        {
          icon: Mail,
          title: "Phishing Awareness Campaigns",
          description:
            "Hands-on training to prevent social engineering attacks.",
        },
      ],
    },
    {
      title: "Physical Security Evaluations",
      icon: Building,
      color: "from-orange-500 to-orange-700",
      services: [
        {
          icon: Key,
          title: "Access Control Reviews",
          description: "Ensure your physical locations are secure.",
        },
        {
          icon: Radio,
          title: "RFID Security Checks",
          description: "Verify the integrity of your access systems.",
        },
      ],
    },
    {
      title: "Collaborative Threat Modeling",
      icon: Search,
      color: "from-indigo-500 to-indigo-700",
      services: [
        {
          icon: Asterisk,
          title: "STRIDE Interactive Workshops",
          description:
            "Identify, discuss, and mitigate potential threats collaboratively.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1500px" }}
      >
        {/* Section Title Container */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-28">
          <TrueFocus
            sentence="Our Sevices"
            borderColor="purple"
            blurAmount={0}
          />
          <div className="mt-8 sm:mt-10" style={{ minHeight: '6rem', display: 'flex', alignItems: 'center' }}>
            <DecryptedText
              text="Comprehensive cybersecurity solutions designed to protect, detect, and respond to evolving digital threats across all aspects of your business infrastructure."
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light"
              animateOn="view"
              speed={25}
              sequential={true}
              revealDirection="start"
            />
          </div>
        </div>

        {/* Category Navigation Container */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${activeCategory === index
                    ? "bg-gradient-to-r from-[#7030a1] to-[#9d4edd] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:text-[#7030a1] border border-gray-200 hover:border-[#7030a1]/30 shadow-md hover:shadow-lg"
                    }`}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Services Container */}
        <div className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceCategories[activeCategory].services.map(
              (service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <div
                    key={index}
                    className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#7030a1]/20 group overflow-hidden"
                  >
                    <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0">
                        <ServiceIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#7030a1] transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Call to Action Container */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#7030a1] to-[#9d4edd] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Ready to Secure Your Digital Future?
            </h3>
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              Let our cybersecurity experts assess your current security posture
              and design a comprehensive protection strategy tailored to your
              business needs.
            </p>
            <button className="bg-white text-[#7030a1] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Your Security Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
