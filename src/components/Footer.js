"use client"
// IMAGES
import Logo from "../assets/img/logo.svg";
// COMPONENTS
import SocialMedia from "./SocialMedia";
import ContactInfo from "./ContactInfo";
import Subscribe from "./Subscribe";
// IMAGE
import Image from "next/image";
// CONSTANTS
import { footerNavLinks } from "@/constants/constants";
// ROUTER 
import Link from "next/link";



const Footer = () => {
  return (
    <footer className="footer dark:bg-primaryDark bg-lightgray py-[50px]">
      <div className="container mx-auto">
        <div className="footerRowOne mb-[30px]">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="boxFoot text-center px-[30px] relative dark:text-white text-black">
              <div className="logoBlock flex justify-center items-center mb-[15px]">
                <Image className="filter logoBlack" src={Logo} />
              </div>
              <p className="desc text-fs16 dark:text-secondaryDark font-monsterratM text-secondaryLight">We believe in transforming spaces into captivating environments that reflect your unique lifestyle and personality. With our passion for design and dedication to quality, we strive to exceed expectations and create lasting impressions. Let's collaborate to turn your vision into reality.</p>
              <SocialMedia/>
            </div>
            <div className="boxFoot justify-center items-center flex  text-center relative px-[30px]">
              <ul>
                {footerNavLinks.map((nav,index) => {
                  return(
                    <li key={index} className={`${index !== footerNavLinks.length - 1 ? 'mb-2' : ''}`}>
                      <Link href={nav.url} className={`dark:text-secondaryDark text-secondaryLight font-monsterratB text-fs16`}>{nav.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="boxFoot relative px-[30px] justify-center items-center flex flex-col dark:text-white text-black">
              <Subscribe/>
              <ContactInfo/>
            </div>
          </div>
        </div>
        <div className="copyRight flex items-center justify-center py-[30px]">
          <span className="font-monsterratR text-fs12 dark:text-white text-black">All Rights Reserved <Link className="font-bold" href="https://creativeinteriors.in/" target="_blank">CREATIVE INTERIORS</Link></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
