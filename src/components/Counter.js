"use client"
import React from 'react'
import CounterFormat from './CounterFormat';
import { FaPlus } from "react-icons/fa6";

const Counter = () => {
  return (
    <div className="grid grid-cols-4 gap-[20px] max-w-[800px] w-full mt-[20px]">
        <div className="boxCount flex flex-col relative">
            <CounterFormat from={0}
            to={8}
            speed={2000}
            refreshInterval={50}
            decimals={0}
            onUpdate={(value) => {}}
            onComplete={(value) => {}}/>
            <span className="txtlbl font-monsterratB text-fs16 lg:text-fs18">Active Projects</span>
        </div>
        <div className="boxCount flex flex-col relative">
            <CounterFormat from={0}
            to={70}
            speed={2000}
            refreshInterval={50}
            decimals={0}
            onUpdate={(value) => {}}
            onComplete={(value) => {}}/>
            <span className="txtlbl font-monsterratB text-fs16 lg:text-fs18">Expert Team</span>
        </div>
        <div className="boxCount flex flex-col relative">
            <div className="relative inline-block">
            <CounterFormat from={0}
            to={100}
            speed={2000}
            refreshInterval={50}
            decimals={0}
            onUpdate={(value) => {}}
            onComplete={(value) => {}}/>
                <span className="font-monsterratB iconPlus absolute top-[50%] translate-y-[-50%] right-auto">
                    <FaPlus className="font-monsterratB font-bold"/>
                </span>
            </div>
            <span className="txtlbl font-monsterratB text-fs16 lg:text-fs18">Satisfied Clients</span>
        </div>
        <div className="boxCount flex flex-col relative">
            <div className="relative inline-block">
            <CounterFormat from={0}
            to={10}
            speed={2000}
            refreshInterval={50}
            decimals={0}
            onUpdate={(value) => {}}
            onComplete={(value) => {}}/>
                <span className="font-monsterratB iconPlus absolute top-[50%] translate-y-[-50%] right-auto">
                    <FaPlus className="font-monsterratB font-bold"/>
                </span>
            </div>
            <span className="txtlbl font-monsterratB text-fs16 lg:text-fs18">Year of experience</span>
        </div>
    </div>
  )
}

export default Counter