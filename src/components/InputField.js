import React from 'react'

const InputField = ({onChange,inputValue,inputStyle,name}) => {
   
  return (
    <>
    <input required name={name} autoComplete="none" className={`dark:bg-white bg-lightgray h-full w-full outline-none border-none rounded-[8px] pl-[10px] pe-[140px] fieldControl text-txtPlaceholder font-monsterratM ${inputStyle}`} placeholder="Enter text..." value={inputValue}
        onChange={onChange} /></>
  )
}

export default InputField