import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'

// STYLE
import "../assets/style/globals.css";

export const metadata = {
  title: "   Creative Interiors - A Complete Design Solution",
  description: "Get More out of Your Home or Office Space. Work with Our Interior Designer Now.",
  keywords: "Creative Interiors, Design Solution, Interior Designer",
  viewport:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({ children }) {
  
  return (
    <html>
        <meta name="viewport" content={metadata.viewport} />
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://www.increative.in/" />

        <GoogleAnalytics gaId='G-Z239PYXWWK' />
      </Head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
