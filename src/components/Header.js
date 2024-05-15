"use client"
// image
import Image from 'next/image'
import Logo from "../assets/img/logo.svg";
// router
import Link from 'next/link';
// hooks
import { useState,useEffect  } from 'react';
// pathname
import { usePathname } from 'next/navigation';

const Header = () => {
  // pathname
  const pathname = usePathname();

  const isHomePage = pathname === '/'; // home
  const isAboutPage = pathname === '/about'; // about
  const isServicesPage = pathname === '/services'; // services
  const isContactPage = pathname === '/contact'; // contact

  // all pages > home page | about page | services page | contact page
  const otherPages = pathname !== "/" || pathname === '/about' || pathname === '/services' || pathname === '/contact'

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(pathname);

  return (
    <header className={`header fixed top-0 left-0 w-full z-[999] py-[20px] transition-all duration-500 ${!isHomePage ? 'bg-white' : 'bg-transparent'} ${isSticky ? "!bg-[rgba(0,0,0,0.8)] sticky  py-[5px] shadow backdrop-blur" : ""}`}>
    <div className="container mx-auto">
      <div className="flex w-full items-center justify-center">
        <ul className="flex items-center justify-evenly w-full">
          <li>
            <Link href="/" className={`font-monsterratB text-fs14 lg:text-fs18 ${isHomePage ? 'text-[#fff]' : 'text-black'} ${pathname === "/" ? 'border-b-2 border-white-500' : ''}`}>Home
            </Link>
          </li>
          <li>
            <Link href="/about"  className={`font-monsterratB text-fs14 lg:text-fs18 ${!otherPages ? '!text-white' : 'text-black'} ${isAboutPage ? 'border-b-2 border-black' : ''}`}>About
            </Link>
          </li>
        </ul>
        <Link href="/">
            <Image src={Logo} alt="Logo" className={`${!otherPages ? '' : 'logoDefaultBlack' } aspect-w-16 aspect-h-9 w-[130px]`}/>
        </Link>
        <ul className="flex items-center justify-evenly w-full">
          <li>
            <Link href="/services" className={`font-monsterratB text-fs14 lg:text-fs18 ${!otherPages ? '!text-white' : 'text-black'} ${isServicesPage ? 'border-b-2 border-black' : ''}`}>Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`font-monsterratB text-fs14 lg:text-fs18 ${!otherPages ? '!text-white' : 'text-black'} ${isContactPage ? 'border-b-2 border-black' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  )
}
export default Header