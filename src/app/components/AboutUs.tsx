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
        <div className="text-center mb-20 lg:mb-28">
          <TrueFocus sentence="About Us" borderColor="purple" blurAmount={0} />
          <div className="max-w-4xl mx-auto mt-10">
            <DecryptedText
              text="We are a team of passionate innovators dedicated to making cybersecurity and compliance simple, effective, and accessible for businesses of all sizes."
              className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light text-center"
              parentClassName="w-full block"
              animateOn="view"
              speed={25}
              sequential={true}
              revealDirection="start"
            />
          </div>
        </div>

        {/* Our Motto Section - Split Panel Design */}
        <div className={styles.mottoSection}>
          <div className={styles.mottoSectionHeader}>
            <h2 className={styles.mottoSectionTitle}>Our Motto</h2>
            <p className={styles.mottoSectionSubtitle}>
              The core values that drive everything we do
            </p>
          </div>

          <div className={styles.mottoPanelContainer}>
            <div className={`${styles.mottoPanel} ${styles.mottoPanel1}`}>
              <div className={styles.mottoPanelContent}>
                <div className={styles.mottoNumber}>01</div>
                <h3 className={styles.mottoText}>Innovation</h3>
              </div>
            </div>
            <div className={`${styles.mottoPanel} ${styles.mottoPanel2}`}>
              <div className={styles.mottoPanelContent}>
                <div className={styles.mottoNumber}>02</div>
                <h3 className={styles.mottoText}>Excellence</h3>
              </div>
            </div>
            <div className={`${styles.mottoPanel} ${styles.mottoPanel3}`}>
              <div className={styles.mottoPanelContent}>
                <div className={styles.mottoNumber}>03</div>
                <h3 className={styles.mottoText}>Integrity</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section - Horizontal Timeline */}
        <div className={styles.whyChooseSection}>
          <div className={styles.whySectionHeader}>
            <h2 className={styles.whySectionTitle}>Why Choose Us</h2>
            <p className={styles.whySectionSubtitle}>
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
        <div className={styles.focusSection}>
          <div className={styles.focusSectionHeader}>
            <h2 className={styles.focusSectionTitle}>Our Focus</h2>
            <p className={styles.focusSectionSubtitle}>
              Interconnected expertise driving innovation
            </p>
          </div>

          <div className={styles.neuralNetwork}>
            {/* Connection Lines */}
            <svg className={styles.connectionSvg} viewBox="0 0 800 600">
              <defs>
                <linearGradient
                  id="connectionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Animated connection lines */}
              <path
                d="M200,150 Q400,100 600,200"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                className={styles.connectionLine}
                filter="url(#glow)"
              />
              <path
                d="M200,150 Q300,350 500,450"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                className={styles.connectionLine}
                style={{ animationDelay: "0.5s" }}
                filter="url(#glow)"
              />
              <path
                d="M600,200 Q550,350 500,450"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                className={styles.connectionLine}
                style={{ animationDelay: "1s" }}
                filter="url(#glow)"
              />
            </svg>

            {/* Focus Nodes */}
            <div
              className={styles.focusNode}
              style={{ top: "15%", left: "20%" }}
            >
              <div className={styles.nodeCore}>
                <div className={styles.nodeIcon}>
                  <Building className="w-8 h-8" />
                </div>
                <div className={styles.nodeRipple}></div>
              </div>
              <div className={styles.nodeContent}>
                <h3 className={styles.nodeTitle}>Enterprise Software</h3>
                <div className={styles.nodeMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>100%</span>
                    <span className={styles.metricLabel}>Cloud Ready</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>24/7</span>
                    <span className={styles.metricLabel}>Support</span>
                  </div>
                </div>
                <div className={styles.nodeFeatures}>
                  <span>SaaS Solutions</span>
                  <span>On-Premise</span>
                  <span>Hybrid Cloud</span>
                </div>
              </div>
            </div>

            <div
              className={styles.focusNode}
              style={{ top: "20%", right: "15%" }}
            >
              <div className={styles.nodeCore}>
                <div className={styles.nodeIcon}>
                  <Shield className="w-8 h-8" />
                </div>
                <div className={styles.nodeRipple}></div>
              </div>
              <div className={styles.nodeContent}>
                <h3 className={styles.nodeTitle}>Security & Compliance</h3>
                <div className={styles.nodeMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>Enterprise</span>
                    <span className={styles.metricLabel}>Level Security</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>ISO</span>
                    <span className={styles.metricLabel}>Certified</span>
                  </div>
                </div>
                <div className={styles.nodeFeatures}>
                  <span>Zero Trust</span>
                  <span>Compliance</span>
                  <span>Audit Ready</span>
                </div>
              </div>
            </div>

            <div
              className={styles.focusNode}
              style={{
                bottom: "15%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div className={styles.nodeCore}>
                <div className={styles.nodeIcon}>
                  <Heart className="w-8 h-8" />
                </div>
                <div className={styles.nodeRipple}></div>
              </div>
              <div className={styles.nodeContent}>
                <h3 className={styles.nodeTitle}>Customer Success</h3>
                <div className={styles.nodeMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>98%</span>
                    <span className={styles.metricLabel}>Satisfaction</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricValue}>5★</span>
                    <span className={styles.metricLabel}>Rating</span>
                  </div>
                </div>
                <div className={styles.nodeFeatures}>
                  <span>Partnership</span>
                  <span>Growth Focus</span>
                  <span>Success Driven</span>
                </div>
              </div>
            </div>

            {/* Floating Data Particles */}
            <div className={styles.dataParticles}>
              <div
                className={styles.dataParticle}
                style={{ top: "10%", left: "10%" }}
              >
                01
              </div>
              <div
                className={styles.dataParticle}
                style={{ top: "30%", right: "10%" }}
              >
                02
              </div>
              <div
                className={styles.dataParticle}
                style={{ bottom: "20%", left: "15%" }}
              >
                03
              </div>
              <div
                className={styles.dataParticle}
                style={{ top: "60%", right: "25%" }}
              >
                04
              </div>
              <div
                className={styles.dataParticle}
                style={{ bottom: "30%", right: "10%" }}
              >
                05
              </div>
            </div>

            {/* Central Energy Hub */}
            <div className={styles.energyHub}>
              <div className={styles.hubCore}></div>
              <div className={styles.hubRing1}></div>
              <div className={styles.hubRing2}></div>
              <div className={styles.hubRing3}></div>
            </div>
          </div>
        </div>

        {/* Our Leaders Section */}
        <div id="our-leaders" className="mb-20 lg:mb-28">
          <div className="text-center mb-16">
            <TrueFocus
              sentence="Our Leaders"
              borderColor="purple"
              blurAmount={0}
            />
            <div className="max-w-4xl mx-auto mt-10">
              <DecryptedText
                text="Meet our passionate leaders who drive innovation and excellence in cybersecurity and compliance solutions."
                className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light text-center"
                parentClassName="w-full block"
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
              location="15+ Years Experience"
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
              linkedinUrl="https://www.linkedin.com/in/firoz-haider-khan/"
              location="Tech Innovation Leader"
              onContactClick={() => {
                window.open(
                  "https://www.linkedin.com/in/firoz-haider-khan/",
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
