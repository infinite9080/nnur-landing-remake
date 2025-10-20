"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
  Shield,
  Lock,
  FileCheck,
  Users
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "nAMS", href: "/products/nams", description: "Audit Management" },
    { name: "nIAM", href: "/products/niam", description: "Identity & Access" },
    { name: "nErim", href: "/products/nerim", description: "Risk Management" },
    { name: "nBoard", href: "/products/nboard", description: "Board Governance" },
    { name: "nISMA", href: "/products/nisma", description: "Security Maturity" },
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
    { name: "Data Protection", href: "/data-protection" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/nNur-Logo-Icon.svg"
                  alt="nNur Logo"
                  className="h-10 w-auto"
                />
                <span className="text-3xl font-bold italic bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  nnur
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Empowering businesses with comprehensive cybersecurity and compliance solutions.
                Protecting your digital assets while ensuring regulatory adherence across all operations.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>contact@nnur.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>123 Business St, Suite 100, City, State 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-pink-500 p-3 rounded-full transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Products</h3>
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
              <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
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
                © {currentYear} nNur. All rights reserved. Empowering secure digital transformation.
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