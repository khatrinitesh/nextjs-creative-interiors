"use client"
import Link from 'next/link'
import React from 'react'

const NotFound = () => {

  return (
    <div className="errorContent h-screen overflow-hidden flex items-center flex-col justify-center gap-4">
      <h1 className="error font-monsterratB text-9xl text-gray-400">404</h1>
      <div className="page mt-8 mb-4 text-2xl font-monsterratB text-gray-700">
        Ooops!!! The page you are looking for is not found
      </div>
      <Link href="/" className="rounded-[10px] back-home inline-block border-2 border-primaryDark text-white uppercase font-monsterratB py-3 px-4 transition-all duration-200 ease-linear bg-primaryDark hover:bg-primaryDark hover:text-gray-300">
          Back to home
      </Link>
    </div>
  )
}

export default NotFound