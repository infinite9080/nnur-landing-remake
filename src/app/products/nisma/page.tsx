import React from 'react';
import Navbar from '../../components/Navbar';
import FlexibleBackgroundMeteors from '../../components/FlexibleBackgroundMeteors';
import { ArrowLeft, Shield, BarChart3, CheckCircle, Target } from 'lucide-react';
import Link from 'next/link';

export default function NISMAPage() {
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
                  src="/All-Logos/nISMA/Logo2-512x533.png"
                  alt="nISMA Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-[#7030a1]">n</span>ISMA
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Information Security Maturity Assessment tool for evaluating and improving your organization's security posture with comprehensive benchmarking and recommendations.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Shield className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Assessment</h3>
                <p className="text-gray-600">Comprehensive security posture evaluation</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <BarChart3 className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maturity Scoring</h3>
                <p className="text-gray-600">Detailed maturity level analysis</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <Target className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gap Analysis</h3>
                <p className="text-gray-600">Identify security gaps and weaknesses</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                <CheckCircle className="w-12 h-12 text-[#7030a1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improvement Plans</h3>
                <p className="text-gray-600">Actionable security enhancement roadmap</p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About nISMA</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-[#7030a1] mb-4">Security Maturity Assessment</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    nISMA provides a comprehensive framework for assessing your organization's information security maturity. 
                    Our tool evaluates current practices against industry standards and provides actionable insights for improvement.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      Multi-framework assessment
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      Benchmarking against peers
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      Risk-based prioritization
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      Executive dashboards
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#7030a1]/10 to-[#9d4edd]/10 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Assessment Benefits</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#7030a1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Clear Visibility</h5>
                        <p className="text-gray-600 text-sm">Understand current security posture</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7030a1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Strategic Planning</h5>
                        <p className="text-gray-600 text-sm">Data-driven security roadmap</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7030a1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">ROI Optimization</h5>
                        <p className="text-gray-600 text-sm">Prioritize security investments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Assess Your Security Maturity Today</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover your organization's security strengths and improvement opportunities with nISMA.
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