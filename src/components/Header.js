"use client"
import Image from 'next/image'
import Logo from "../assets/img/logo.svg";
import Link from 'next/link';
import { useState,useEffect  } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  return (
    <header className={`header fixed top-0 left-0 w-full z-[999] py-[20px] transition-all duration-500   ${
      isSticky ? "bg-[rgba(0,0,0,0.8)] sticky  py-[5px] shadow backdrop-blur" : ""
    }`}>
      <div className="container mx-auto">
        <div className="flex w-full items-center justify-center">
        <ul className="flex items-center justify-evenly w-full">
          <li>
            <Link href="/" className={`text-white font-monsterratB text-fs18 ${pathname === "" ? 'border-b-2 border-white-500' : ''}`}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={`text-white font-monsterratB text-fs18 ${pathname === "" ? 'border-b-2 border-white-500' : ''}`}>About</Link>
          </li>
        </ul>
        <Link href="/">
          <Image src={Logo} className={`aspect-w-16 aspect-h-9 w-[130px]  ${isSticky ? 'w-[100px]' : 'w-[130px]'}`}/>
        </Link>
        <ul className="flex items-center justify-evenly w-full">
          <li>
            <Link href="/services" className={`text-white font-monsterratB text-fs18 ${pathname === "" ? 'border-b-2 border-white-500' : ''}`}>Services</Link>
          </li>
          <li>
            <Link href="/contact" className={`text-white font-monsterratB text-fs18 ${pathname === "" ? 'border-b-2 border-white-500' : ''}`}>Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </header>
  )
}

export default Header