import "./globals.css";


import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import CTAButton from "@/components/ui/CTAButton";
import { saans } from "@/fonts";
import { FooterProvider } from "@/contexts/footer-context";
import DocumentTitleChanger from "@/components/layout/DocumentTitleChanger";
import { metadata } from "./metadata";

import LoadingScreen from "@/components/layout/LoadingScreen";
import { InitialLoadProvider } from "@/contexts/initial-load-context";
import { AuroraBackground } from "@/components/ui/aurora-background";
export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <ReactLenis root options={{ 

        
          
        }}>
          <InitialLoadProvider>
            <FooterProvider>
              <body
                className={`${saans.className} antialiased  text-neutral-900 bg-zinc-950 dark:bg-zinc-900`}
              >
               
                <LoadingScreen />
                <DocumentTitleChanger />
                 <AuroraBackground  >
                <CTAButton />
                {children}
             
                <Analytics />
                </AuroraBackground>
              </body>
            </FooterProvider>
          </InitialLoadProvider>
        </ReactLenis>
      </html>
   
  );
}
