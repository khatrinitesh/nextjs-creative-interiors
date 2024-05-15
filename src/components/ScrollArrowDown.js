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
    duration={500} className='flex items-center justify-center scroll-arrow w-[60px] h-[60px] border-white  border-2 rounded-[50%]  absolute bottom-[20%] left-1/2 z-[9] cursor-pointer '>
      <Image src={IconArrowDown} className="arrow-icon w-[30px] h-[30px]"/>
    </Link>
  )
}

export default ScrollArrowDown