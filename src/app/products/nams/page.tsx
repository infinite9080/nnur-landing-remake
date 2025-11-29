import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageLoader from '../../../components/PageLoader';
import FlexibleBackgroundMeteors from '../../components/FlexibleBackgroundMeteors';
import { ArrowLeft, Shield, CheckCircle, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function NAMSPage() {
  return (
    <div className="font-sans overflow-x-hidden">
      <PageLoader />
      <Navbar />
      <FlexibleBackgroundMeteors>
        <div className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1500px" }}>
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center text-[#7030a1] hover:text-[#5a2581] mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="bg-white rounded-2xl w-24 h-24 flex items-center justify-center mb-8 shadow-lg border border-gray-200 mx-auto">
                <img
                  src="/All-Logos/nAMS/icononly_transparent_nobuffer.png"
                  alt="nAMS Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-[#7030a1]">n</span>AMS
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive Audit Management System for planning, executing, and monitoring internal and external audits efficiently across your organization.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Shield className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Built-in compliance frameworks and standards</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <CheckCircle className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Workflows</h3>
                <p className="text-gray-600">Streamlined audit processes and approvals</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Users className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Collaboration</h3>
                <p className="text-gray-600">Multi-user access with role-based permissions</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <BarChart3 className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Reports</h3>
                <p className="text-gray-600">Comprehensive analytics and reporting</p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About nAMS</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-[#7030a1] mb-4">Comprehensive Audit Management</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    nAMS is designed to simplify and streamline your audit processes from planning to completion. 
                    Our platform provides a centralized solution for managing internal and external audits, 
                    ensuring compliance with industry standards and regulations.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Audit planning and scheduling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Evidence collection and management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Finding tracking and remediation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Automated report generation
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#7030a1]/10 to-[#9d4edd]/10 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#7030a1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Increased Efficiency</h5>
                        <p className="text-gray-600 text-sm">Reduce audit time by up to 50%</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7030a1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Better Compliance</h5>
                        <p className="text-gray-600 text-sm">Ensure regulatory adherence</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7030a1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Enhanced Visibility</h5>
                        <p className="text-gray-600 text-sm">Real-time audit status tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Audit Process?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get started with nAMS today and experience the future of audit management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/?type=demo&product=nAMS#contact" className="px-8 py-4 bg-[#7030a1] text-white font-semibold rounded-lg hover:bg-[#5a2581] transition-colors duration-300 text-center">
                  Request Demo
                </Link>
                <Link href="/?type=sales&product=nAMS#contact" className="px-8 py-4 border-2 border-[#7030a1] text-[#7030a1] font-semibold rounded-lg hover:bg-[#7030a1] hover:text-white transition-colors duration-300 text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FlexibleBackgroundMeteors>
      <Footer />
    </div>
  );
}