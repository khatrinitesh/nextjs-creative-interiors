"use client"

// COMPONENTS
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { usePathname } from "next/navigation";
import Meta from '@/components/Meta';

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
      <Meta/>
      <body>
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
        </div>
        </body>
    </html>
  );
}
