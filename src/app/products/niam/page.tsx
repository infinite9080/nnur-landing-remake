import React from 'react';
import Navbar from '../../components/Navbar';
import FlexibleBackgroundMeteors from '../../components/FlexibleBackgroundMeteors';
import { ArrowLeft, Shield, Key, Users, Lock } from 'lucide-react';
import Link from 'next/link';

export default function NIAMPage() {
  return (
    <div className="font-sans overflow-x-hidden">
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
                  src="/All-Logos/nIAM/niamofficiallogo.svg"
                  alt="nIAM Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-[#7030a1]">n</span>IAM
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Advanced Identity and Access Management solution for secure authentication, authorization, and user lifecycle management across your enterprise.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Key className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Single Sign-On</h3>
                <p className="text-gray-600">Seamless access across all applications</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Shield className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Factor Auth</h3>
                <p className="text-gray-600">Enhanced security with MFA protocols</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Users className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Provisioning</h3>
                <p className="text-gray-600">Automated user lifecycle management</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Lock className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Control</h3>
                <p className="text-gray-600">Role-based permissions and policies</p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About nIAM</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-[#7030a1] mb-4">Secure Identity Management</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    nIAM provides comprehensive identity and access management capabilities to secure your digital assets. 
                    Our solution ensures that the right people have the right access to the right resources at the right time.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      Advanced authentication methods
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      Centralized user directory
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      Privileged access management
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      Compliance reporting
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#7030a1]/10 to-[#9d4edd]/10 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Security Benefits</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#7030a1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Reduced Risk</h5>
                        <p className="text-gray-600 text-sm">Minimize unauthorized access</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7030a1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Improved Productivity</h5>
                        <p className="text-gray-600 text-sm">Streamlined access workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7030a1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Compliance Ready</h5>
                        <p className="text-gray-600 text-sm">Meet regulatory requirements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure Your Digital Identity Today</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Implement enterprise-grade identity management with nIAM and protect your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#7030a1] text-white font-semibold rounded-lg hover:bg-[#5a2581] transition-colors duration-300">
                  Request Demo
                </button>
                <button className="px-8 py-4 border-2 border-[#7030a1] text-[#7030a1] font-semibold rounded-lg hover:bg-[#7030a1] hover:text-white transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </FlexibleBackgroundMeteors>
    </div>
  );
}