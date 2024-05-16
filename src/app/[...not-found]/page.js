"use client"
import Link from 'next/link'
import React from 'react'

const NotFound = () => {

  return (
    <div className="errorContent h-screen flex items-center flex-col justify-center gap-4">
        <h2 className="text-fs32 font-monsterratB text-primaryDark">404 page not found</h2>
        <Link href="/" className="bg-primaryDark px-[30px] py-[5px] rounded-[10px] text-white text-fs-16">Go Back</Link>
    </div>
  )
}

export default NotFound