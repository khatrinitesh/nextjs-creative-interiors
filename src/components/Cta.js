import React from 'react'

const Cta = ({onClick,text,btnStyle}) => {
  return (
    <>
    <button onClick={onClick} className={`${btnStyle} shadow-btnPrimary bg-black text-white font-monsterratB text-fs14 capitalize  px-[20px] h-[40px] rounded-[10px]`}>{text}</button>
    </>
  )
}

export default Cta