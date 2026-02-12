import React from "react";
import WhatsAppIconGreen from "../assets/img/icons/iconwhatsappgreen.svg";
import Link from "next/link";
import Image from "next/image";

const WhatsappIcon = () => {
  return (
    <>
      <Link
        aria-label="WhatsApp"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=918655275378&text=Hello%20there!"
      >
        <Image
          priority
          alt="WhatsApp"
          src={WhatsAppIconGreen}
          className="z-[9] aspect-w-16 aspect-h-9 w-[40px] h-[40px] fixed top-[20%] right-[5px]"
        />
      </Link>
    </>
  );
};

export default WhatsappIcon;
