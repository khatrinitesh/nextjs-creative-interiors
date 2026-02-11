import { dataChoose } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const ChooseData = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-[20px] text-center">
      {dataChoose.map((val, index) => (
        <div key={index} className="bg-primaryDark p-[30px]">
          <div className="icon flex justify-center items-center">
            <Image
              priority
              src={val.icon}
              className={`logoDefaultWhite  mx-2 mb-2`}
              width={38}
              height={38}
              alt={val.title}
            />{" "}
            {/* Assuming width and height */}
          </div>
          <h3 className="text-white text-fs20 lg:text-fs24 font-monsterratB mb-4">
            {val.title}
          </h3>
          <p className="text-white text-fs16 lg:text-fs18 font-monsterratM">
            {val.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChooseData;
