"use client"
import Image from "next/image";
import TouchThumb from "../assets/img/about/touch.png";
import { getTouchData } from "@/constants/constants";
import InputField from "./InputField";
import Cta from "./Cta";
import { useState,useRef } from "react";
import emailjs from "@emailjs/browser";

const GetTouch = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const handleChange =(e) => {
    setInputValue(e.target.value)
    if (e.target.value) {
      setErrorMessage(''); // Clear error message when input is not empty
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (inputValue === '') {
      setErrorMessage('This field is required.');
      return;
    }
    emailjs
      .sendForm('service_60pxdoy', 'template_i5spdsn', form.current, {
        publicKey: 'a1u_zKxDNiJ_YgFY0',

      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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
            <form className="h-full" ref={form} onSubmit={sendEmail}>
              <InputField name="message"
                onChange={handleChange}
                inputValue={inputValue}
                inputStyle="!bg-white"
              />
              <Cta text="get started"
                onClick={sendEmail} btnStyle="absolute top-[5px] md:top-[8px] right-[10px]"/>
               {errorMessage && <p className="text-red-600 font-monsterratB text-fs12">This field is required</p>}
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTouch;
