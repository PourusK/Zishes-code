"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import Image from "next/image";

// ---------------- CometCard ----------------
const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}: {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`-${rotateDepth}deg`, `${rotateDepth}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`${rotateDepth}deg`, `-${rotateDepth}deg`]);

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [`-${translateDepth}px`, `${translateDepth}px`]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [`${translateDepth}px`, `-${translateDepth}px`]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`
    radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0) 80%)
  `;

  // Check mobile screen
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`perspective-distant transform-3d ${className || ""}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isMobile ? "0deg" : rotateX,
          rotateY: isMobile ? "0deg" : rotateY,
          translateX: isMobile ? "0px" : translateX,
          translateY: isMobile ? "0px" : translateY,
          boxShadow:
            "rgba(142,45,226,0.15) 0px 60px 100px, rgba(142,45,226,0.2) 0px 20px 40px",
        }}
        initial={{ scale: 1, z: 0 }}
        whileHover={!isMobile ? { scale: 1.05, z: 50, transition: { duration: 0.2 } } : {}}
        className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-purple-500"
      >
        {children}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
          style={{
            background: glareBackground,
            opacity: 0.6,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

// ---------------- HowItWorksSection ----------------
const HowItWorksSection = () => {
  const steps = [
    {
      image: "/img/up.png",
      title: "Seller Uploads Prize",
      description: "Seller becomes Tournament Master.",
    },
    {
      image: "/img/enter.png",
      title: "Players Enter Tournament",
      description: "Skill-based games, timed, anti-cheat.",
    },
    {
      image: "/img/winn.png",
      title: "Winner Takes Prize, Master Earns Pool",
      description: "Champion gets item, seller gets entry fees.",
    },
  ];

  return (
    <section className="md:py-70 py-30 px-4 lg:px-8 text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            className="text-5xl lg:text-9xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How Zishes Works
          </motion.h2>
          <motion.p
            className="text-3xl ms:text-4xl text-purple-200 m mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Three simple steps — clear, fair, and exciting.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-46 md:gap-6 mt-60">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="h-full max-w-[280px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CometCard>
                <div className="p-4 h-full flex flex-col items-center text-center relative">
                  {/* Image with glow */}
                  <div className="relative ">
                    <div
  className={`relative ${index === 0 ? "translate-x-[70px]" : ""}`}>
     <Image
                      src={step.image}
                      alt={step.title}
                      width={300}
                      height={300}
                      className="rounded-lg relative z-10 bottom-24 scale-230"
                      
                    />

  </div>
                   
                    <div className="absolute top-40 left-0 w-full h-1/4 
                  backdrop-blur-md bg-gradient-to-t from-black/30 to-transparent z-20 rounded-full">
  </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full bg-purple-500 blur-2xl opacity-90 z-20"></div>
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold mt-6 z-40">{step.title}</h3>
                  <p className="text-purple-200 text-sm mt-2">{step.description}</p>

                  {/* Number */}
                  <div className="mt-4 w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
              </CometCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
