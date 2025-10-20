"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Eye } from "lucide-react";

const CookiePolicy = () => {
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
              <Cookie className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
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
              What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain functionality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how nNur Inc. ("we," "our," or "us") uses cookies and similar technologies on our website and services, and how you can control them.
            </p>
          </section>

          {/* Types of Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            {/* Essential Cookies */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6 rounded-r-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                Essential Cookies
              </h3>
              <p className="text-gray-700 mb-3">
                These cookies are necessary for our website to function properly and cannot be disabled.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Authentication and security</li>
                <li>Session management</li>
                <li>Load balancing</li>
                <li>Basic website functionality</li>
              </ul>
            </div>

            {/* Performance Cookies */}
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6 rounded-r-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                Performance and Analytics Cookies
              </h3>
              <p className="text-gray-700 mb-3">
                These cookies help us understand how visitors interact with our website.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Google Analytics for website usage statistics</li>
                <li>Page load performance monitoring</li>
                <li>Error tracking and debugging</li>
                <li>User behavior analysis</li>
              </ul>
            </div>

            {/* Functional Cookies */}
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6 rounded-r-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-purple-600" />
                Functional Cookies
              </h3>
              <p className="text-gray-700 mb-3">
                These cookies enable enhanced functionality and personalization.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Language and region preferences</li>
                <li>User interface customizations</li>
                <li>Remember login status</li>
                <li>Form data persistence</li>
              </ul>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6 rounded-r-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Marketing and Advertising Cookies</h3>
              <p className="text-gray-700 mb-3">
                These cookies are used to deliver relevant advertisements and track campaign effectiveness.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>LinkedIn advertising and conversion tracking</li>
                <li>Google Ads remarketing</li>
                <li>Social media integration</li>
                <li>Campaign performance measurement</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We use several third-party services that may set their own cookies:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Google Analytics</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Website analytics and performance monitoring</td>
                    <td className="px-6 py-4 text-sm text-purple-600">
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700">
                        Google Privacy Policy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">LinkedIn Insight Tag</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Conversion tracking and audience insights</td>
                    <td className="px-6 py-4 text-sm text-purple-600">
                      <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700">
                        LinkedIn Privacy Policy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Facebook Pixel</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Social media advertising and analytics</td>
                    <td className="px-6 py-4 text-sm text-purple-600">
                      <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700">
                        Facebook Privacy Policy
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Cookie Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Browser Settings</h3>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Chrome</h4>
                <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies and other site data</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Firefox</h4>
                <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Safari</h4>
                <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Edge</h4>
                <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
              </div>
            </div>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Opt-Out Options</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Google Analytics:</strong> Use the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong> Adjust your{" "}
                <a href="https://www.linkedin.com/psettings/advertising" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                  LinkedIn ad preferences
                </a>
              </li>
              <li>
                <strong>Facebook:</strong> Manage your{" "}
                <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                  Facebook ad preferences
                </a>
              </li>
            </ul>
          </section>

          {/* Impact of Disabling Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-700">
                <strong>Please note:</strong> Disabling certain cookies may affect your experience on our website.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              If you disable cookies, you may experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Difficulty logging in or staying logged in</li>
              <li>Loss of personalized settings and preferences</li>
              <li>Reduced website functionality</li>
              <li>Less relevant content and advertisements</li>
              <li>Inability to use certain features</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Retention Periods</h2>
            <p className="text-gray-700 mb-4">
              Different cookies have different retention periods:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Remain for a set period (typically 30 days to 2 years)</li>
              <li><strong>Analytics cookies:</strong> Usually retained for 26 months</li>
              <li><strong>Marketing cookies:</strong> Typically retained for 90 days to 1 year</li>
            </ul>
          </section>

          {/* Updates to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Cookie Policy</h2>
            <p className="text-gray-700">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by updating the "Last updated" date at the top of this policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@nnur.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (437) 326-1371</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> Toronto, Ontario, Canada</p>
              <p className="text-gray-700 mt-4">
                For more information about our privacy practices, please see our{" "}
                <Link href="/privacy" className="text-purple-600 hover:text-purple-700">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;