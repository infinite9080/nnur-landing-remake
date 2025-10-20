"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "December 2024";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-purple-600" />
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At nNur Inc. ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Name, email address, and contact information</li>
              <li>Company name and job title</li>
              <li>Account credentials and authentication data</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Technical Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and maintain our cybersecurity and compliance services</li>
              <li>Process transactions and manage your account</li>
              <li>Communicate with you about our services and updates</li>
              <li>Improve our services and develop new features</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>With trusted service providers who assist in our operations</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-purple-600" />
              Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication protocols</li>
              <li>Employee training on data protection</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access and obtain a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences. For detailed information, please see our <Link href="/cookies" className="text-purple-600 hover:text-purple-700">Cookie Policy</Link>.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@nnur.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (437) 326-1371</p>
              <p className="text-gray-700"><strong>Address:</strong> Toronto, Ontario, Canada</p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;