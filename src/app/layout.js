// COMPONENTS
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

// STYLE
import '../assets/style/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header/>
            <div className="mainContent grow">
            {children}
            </div>
          <Footer/>
          <ThemeToggle />
        </div>
        </body>
    </html>
  );
}
