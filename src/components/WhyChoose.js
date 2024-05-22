"use client"
import React from 'react'
import ChooseData from './ChooseData'
import { motion } from 'framer-motion';

const WhyChoose = () => {
  return (
    <section className="chooseContent py-[30px] lg:py-[80px] bg-white">
        <div className="container mx-auto">
            <div className="sectionTitle flex justify-center items-center mb-[30px] lg:mb-[40px]">
                <h2 className="font-monsterratB mb-[10px] text-primaryDark text-fs24 lg:text-fs32">
                    Why Choose Us
                </h2>
            </div>
            <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1,delay: 1.2  }}
>
            <ChooseData/>
            </motion.div>
        </div>
    </section>
  )
}

export default WhyChoose