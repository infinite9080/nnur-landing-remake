"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Shield,
  Lock,
  FileCheck,
  Users,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "nAMS", href: "/products/nams", description: "Audit Management" },
    { name: "nIAM", href: "/products/niam", description: "Identity & Access" },
    { name: "nErim", href: "/products/nerim", description: "Risk Management" },
    {
      name: "nBoard",
      href: "/products/nboard",
      description: "Board Governance",
    },
    {
      name: "nISMA",
      href: "/products/nisma",
      description: "Security Maturity",
    },
  ];

  const serviceLinks = [
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "Compliance", href: "/services/compliance" },
    { name: "Risk Assessment", href: "/services/risk-assessment" },
    { name: "Security Training", href: "/services/security-training" },
    { name: "Consulting", href: "/services/consulting" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-1 mb-6">
                <img
                  src="/nNur-Logo-Icon.svg"
                  alt="nNur Logo"
                  className="h-10 w-auto"
                />
                <span
                  className="text-3xl font-bold italic text-[#732e9e]"
                  style={{ fontFamily: "Abingdon, serif" }}
                >
                  nnur
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Empowering businesses with comprehensive cybersecurity and
                compliance solutions. Protecting your digital assets while
                ensuring regulatory adherence across all operations.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>sales@nnur.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 (437) 326-1371</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Toronto, Ontario, Canada</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/nnur-inc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors duration-300"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/nNur-Inc/61578344970738/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/14373261371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-green-500 p-3 rounded-full transition-colors duration-300"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Products
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {link.description}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Security Badges */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="font-semibold">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Lock className="w-6 h-6 text-blue-400" />
                <span className="font-semibold">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FileCheck className="w-6 h-6 text-purple-400" />
                <span className="font-semibold">GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="w-6 h-6 text-orange-400" />
                <span className="font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-gray-900/50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} nNur. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center space-x-6">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors duration-300 group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
