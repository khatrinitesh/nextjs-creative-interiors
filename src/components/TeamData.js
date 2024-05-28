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
              className={`overflow-hidden md:flex grow items-center cursor-pointer justify-center boxTeam transition-all duration-150 delay-150 hover:scale-110 md:hover:scale-125 nth-not-last md:!mb-0`}
            >
              <div className="thumbnail w-full md:w-[30%] me-[15px] md:me-[10px]">
                <Image
                  src={val.avatar}
                  alt={val.name}
                  className="grayscale mb-[10px] md:mb-0 mx-auto block imgTeam transition-all duration-500 delay-500 aspect-w-16 aspect-h-9 w-[100px] h-[100px] md:w-[50px] md:h-[50px] xl:w-[100px] object-cover xl:h-[100px] rounded-full"
                />
              </div>
              <div className="text-center md:text-start caption w-full">
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
