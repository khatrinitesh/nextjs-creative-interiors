import Link from 'next/link'
import React from 'react'

const BannerSection = ({bigHeadStyle,title}) => {
  return (
    <div className={`${bigHeadStyle} bannerSection w-full flex items-center justify-center flex-col absolute left-[50%] translate-x-[-50%] bottom-[20%]`}>
        <h1 className={`font-monsterratB text-white text-fs28 headTitle  lg:text-fs50 mb-[20px]`}>{title}</h1>
        <Link href="javascript:void(0)" className="inline-flex items-center shadow-btnBannerShadow justify-center text-primaryDark font-monsterratB text-fs16 lg:text-fs18 px-[40px] bg-white h-[50px] rounded-[10px]">Book Free Consultation</Link>
    </div>
  )
}

export default BannerSection