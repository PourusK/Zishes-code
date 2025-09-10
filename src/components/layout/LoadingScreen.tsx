"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
    
    document.body.classList.add('loading-screen-active');
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('loading-screen-active');
    }, isMobileDevice ? 1800 : 2200);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading-screen-active');
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" }
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              transition: { duration: 0.7, ease: "easeInOut" }
            }}
          >
            <Image 
              src="/img/logo.png" 
              alt="Logo" 
              width={isMobile ? 120 : 160}
              height={isMobile ? 120 : 160}
              priority
            />
          </motion.div>
          
          {!isMobile && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1.8,
                opacity: [0, 0.2, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.5
              }}
              className="absolute rounded-full bg-white/10"
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}