"use client"
import Image from "next/image";
import ProjectThumb from "../assets/img/project.png";
import { projectData } from "@/constants/constants";
import InputField from "./InputField";
import Cta from "./Cta";
import { useState,useRef } from "react";
import emailjs from "@emailjs/browser";

const Project = () => {
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
        .sendForm('service_60pxdoy', 'template_52khocw', form.current, {
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
    <section className="projectContent  py-[30px] lg:py-[80px] bg-white">
      <div className="container mx-auto">
        <div className="grid gap-10 md:gap-20 lg:grid-cols-2 justify-center items-center">
          <div className="thumbnail flex justify-center items-center" >
            <Image src={ProjectThumb} className="aspect-w-16 aspect-h-9" />
          </div>
          <div className="projectRightContent">
            <div className="sectionTitle mb-[25px]">
              <h2 className="font-monsterratB mb-[10px] text-primaryDark text-fs24 lg:text-fs32 uppercase">
                {projectData.title}
              </h2>
              <p className="font-monsterratM text-primaryDark text-fs16 lg:text-fs18">
                {projectData.description}
              </p>
            </div>
            <form className="h-full" ref={form} onSubmit={sendEmail}>
            <div className="subscribeBlock bg-lightgray h-[50px] md:h-[60px] max-w-full w-full rounded-[8px] mb-[60px] relative">
              <InputField name="message"
                onChange={handleChange}
                inputValue={inputValue}
                inputStyle="!bg-lightgray"
              />
              <Cta
                text="get started"
                onClick={sendEmail} 
                btnStyle="absolute top-[5px] md:top-[8px] right-[10px]"
              />
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
