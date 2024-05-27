"use client"
import { usePathname } from "next/navigation";

// COMPONENTS
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import WhatsappIcon from '@/components/WhatsappIcon';

// STYLE
import '../assets/style/globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);

  // other pages 
  const validRoutes = ["/", "/about", "/services", "/contact"];

  // only home page
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="overflow-x-hidden">
        <div className="flex flex-col min-h-screen">
          {/* S > HEADER */}
          {validRoutes.includes(pathname) && <Header />}
          {/* E > HEADER */}

            {/* S > MAIN CONTENT */}
            <div className={`mainContent grow  ${isHomePage ? '' : 'py-[50px] mt-[75px] md:mt-[114px] lg:mt-0'}`}>
              {children}
            </div>
            {/* E > MAIN CONTENT */}
            
          {/* S > FOOTER */}
          {validRoutes.includes(pathname) && <Footer />}
          {/* E > FOOTER */}
          <ThemeToggle />
          <WhatsappIcon/>
        </div>
        </body>
    </html>
  );
}
