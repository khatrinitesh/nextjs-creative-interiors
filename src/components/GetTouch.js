"use client"
import Image from "next/image";
import TouchThumb from "../assets/img/touch.png";
import { getTouchData } from "@/constants/constants";
import InputField from "./InputField";
import Cta from "./Cta";
import { useState } from "react";

const GetTouch = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange =(e) => {
      setInputValue(e.target.value)
    }
  
    const handleClick = () => {
        console.log('Subscribed')
    }
  return (
    <section className="touchContent  bg-lightgray py-[30px] lg:py-[80px]">
      <div className="container mx-auto">
        <div className="grid gap-10 md:gap-20 lg:grid-cols-2 justify-center items-center">
          <div className="thumbnail flex justify-center items-center" >
            <Image src={TouchThumb} className="aspect-w-16 aspect-h-9" />
          </div>
          <div className="projectRightContent">
            <div className="sectionTitle mb-[25px]">
              <h2 className="font-monsterratB mb-[10px] text-primaryDark text-fs24 lg:text-fs32 uppercase">
                {getTouchData.title}
              </h2>
              <p className="font-monsterratM  text-primaryDark text-fs16 lg:text-fs18">
                {getTouchData.description}
              </p>
            </div>
            <div className="subscribeBlock bg-lightgray h-[50px] md:h-[60px] max-w-full w-full rounded-[8px] mb-[60px] relative">
              <InputField
                onChange={handleChange}
                inputValue={inputValue}
                inputStyle="!bg-white"
              />
              <Cta
                text="get started"
                onClick={handleClick}
                btnStyle="absolute top-[5px] md:top-[8px] right-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTouch;