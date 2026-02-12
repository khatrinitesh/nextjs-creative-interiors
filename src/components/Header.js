"use client";

// Image
import Image from "next/image";
import Logo from "../assets/img/icons/logo.svg";

// Router
import Link from "next/link";

// Hooks
import { useState, useEffect } from "react";

// Pathname
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const Header = () => {
  const pathname = usePathname();

  // Detect current page
  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const isPortfolioPage = pathname === "/portfolio";
  const isContactPage = pathname === "/contact";

  const [isSticky, setIsSticky] = useState(false);

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to get link color
  const getLinkColor = () =>
    isHomePage || isSticky ? "text-white" : "text-black";

  return (
    <>
      {/* MOBILE + TABLET */}
      <header
        className={`fixed block lg:hidden top-0 left-0 w-full z-[999] py-[15px] transition-all duration-500
          ${isHomePage || isSticky ? "bg-[rgba(0,0,0,0.5)] shadow backdrop-blur" : "bg-priamryDark"}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link aria-label="logo" href="/">
            <Image
              priority
              alt="Logo"
              src={Logo}
              className={`w-[80px] ${isHomePage || isSticky ? "logoDefaultWhite" : "logoDefaultBlack"}`}
            />
          </Link>
          <Sidebar />
        </div>
      </header>

      {/* DESKTOP */}
      <header
        className={`hidden lg:block top-0 left-0 w-full z-[999] py-[15px] md:py-[30px] transition-all duration-500
          ${!isHomePage ? "bg-white" : "bg-transparent fixed"}
          ${isHomePage && isSticky ? "!bg-[rgba(0,0,0,0.5)] shadow backdrop-blur !py-[10px]" : ""}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Menu */}
          <ul className="flex items-center gap-10 topNavigation justify-center">
            <li>
              <Link
                href="/"
                className={`font-monsterratR text-fs14 lg:text-fs18 ${getLinkColor()} ${
                  isHomePage ? "border-b-2 border-white" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`font-monsterratR text-fs14 lg:text-fs18 ${getLinkColor()} ${
                  isAboutPage ? "border-b-2 border-black" : ""
                }`}
              >
                About
              </Link>
            </li>
          </ul>

          {/* Logo Center */}
          <Link href="/" aria-label="logo">
            <Image
              priority
              src={Logo}
              alt="Logo"
              className={`w-[200px] ${isHomePage || isSticky ? "logoDefaultWhite" : "logoDefaultBlack"} aspect-w-16 aspect-h-9`}
            />
          </Link>

          {/* Right Menu */}
          <ul className="flex items-center gap-10 topNavigation justify-center ">
            <li>
              <Link
                href="/portfolio"
                className={`font-monsterratR text-fs14 lg:text-fs18 ${getLinkColor()} ${
                  isPortfolioPage ? "border-b-2 border-black" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`font-monsterratR text-fs14 lg:text-fs18 ${getLinkColor()} ${
                  isContactPage ? "border-b-2 border-black" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
