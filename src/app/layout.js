import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

// STYLE
import "../assets/style/globals.css";

export const metadata = {
  title: "Creative Interiors - A Complete Design Solution",
  description: "Get More out of Your Home or Office Space. Work with Our Interior Designer Now.",
  viewport:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://www.increative.in/" />

        <GoogleAnalytics gaId='G-Z239PYXWWK' />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
