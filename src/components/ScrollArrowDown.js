"use client"
import Image from "next/image";
import IconArrowDown from "../assets/img/iconarrowdown.svg";
import { Link } from "react-scroll";

const ScrollArrowDown = () => {
  return (
    <Link to="experience"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} className='flex items-center justify-center scroll-arrow w-[40px] h-[40px] md:w-[60px] md:h-[60px] border-white  border-2 rounded-[50%]  absolute bottom-[10%] md:bottom-[20%] left-1/2 translate-x-[-50%] z-[9] cursor-pointer '>
      <Image src={IconArrowDown} className="arrow-icon w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
    </Link>
  )
}

export default ScrollArrowDown