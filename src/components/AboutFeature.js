"use client"
import React from 'react';
import { aboutPilosophy, aboutStoryApproach } from "@/constants/constants";
import Image from "next/image";
import { motion } from 'framer-motion';

const AboutFeature = () => {
  return (
    <section className="py-[30px] lg:py-[80px] dark:bg-primaryDarkGradient bg-secondaryDarkGradient" id="aboutfeature">
    <div className="container mx-auto">
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1,delay: 1  }}
>
      <div className="grid xl:grid-cols-2 gap-[20px] h-full">
        <div className="leftContent flex flex-col h-full flex-grow justify-between">
          {aboutStoryApproach.map((val,index) => (
            <div key={index} className={`overflow-hidden mb-${index !== aboutStoryApproach.length - 1 ? 'marginB' : '0'}`}>
              <h2 className="headTitle dark:text-white text-primaryDark font-monsterratB text-fs20 lg:text-fs32 mb-2">{val.title}</h2>
              <p className="headTitle dark:text-white text-primaryDark font-monsterratM text-fs16 lg:text-fs18 mb-4">{val.desc}</p>
              <div className="overflow-hidden">
              <Image src={val.thumbnail} alt={val.title} className="flex-grow imgWallpaper h-full w-full aspect-w-16 aspect-h-9 transition-all duration-200 delay-200 hover:scale-110"/>
              </div>
            </div>
          ))}
        </div>
        <div className="rightContent flex-grow  h-full">
          {aboutPilosophy.map((val,index) => (
            <div key={index} className="overflow-hidden">
              <h2 className="headTitle dark:text-white text-primaryDark font-monsterratB text-fs20 lg:text-fs32 mb-2">{val.title}</h2>
              <p className="headTitle dark:text-white text-primaryDark font-monsterratM text-fs16 lg:text-fs18 mb-4">{val.desc}</p>
              <div className="overflow-hidden">
              <Image src={val.thumbnail} alt={val.title} className="h-full w-full aspect-w-16 aspect-h-9 transition-all duration-200 delay-200 hover:scale-110"/>
              </div>
            </div>
          ))}
        </div>
    </div>
    </motion.div>
  </div>
</section>
  )
}

export default AboutFeature