"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";

const StepIntoZishes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const complianceBadges = [
    { label: "18+ KYC", icon: "🔞" },
    { label: "Skill-Based", icon: "🎯" },
    { label: "Transparent Fees", icon: "💎" },
    { label: "India GST/TDS", icon: "🇮🇳" },
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden ">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-5xl lg:text-9xl font-bold text-white mb-4">
            Step Into Zishes
          </h1>
          <p className="text-2xl py-5 md:text-4xl text-purple-200 max-w-2xl mx-auto">
            Become a Tournament Master or play to win prizes in fair, skill-based competitions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content Column */}
          <div className="flex-1 order-2 lg:order-1">
            {/* iPhone Image */}
            <motion.div
              className="mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative  mx-auto sm:mx-0 mt-10">
                <img
                  src="/img/mockup.png"
                  alt="iPhone Mockup"
                  className="w-full h-auto scale-175 sm:scale-100"
                />
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8 mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
                Download App
              </button>
              <button
                onClick={scrollToTop}
                className="border border-purple-500 text-purple-300 hover:bg-purple-950/30 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Back to Top
              </button>
            </motion.div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepIntoZishes;