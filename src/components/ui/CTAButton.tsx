"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import useInitialLoad from "@/contexts/initial-load-context";

const navItems = [
  { title: "Home", href: "#home" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Testimonials", href: "#testimonials" },
];

export default function CTAButton() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isInitialLoad } = useInitialLoad();

  useOnClickOutside(isOpen, ref as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        delay: isInitialLoad ? 3 : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="scroll-smooth md:w-[60%]  w-[80%]  mx-auto h-[65px] px-6  rounded-full 
                 bg-transparent border border-neutral-800 fixed top-4 left-1/2 
                 -translate-x-1/2 z-50 backdrop-blur-lg flex items-center justify-between"
    >
      {/* === Logo === */}
      <Link
        href="#home"
        className="relative h-[70px] w-[70px] md:h-[70px] md:w-[70px]"
      >
        <Image src="/img/logo.png" alt="App Logo" fill className="object-cover overflow-visible" />
      </Link>

      {/* === Desktop Nav === */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="text-neutral-300 hover:text-[#8E2DE2] transition-colors duration-300 font-bold text-lg"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* === Desktop CTA === */}
      <Link
        href="#download"
        className="hidden md:inline-block px-4 py-2.5 rounded-full text-white font-medium text-md"
        style={{
          background: "linear-gradient(to right, #8E2DE2, #4A00E0)",
          boxShadow: "0 4px 15px rgba(142, 45, 226, 0.3)",
        }}
      >
        Download App
      </Link>

      {/* === Mobile Menu Button === */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden ml-auto flex flex-col gap-1.5 w-6 h-6"
        aria-label="Toggle menu"
      >
        <span
          className={`w-full h-0.5 transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
          style={{ backgroundColor: "#8E2DE2" }}
        ></span>
        <span
          className={`w-full h-0.5 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundColor: "#8E2DE2" }}
        ></span>
        <span
          className={`w-full h-0.5 transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
          style={{ backgroundColor: "#8E2DE2" }}
        ></span>
      </button>

      {/* === Mobile Dropdown === */}
      {isOpen && (
        <div className="absolute top-full mt-3 left-0 w-full rounded-lg bg-black  border border-neutral-800 flex flex-col items-center py-4 ">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-2 text-neutral-300 hover:text-[#8E2DE2] transition-colors font-medium"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="#download"
            onClick={() => setIsOpen(false)}
            className="mt-3 px-4 py-2.5 rounded-full text-white font-medium"
            style={{
              background: "linear-gradient(to right, #8E2DE2, #4A00E0)",
              boxShadow: "0 4px 15px rgba(142, 45, 226, 0.3)",
            }}
          >
            Download App
          </Link>
        </div>
      )}
    </motion.div>
  );
}
