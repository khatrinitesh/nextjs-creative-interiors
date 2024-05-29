"use client";
// image
import Image from "next/image";
import Logo from "../assets/img/logo.svg";
// router
import Link from "next/link";
// hooks
import { useState, useEffect } from "react";
// pathname
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const Header = () => {
  // pathname 
  const pathname = usePathname();

  const isHomePage = pathname === "/"; // home
  const isAboutPage = pathname === "/about"; // about
  const isPortfolioPage = pathname === "/portfolio"; // portfolio
  const isContactPage = pathname === "/contact"; // contact

  // all pages > home page | about page | portfolio page | contact page
  const otherPages =
    !isHomePage && (isAboutPage || isPortfolioPage || isContactPage);

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
    <>
    {/* MOBILE + TABLET */}
      <header className={`fixed bannerContent block shadow lg:hidden top-0 left-0 w-full z-[999] py-[15px] transition-all duration-500 ${
            !isHomePage ? "" : "bg-priamryDark fixed"} ${isHomePage || isSticky
            ? "!bg-[rgba(0,0,0,0.5)] !py-[15px] shadow backdrop-blur top-0 w-full left-0"
            : ""
        }`}>
        <div className="container mx-auto">
          <Link href="/"> 
          <Image src={Logo} className={` w-[50px] md:w-[80px]  mx-auto   ${
                    isHomePage ? "logoDefaultWhite" : ""
                  } ${isHomePage || isSticky ? 'logoDefaultWhite' : 'logoDefaultBlack'}`}/>
                  </Link>
          <Sidebar/>
        </div>
      </header>

      {/* DESKTOP */}
        <header
          className={`hidden lg:block header  top-0 left-0 w-full z-[999] py-[15px] md:py-[30px] transition-all duration-500 ${
            !isHomePage ? "bg-white" : "bg-transparent fixed"
          } ${
            isHomePage && isSticky
              ? "!bg-[rgba(0,0,0,0.5)] sticky !py-[10px] shadow backdrop-blur"
              : ""
          }`}
        >
          <div className="container mx-auto">
            <div className="flex w-full items-center justify-center">
              <ul className="flex items-center justify-evenly w-full">
                <li>
                  <Link
                    href="/"
                    className={`font-monsterratR text-fs14 lg:text-fs18 ${
                      isHomePage ? "text-[#fff]" : "text-black"
                    } ${
                      pathname === "/" ? "border-b-2 border-white-500" : ""
                    } ${isHomePage && isSticky ? "text-white" : ""}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`font-monsterratR text-fs14 lg:text-fs18 ${
                      !otherPages ? "!text-white" : "text-black"
                    } ${isAboutPage ? "border-b-2 border-black" : ""} ${
                      isHomePage && isSticky ? "text-white border-b-white" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
              </ul>

              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  className={` w-[200px] ${
                    isHomePage ? "logoDefaultWhite" : "logoDefaultBlack"
                  } aspect-w-16 aspect-h-9 `}
                />
              </Link>

              <ul className="flex items-center justify-evenly w-full">
                <li>
                  <Link
                    href="/portfolio"
                    className={`font-monsterratR text-fs14 lg:text-fs18 ${
                      !otherPages ? "!text-white" : "text-black"
                    } ${isPortfolioPage ? "border-b-2 border-black" : ""}  ${
                      isHomePage && isSticky ? "text-white border-b-white" : ""
                    }`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`font-monsterratR text-fs14 lg:text-fs18 ${
                      !otherPages ? "!text-white" : "text-black"
                    } ${isContactPage ? "border-b-2 border-black" : ""} ${
                      isHomePage && isSticky ? "text-white border-b-white" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
    </>
  );
};
export default Header;
