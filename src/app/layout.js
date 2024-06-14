"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GoogleAnalytics } from '@next/third-parties/google'

// COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsappIcon from "@/components/WhatsappIcon";

// STYLE
import "../assets/style/globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // other pages
  const validRoutes = ["/", "/about", "/portfolio", "/contact"];

  // only home page
  const isHomePage = pathname === "/";
  

  
  
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />

        <GoogleAnalytics gaId='G-Z239PYXWWK' />
      </head>
      <body className="overflow-x-hidden">
        <div className="flex flex-col min-h-screen">
          {/* S > HEADER */}
          {validRoutes.includes(pathname) && <Header />}
          {/* E > HEADER */}

          {/* S > MAIN CONTENT */}
          <div
            className={`mainContent grow  ${
              isHomePage ? "" : "md:py-[50px] mt-[75px] md:mt-[114px] lg:mt-0"
            }`}
          >
            {children}
          </div>
          {/* E > MAIN CONTENT */}

          {/* S > FOOTER */}
          {validRoutes.includes(pathname) && <Footer />}
          {/* E > FOOTER */}
          <ThemeToggle />
          <WhatsappIcon />
        </div>
      </body>
    </html>
  );
}
