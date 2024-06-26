import React from "react";
import { teamData } from "@/constants/constants";
import Image from "next/image";

const Team = () => {
  return (
    <section className="bg-white py-[30px] lg:py-[80px]">
      <div className="container mx-auto">
        <h2 className="text-center mb-[30px] lg:mb-[50px] font-monsterratB text-primaryDark text-fs24 lg:text-fs36">
          Our Team
        </h2>
        <div className="flex flex-col md:flex-row w-full items-center justify-center">
          {teamData.map((val, index) => (
            <div
              key={index}
              className={`overflow-hidden md:flex  items-center cursor-pointer justify-center boxTeam transition-all duration-150 delay-150 hover:scale-110 md:hover:scale-125 nth-not-last md:!mb-0`}
            >
              <div className="thumbnail w-full md:w-[30%] me-[15px] md:me-[10px]">
                <Image priority
                  src={val.avatar}
                  alt={val.name}
                  className="grayscale mx-auto block imgTeam transition-all duration-500 delay-500 imgTeam object-cover rounded-full"
                />
              </div>
              <div className="text-center md:text-start caption md:w-[calc(100%-30%)]">
                <span className="font-monsterratM text-fs12 text-[#7d7d7d]">
                  {val.title}
                </span>
                <h3 className="font-monsterratB text-fs16 xl:text-fs24 text-primaryD">
                  {val.name}
                </h3>
                <span className="text-primaryDark font-monsterratR text-fs12">
                  {val.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
