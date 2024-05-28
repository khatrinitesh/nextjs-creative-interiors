"use client"
import React,{useState,useRef} from 'react'
import emailjs from "@emailjs/browser";
import Cta from './Cta'
import InputField from './InputField'

const Subscribe = () => {
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
      .sendForm('service_6osxwlg', 'template_q9fj8ci', form.current, {
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
    <>
    <form className="h-full" ref={form} onSubmit={sendEmail}>
    <div className="subscribeBlock dark:bg-white bg-lightgray h-[50px] md:h-[60px] max-w-full w-full rounded-[8px] mb-[40px] md:mb-[60px] relative">
          <InputField name="message" onChange={handleChange} inputValue={inputValue} inputStyle="!bg-white"/>
          <Cta onClick={sendEmail} text="get started" btnStyle="absolute top-[5px] md:top-[10px] right-[10px]"/>
          {errorMessage && <p className="mt-[10px] text-red-600 font-monsterratB text-fs12">This field is required</p>}
    </div>
    
    </form>
    </>
  )
}

export default Subscribe