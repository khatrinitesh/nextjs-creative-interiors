"use client"
// COMPONENTS
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { usePathname } from "next/navigation";

// STYLE
import '../assets/style/globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);

  const validRoutes = ["/", "/about", "/services", "/contact"];

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {/* S > HEADER */}
          {validRoutes.includes(pathname) && <Header />}
          {/* E > HEADER */}

            {/* S > MAIN CONTENT */}
            <div className="mainContent grow">
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
