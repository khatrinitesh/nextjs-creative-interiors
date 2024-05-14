import React,{useState} from 'react'

const InputField = ({onChange,inputValue,inputStyle}) => {
   
  return (
    <>
    <input className={`dark:bg-white bg-lightgray h-full w-full outline-none border-none rounded-[8px] pl-[10px] pe-[140px] fieldControl text-txtPlaceholder font-monsterratM ${inputStyle}`} placeholder="Enter text..." value={inputValue}
        onChange={onChange} /></>
  )
}

export default InputField