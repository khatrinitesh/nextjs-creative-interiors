"use client"
// IMAGES
import Logo from "../assets/img/icons/logo.svg";
// COMPONENTS
import SocialMedia from "./SocialMedia";
import ContactInfo from "./ContactInfo";
// IMAGE
import Image from "next/image";
// CONSTANTS
import { footerNavLinks } from "@/constants/constants";
// ROUTER 
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer dark:bg-primaryDark bg-lightgray py-[30px] lg:py-[50px]">
      <div className="container mx-auto">
        <div className="footerRowOne mb-[30px]">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            <div className="boxFoot text-center px-[30px] relative dark:text-white text-black">
              <div className="logoBlock flex justify-center items-center mb-[15px]">
                <Image priority alt="Logo" className="logoBlack max-w-[150px] aspect-w-16 aspect-h-16" src={Logo} />
              </div>
              <p className="desc text-fs14 lg:text-fs16 dark:text-secondaryDark font-monsterratM text-secondaryLight">We believe in transforming spaces into captivating environments that reflect your unique lifestyle and personality. With our passion for design and dedication to quality, we strive to exceed expectations and create lasting impressions. Let's collaborate to turn your vision into reality.</p>
              <SocialMedia/>
            </div>
            <div className="boxFoot justify-center items-center flex  text-center relative px-[30px]">
              <ul>
                {footerNavLinks.map((nav,index) => {
                  return(
                    <li key={index} className={`${index !== footerNavLinks.length - 1 ? 'md:mb-2' : ''}`}>
                      <Link aria-label={nav.text} href={nav.url} className={`dark:text-secondaryDark text-secondaryLight font-monsterratB text-fs14 lg:text-fs16`}>{nav.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="boxFoot relative px-[30px] justify-center items-center flex flex-col dark:text-white text-black">
              <ContactInfo/>
            </div>
          </div>
        </div>
        <div className="copyRight flex items-center justify-center py-[10px] lg:py-[30px]">
          <span className="font-monsterratR text-fs12 dark:text-white text-black">All Rights Reserved <Link className="font-bold" href="http://www.increative.in/" target="_blank">CREATIVE INTERIORS</Link></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
