"use client"
import React,{useState} from 'react'
import Cta from './Cta'
import InputField from './InputField'

const Subscribe = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange =(e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
      console.log('Subscribed')
  }
  return (
    <>
    <div className="subscribeBlock dark:bg-white bg-lightgray h-[60px] max-w-full w-full rounded-[8px] mb-[60px] relative">
        <InputField onChange={handleChange} inputValue={inputValue} inputStyle="!bg-white"/>
        <Cta text="get started" onClick={handleClick} btnStyle="absolute top-[10px] right-[10px]"/>
    </div>
    </>
  )
}

export default Subscribe