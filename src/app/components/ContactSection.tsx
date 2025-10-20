"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";
import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1500px" }}
      >
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <TrueFocus
            sentence="Contact Us"
            borderColor="purple"
            blurAmount={0}
          />
          <div className="max-w-4xl mx-auto mt-6 sm:mt-10" style={{ minHeight: '6rem', display: 'flex', alignItems: 'center' }}>
            <DecryptedText
              text="Ready to secure your business? Get in touch with our cybersecurity experts and let's discuss how we can protect and empower your organization."
              className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light"
              animateOn="view"
              speed={25}
              sequential={true}
              revealDirection="start"
            />
          </div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 ${styles.contactContainer}`}>
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className={`grid grid-cols-1 gap-6 ${styles.stableGrid}`}>
              {/* Email */}
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                      Email Us
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      sales@nnur.ca

                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                      Call Us
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      +1-437-326-1371
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#7030a1] transition-colors duration-300">
                      Visit Us
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      22821 St. Clair Ave East, Toronto, ON, M4B 1N3, Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#7030a1] transition-colors duration-300">
                    Business Hours
                  </h4>
                </div>
                <div className="space-y-3 text-gray-600 ml-20">
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday - Wednesday</span>
                    <span>9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Thursday</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-[#7030a1] transition-colors duration-300">
                  Follow Us
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/nnur-inc/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center space-x-3 p-4 rounded-2xl border-2 border-gray-100 hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5 transition-all duration-300 min-w-0"
                  >
                    <div className="bg-[#0077b5] rounded-xl w-10 h-10 flex items-center justify-center group-hover/social:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-700 group-hover/social:text-[#0077b5] transition-colors duration-300 truncate">
                      LinkedIn
                    </span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/14373261371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center space-x-3 p-4 rounded-2xl border-2 border-gray-100 hover:border-[#25d366]/30 hover:bg-[#25d366]/5 transition-all duration-300 min-w-0"
                  >
                    <div className="bg-[#25d366] rounded-xl w-10 h-10 flex items-center justify-center group-hover/social:scale-110 transition-transform duration-300 flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-700 group-hover/social:text-[#25d366] transition-colors duration-300 truncate">
                      WhatsApp
                    </span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/people/nNur-Inc/61578344970738/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center space-x-3 p-4 rounded-2xl border-2 border-gray-100 hover:border-[#1877f2]/30 hover:bg-[#1877f2]/5 transition-all duration-300 min-w-0"
                  >
                    <div className="bg-[#1877f2] rounded-xl w-10 h-10 flex items-center justify-center group-hover/social:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-700 group-hover/social:text-[#1877f2] transition-colors duration-300 truncate">
                      Facebook
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/nNur_Inc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center space-x-3 p-4 rounded-2xl border-2 border-gray-100 hover:border-[#e4405f]/30 hover:bg-[#e4405f]/5 transition-all duration-300 min-w-0"
                  >
                    <div className="bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] rounded-xl w-10 h-10 flex items-center justify-center group-hover/social:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-700 group-hover/social:text-[#e4405f] transition-colors duration-300 truncate">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group bg-white p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7030a1] focus:border-[#7030a1] transition-all duration-300 hover:border-[#7030a1]/50"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7030a1] focus:border-[#7030a1] transition-all duration-300 hover:border-[#7030a1]/50"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7030a1] focus:border-[#7030a1] transition-all duration-300 hover:border-[#7030a1]/50"
                      placeholder="+1 (647) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7030a1] focus:border-[#7030a1] transition-all duration-300 hover:border-[#7030a1]/50"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7030a1] focus:border-[#7030a1] transition-all duration-300 hover:border-[#7030a1]/50"
                      placeholder="How can we help secure your business?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7030a1] focus:border-[#7030a1] transition-all duration-300 hover:border-[#7030a1]/50"
                    >
                      <option value="">Select a service</option>
                      <option value="nAMS">nAMS - Audit Management</option>
                      <option value="nIAM">nIAM - Identity & Access Management</option>
                      <option value="nErim">nErim - Risk Management</option>
                      <option value="nBoard">nBoard - Board Governance</option>
                      <option value="nISMA">nISMA - Security Maturity Assessment</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7030a1] focus:border-[#7030a1] transition-all duration-300 hover:border-[#7030a1]/50 resize-none"
                    placeholder="Tell us about your cybersecurity needs, current challenges, or specific requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-[#7030a1] to-[#9d4edd] hover:from-[#5a2581] hover:to-[#8a3bc8] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}