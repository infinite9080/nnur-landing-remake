"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react";

const TermsOfService = () => {
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
              <Scale className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
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
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") govern your use of nNur Inc.'s website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          {/* Services Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-700 mb-4">
              nNur Inc. provides cybersecurity and compliance solutions including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Audit Management Systems (nAMS)</li>
              <li>Identity and Access Management (nIAM)</li>
              <li>Risk Management Solutions (nErim)</li>
              <li>Board Governance Tools (nBoard)</li>
              <li>Security Maturity Assessment (nISMA)</li>
              <li>Consulting and professional services</li>
            </ul>
          </section>

          {/* User Accounts */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts and Registration</h2>
            <p className="text-gray-700 mb-4">
              To access certain features of our Services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your login credentials secure and confidential</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
              Acceptable Use Policy
            </h2>
            <p className="text-gray-700 mb-4">
              You agree to use our Services only for lawful purposes and in accordance with these Terms. You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or conduct security attacks</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our Services</li>
              <li>Use our Services for competitive intelligence</li>
              <li>Share your account credentials with third parties</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              Our Services and all related content, features, and functionality are owned by nNur Inc. and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Your Content</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of any content you submit to our Services. By submitting content, you grant us a license to use, modify, and display such content as necessary to provide our Services.
            </p>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment and Billing</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Fees and Charges</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Fees are based on your selected service plan</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to change our pricing with notice</li>
              <li>Late payments may result in service suspension</li>
            </ul>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Billing Cycle</h3>
            <p className="text-gray-700">
              Services are billed in advance on a monthly or annual basis, depending on your chosen plan. Automatic renewal applies unless cancelled before the renewal date.
            </p>
          </section>

          {/* Service Availability */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability and Support</h2>
            <p className="text-gray-700 mb-4">
              We strive to maintain high service availability but cannot guarantee uninterrupted access. We provide:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>99.9% uptime service level objective</li>
              <li>24/7 technical support for enterprise customers</li>
              <li>Regular maintenance windows with advance notice</li>
              <li>Incident response and resolution procedures</li>
            </ul>
          </section>

          {/* Data and Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection and Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our <Link href="/privacy" className="text-purple-600 hover:text-purple-700">Privacy Policy</Link>. Key points include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Data encryption in transit and at rest</li>
              <li>Regular security audits and compliance assessments</li>
              <li>GDPR and other privacy regulation compliance</li>
              <li>Data backup and disaster recovery procedures</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-yellow-600" />
              Limitation of Liability
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-700">
                <strong>Important:</strong> Please read this section carefully as it limits our liability to you.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, nNur Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business interruption.
            </p>
            <p className="text-gray-700">
              Our total liability for any claims arising from these Terms or your use of our Services shall not exceed the amount you paid us in the twelve months preceding the claim.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-3">By You</h3>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by contacting us or using the account cancellation feature in your dashboard.
            </p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">By Us</h3>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate your access to our Services if you violate these Terms or for other legitimate business reasons, with appropriate notice when possible.
            </p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Effect of Termination</h3>
            <p className="text-gray-700">
              Upon termination, your right to use our Services ceases immediately. We will provide reasonable assistance in data export, subject to our data retention policies.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law and Disputes</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of Ontario, Canada, without regard to conflict of law principles. Any disputes will be resolved through:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Good faith negotiation</li>
              <li>Mediation, if negotiation fails</li>
              <li>Binding arbitration or courts in Ontario, Canada</li>
            </ol>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to These Terms</h2>
            <p className="text-gray-700">
              We may update these Terms from time to time. We will notify you of material changes by email or through our Services. Your continued use after such changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@nnur.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (437) 326-1371</p>
              <p className="text-gray-700"><strong>Address:</strong> Toronto, Ontario, Canada</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;