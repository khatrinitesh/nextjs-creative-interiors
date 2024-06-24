import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google'


// STYLE
import "../assets/style/globals.css";

export const metadata = {
  title: "Creative Interiors - A Complete Design Solution",
  description: "Get More out of Your Home or Office Space. Work with Our Interior Designer Now.",
};



export default function RootLayout({ children }) {
  
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
        {children}
      </body>
    </html>
  );
}
