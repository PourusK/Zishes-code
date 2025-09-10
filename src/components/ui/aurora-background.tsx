"use client";
import { cn } from "../../lib/utlis";
import React, { ReactNode, useEffect, useState } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check
    checkScreenSize();
    setIsLoaded(true);

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col bg-zinc-900 dark:bg-zinc-900 w-full min-h-screen",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora": isDesktop 
                ? "repeating-linear-gradient(100deg, #0a0808 30%, #1a1a1d 15%, #2d2828 10%, #302a2a 25%, #a78554 40%)"
                : "linear-gradient(180deg, #222230 0%, #0a0808 30%, #2d2828 60%, #1a1a1d 80%, #302a2a 100%)",
              "--dark-gradient": "repeating-linear-gradient(100deg, #000 0%, #2b2727 7%, transparent 10%, transparent 12%, #000 16%)",
              "--blue-300": "#454f5a",
              "--blue-400": "#5e6266",
              "--blue-500": "#363d44",
              "--indigo-300": "#7d829b",
              "--violet-200": "#af8c58",
              "--black": "#000000",
              "--white": "#f7eeee",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `pointer-events-none absolute -inset-[10px] opacity-60 blur-[10px] invert filter will-change-transform 
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] 
              [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] 
              after:absolute after:inset-0 after:mix-blend-difference after:content-[""] dark:invert-0`,
              `[background-image:var(--dark-gradient),var(--aurora)] [background-size:200%,_200%] [background-position:50%_50%,50%_50%]`, 
              `after:[background-size:200%,_100%]`,
              isDesktop && `after:animate-aurora`,
              showRadialGradient && `[mask-image:radial-gradient(ellipse_at_0%_0%,black_40%,var(--transparent)_70%)]`,
            )}
          ></div>
          
          {/* Subtle overlay gradients for both mobile and desktop */}
          <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(to_top,rgba(175, 171, 171, 0.3)_0%,transparent_50%,transparent_100%)]" />
          <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_50%_100%,rgba(0, 0, 0, 0.5)_0%,rgba(15, 14, 14, 0.5)_100%)]" />
        </div>
        
        <div className={`relative z-10 flex-1 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      </div>
    </main>
  );
};