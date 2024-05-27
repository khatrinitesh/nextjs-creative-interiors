import React from "react";
import WhatsAppIconGreen from "../assets/img/iconwhatsappgreen.svg";
import Link from "next/link";
import Image from "next/image";


const WhatsappIcon = () => {
  return (
    <>
      <Link target="_blank" href="https://api.whatsapp.com/send/?phone=9987939773&text&type=phone_number&app_absent=0">
        <Image src={WhatsAppIconGreen} className="z-[9] aspect-w-16 aspect-h-9 w-[40px] h-[40px] fixed top-[20%] right-[5px]"/>
      </Link>
    </>
  );
};

export default WhatsappIcon;
