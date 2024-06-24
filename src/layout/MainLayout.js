
// COMPONENTS
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ThemeToggle from '@/components/ThemeToggle'
import WhatsappIcon from '@/components/WhatsappIcon'

const MainLayout = ({children}) => {
  return (
    <>
          {/* S > HEADER */}
           <Header />
          {/* E > HEADER */}

          {/* S > MAIN CONTENT */}
          <div
            className={`mainContent grow`}
          >
            {children}
          </div>
          {/* E > MAIN CONTENT */}

          {/* S > FOOTER */}
          <Footer />
          {/* E > FOOTER */}
          <ThemeToggle />
          <WhatsappIcon />
          </>
  )
}

export default MainLayout