"use client";

import React from "react";
import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";
import ProfileCard from "../../components/ProfileCard";
import "./AboutUs.module.css";
import {
    Users,
    Target,
    Shield,
    Zap,
    CheckCircle,
    Award,
    Lock,
    Heart,
    Building,
    Lightbulb,
    Clock,
    Star
} from "lucide-react";

const AboutUs = () => {
    return (
        <section className="py-16 sm:py-24 lg:py-32">
            <div
                className="mx-auto px-4 sm:px-6 lg:px-8"
                style={{ maxWidth: "1500px" }}
            >
                {/* Main About Us Section */}
                <div className="text-center mb-20 lg:mb-28">
                    <TrueFocus
                        sentence="About Us"
                        borderColor="purple"
                        blurAmount={0}
                    />
                    <div className="max-w-4xl mx-auto mt-10 min-h-[4rem] flex items-center">
                        <DecryptedText
                            text="We are a team of passionate innovators dedicated to making cybersecurity and compliance simple, effective, and accessible for businesses of all sizes."
                            className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light"
                            animateOn="view"
                            speed={25}
                            sequential={true}
                            revealDirection="start"
                        />
                    </div>
                </div>

                {/* Our Motto Section */}
                <div className="mb-20 lg:mb-28">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Our Motto
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Make it Simple and Easy */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    Make it Simple and Easy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We speak same language as our customers. All of our products are super simple and easy comparing to our competitors.
                                </p>
                            </div>
                        </div>

                        {/* We Make Things Easy */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    We Make Things Easy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    You will not need a professional to understand the way our software works. As easy as it can be.
                                </p>
                            </div>
                        </div>

                        {/* Energetic Team */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    Energetic Team
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We depend on youth to design, code and implement our solutions. Our developers average age is below 30.
                                </p>
                            </div>
                        </div>

                        {/* Experience Guidance */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    Experience Guidance
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our founder and leaders have long experience in IT, Telco and Service business to guide the team towards a right direction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="mb-20 lg:mb-28">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Why Choose Us
                        </h2>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Industry Experience */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                                    <Building className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    Industry Experience
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We have practical field experience on Telco and IT sectors on managing strategy, planning, security, operation and development.
                                </p>
                            </div>
                        </div>

                        {/* Easy and Efficient */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    Easy and Efficient
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Easy as it can be, is one of the moto to delivery solutions to our customers. All solutions are designed based on how people think naturally.
                                </p>
                            </div>
                        </div>

                        {/* Privacy And Security */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    Privacy And Security
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    All of our solutions are specially developed considering customers' privacy and security as a mandatory non-functional requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Focus Section */}
                <div className="mb-20 lg:mb-28">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Our Focus
                        </h2>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Enterprise Software from SaaS */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                    <span className="text-white font-bold text-lg">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    Enterprise Software from SaaS
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We mainly focus on enterprise grade software serving from SaaS. However, if due to regulatory it requires to have the software on-prem, we can deploy on-prem version.
                                </p>
                            </div>
                        </div>

                        {/* Priority on Security, Compliance and Audit */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                    <span className="text-white font-bold text-lg">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    Priority on Security, Compliance and Audit
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We give more priority on products related to Security, Compliance and Audit. We will keep focus on these topics to ensure business sustainability of our customers.
                                </p>
                            </div>
                        </div>

                        {/* Customer Centricity and Satisfaction */}
                        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-[#7030a1]/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7030a1]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-[#7030a1] to-[#9d4edd] rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#7030a1] transition-colors duration-300">
                                    Customer Centricity and Satisfaction
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We never say, customer is always right; but we believe customer's happiness and satisfaction will give us opportunity to grow together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-20 lg:mb-28">
                    <div className="text-center mb-16">
                        <TrueFocus
                            sentence="Our Leaders"
                            borderColor="purple"
                            blurAmount={0}
                        />
                        <div className="max-w-4xl mx-auto mt-10 min-h-[4rem] flex items-center">
                            <DecryptedText
                                text="Meet our passionate leaders who drive innovation and excellence in cybersecurity and compliance solutions."
                                className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light"
                                animateOn="view"
                                speed={25}
                                sequential={true}
                                revealDirection="start"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto place-items-center">
                        {/* Mohammed Shafat Patvary */}
                        <div className="flex justify-center">
                            <ProfileCard
                                avatarUrl="/CEO-Mohammed-Shafat-Patvary-removebg-preview.png"
                                miniAvatarUrl="/CEO-Mohammed-Shafat-Patvary-removebg-preview.png"
                                name="Shafat Patvary"
                                title=""
                                handle="nNur"
                                status="CEO and Co-Founder"
                                contactText="LinkedIn"
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={true}
                                showBehindGradient={false}
                                className="w-full max-w-sm profileCardOverride"
                                onContactClick={() => {
                                    window.open("https://www.linkedin.com/in/shafat-patvary/", "_blank");
                                }}
                            />
                        </div>

                        {/* Firoz Haider Khan */}
                        <div className="flex justify-center">
                            <ProfileCard
                                avatarUrl="/Firoz-Haider-Khan-removebg-preview.png"
                                miniAvatarUrl="/Firoz-Haider-Khan-removebg-preview.png"
                                name="Firoz Haider"
                                title=""
                                handle="nNur"
                                status="Director and Co-Founder"
                                contactText="LinkedIn"
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={true}
                                showBehindGradient={false}
                                className="w-full max-w-sm profileCardOverride"
                                onContactClick={() => {
                                    window.open("https://www.linkedin.com/in/firoz-haider-khan/", "_blank");
                                }}
                            />
                        </div>

                        {/* Asaduzzaman */}
                        <div className="flex justify-center">
                            <ProfileCard
                                avatarUrl="/1704514286464-removebg-preview.png"
                                miniAvatarUrl="/1704514286464-removebg-preview.png"
                                name="Asaduzzaman"
                                title=""
                                handle="nNur"
                                status="HR and Admin"
                                contactText="LinkedIn"
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={true}
                                showBehindGradient={false}
                                className="w-full max-w-sm profileCardOverride"
                                onContactClick={() => {
                                    window.open("https://www.linkedin.com/in/asaduzzaman/", "_blank");
                                }}
                            />
                        </div>

                        {/* Mohammad Arif Rahim */}
                        <div className="flex justify-center">
                            <ProfileCard
                                avatarUrl="/1636123774508-removebg-preview.png"
                                miniAvatarUrl="/1636123774508-removebg-preview.png"
                                name="Arif Rahim"
                                title=""
                                handle="nNur"
                                status="Head of Operations"
                                contactText="LinkedIn"
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={true}
                                showBehindGradient={false}
                                className="w-full max-w-sm profileCardOverride"
                                onContactClick={() => {
                                    window.open("https://www.linkedin.com/in/mohammad-arif-rahim/", "_blank");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;