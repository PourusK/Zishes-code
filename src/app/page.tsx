"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/HowItWorksSection";
import CurvedLoop from "@/components/sections/CurvedLoop";
import StepIntoZishes from "@/components/sections/stepIntoZishes";
import Footer from "@/components/sections/Footer";
import { AnimatedTestimonials } from "@/components/sections/AnimatedTestimonials";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <section id="home">
        <HeroSection />
      </section>
      <section id="how-it-works">
        <CurvedLoop />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="step-into-zishes">
        <StepIntoZishes />
      </section>
      <section id="testimonials">
        <AnimatedTestimonials />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
