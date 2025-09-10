"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";

const StepIntoZishes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden  min-h-screen py-12 md:py-0 flex items-center px-0 md:px-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content Column - Left side on desktop */}
          <div className="flex-1 order-1 lg:order-1 lg:text-left text-center">
            {/* Header */}
            <motion.div
              className="mb-28"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4">
                Step Into Zishes
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-purple-200 max-w-2xl mx-auto lg:mx-0 mt-6">
                Become a Tournament Master or play to win prizes in fair, skill-based competitions.
              </p>
            </motion.div>
          </div>

          {/* Image & Buttons Column - Right side on desktop */}
          <div className="flex-1 order-2 lg:order-2 flex flex-col items-center lg:items-start">
            <motion.div
              className="w-full flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/img/mo.png"
                  alt="Tournament App Mockup"
                  className="w-full max-w-md h-auto rounded-xl md:scale-200 scale-150"
                />
              </div>
            </motion.div>

            {/* Buttons - Now properly aligned */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-14 lg:mt-32 ml-0 md:ml-44 w-full justify-center lg:justify-start "
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
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default StepIntoZishes;