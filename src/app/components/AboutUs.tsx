"use client";

import React from "react";
import TrueFocus from "../../components/TrueFocus";
import DecryptedText from "../../components/DecryptedText";
import ModernProfileCard from "../../components/ModernProfileCard";
import styles from "./AboutUs.module.css";
import {
  Users,
  Lock,
  Building,
  Shield,
  CheckCircle,
  Heart,
} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1500px" }}
      >
        {/* Main About Us Section */}
        <div className="text-center mb-12 lg:mb-16">
          <TrueFocus sentence="About Us" borderColor="purple" blurAmount={0} />
          <div
            className="max-w-3xl mx-auto mt-6"
            style={{ minHeight: "2.5rem", display: "flex", alignItems: "center" }}
          >
            <DecryptedText
              text="We’re passionate innovators making cybersecurity and compliance simple, effective, and accessible for businesses of all sizes."
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal"
              animateOn="view"
              speed={25}
              sequential={true}
              revealDirection="start"
            />
          </div>
        </div>

        {/* Our Motto Section - Split Panel Design */}
        <div className="ml-8 md:ml-16 mb-24">
          <div className="border-l-4 border-[#7030a1]/30 pl-6 md:pl-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-[#7030a1] rounded-full mr-3"></span>
              Our Motto
            </h3>
            <p className="text-base text-gray-600 mb-6 ml-5">
              The core values that drive everything we do
            </p>
          </div>
          <div className={styles.mottoPanelContainer}>
            <div className={`${styles.mottoPanel} ${styles.mottoPanel1}`}>
              <div className={styles.mottoPanelContent}>
                <div className={styles.mottoNumber}>1</div>
                <h3 className={styles.mottoText}>Innovation</h3>
              </div>
            </div>
            <div className={`${styles.mottoPanel} ${styles.mottoPanel2}`}>
              <div className={styles.mottoPanelContent}>
                <div className={styles.mottoNumber}>2</div>
                <h3 className={styles.mottoText}>Excellence</h3>
              </div>
            </div>
            <div className={`${styles.mottoPanel} ${styles.mottoPanel3}`}>
              <div className={styles.mottoPanelContent}>
                <div className={styles.mottoNumber}>3</div>
                <h3 className={styles.mottoText}>Integrity</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section - Horizontal Timeline */}
        <div className="ml-8 md:ml-16 mb-24">
          <div className="mb-20 border-l-4 border-[#7030a1]/30 pl-6 md:pl-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
              <span className="w-2 h-2 bg-[#7030a1] rounded-full mr-3"></span>
              Why Choose Us
            </h3>
            <p className="text-base text-gray-600 mb-6 ml-5">
              Four pillars that define our commitment to excellence
            </p>
          </div>
          <div className={styles.whyTimelineContainer}>
            <div className={styles.whyTimelineLine}></div>

            <div className={styles.whyTimelineGrid}>
              <div className={styles.whyTimelineItem}>
                <div className={styles.whyIconCircle}>
                  <div className={styles.whyIconInner}>
                    <Building
                      className="w-16 h-16 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className={styles.whyItemTitle}>Industry Experience</h3>
                <p className={styles.whyItemDescription}>
                  We have practical field experience on Telco and IT sectors on
                  managing strategy, planning, security, operation and
                  development.
                </p>
              </div>

              <div className={styles.whyTimelineItem}>
                <div className={styles.whyIconCircle}>
                  <div className={styles.whyIconInner}>
                    <CheckCircle
                      className="w-16 h-16 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className={styles.whyItemTitle}>Easy and Efficient</h3>
                <p className={styles.whyItemDescription}>
                  Easy as it can be, is one of the moto to delivery solutions to
                  our customers. All solutions are designed based on how people
                  think naturally.
                </p>
              </div>

              <div className={styles.whyTimelineItem}>
                <div className={styles.whyIconCircle}>
                  <div className={styles.whyIconInner}>
                    <Lock className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className={styles.whyItemTitle}>Privacy And Security</h3>
                <p className={styles.whyItemDescription}>
                  All of our solutions are specially developed considering
                  customers' privacy and security as a mandatory non-functional
                  requirements.
                </p>
              </div>

              <div className={styles.whyTimelineItem}>
                <div className={styles.whyIconCircle}>
                  <div className={styles.whyIconInner}>
                    <Users className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className={styles.whyItemTitle}>Energetic Team</h3>
                <p className={styles.whyItemDescription}>
                  We depend on youth to design, code and implement our
                  solutions. Our developers average age is below 30.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Focus Section - Interactive Neural Network */}
  

        {/* Our Leaders Section */}
        <div id="our-leaders" className="mb-20 lg:mb-28">
          <div className="text-center mb-12 lg:mb-16">
            <TrueFocus
              sentence="Our Leaders"
              borderColor="purple"
              blurAmount={0}
            />
            <div
              className="max-w-3xl mx-auto mt-6"
              style={{ minHeight: "2.5rem", display: "flex", alignItems: "center" }}
            >
              <DecryptedText
                text="Meet our passionate leaders who drive innovation and excellence in cybersecurity and compliance solutions."
                className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal"
                animateOn="view"
                speed={25}
                sequential={true}
                revealDirection="start"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <ModernProfileCard
              avatarUrl="/CEO-Mohammed-Shafat-Patvary.webp"
              name="Shafat Patvary"
              title="CEO and Co-Founder"
              linkedinUrl="https://www.linkedin.com/in/sifatullah/"
              location="Enterprise Security Strategist"
              onContactClick={() => {
                window.open(
                  "https://www.linkedin.com/in/sifatullah/",
                  "_blank"
                );
              }}
            />

            <ModernProfileCard
              avatarUrl="/Firoz-Haider-Khan.webp"
              name="Firoz Haider"
              title="Director and Co-Founder"
              linkedinUrl="https://www.linkedin.com/in/firoz-haider-khan-15a56922/"
              location="Cybersecurity & SaaS Innovation"
              onContactClick={() => {
                window.open(
                  "https://www.linkedin.com/in/firoz-haider-khan-15a56922/",
                  "_blank"
                );
              }}
            />

            <ModernProfileCard
              avatarUrl="/1704514286464.jpeg"
              name="Asaduzzaman"
              title="HR and Admin"
              linkedinUrl="https://www.linkedin.com/in/asaduzzaman/"
              location="People & Culture Expert"
              onContactClick={() => {
                window.open(
                  "https://www.linkedin.com/in/asaduzzaman/",
                  "_blank"
                );
              }}
            />

            <ModernProfileCard
              avatarUrl="/1636123774508.jpeg"
              name="Arif Rahim"
              title="Head of Operations"
              linkedinUrl="https://www.linkedin.com/in/mohammad-arif-rahim/"
              location="Operations Excellence"
              onContactClick={() => {
                window.open(
                  "https://www.linkedin.com/in/mohammad-arif-rahim/",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
