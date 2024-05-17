"use client"
import Image from "next/image";
import BlogsThumb from "../assets/img/blogs.png";
import { blogsData } from "@/constants/constants";
import Cta from "./Cta";


const Blogs = () => {
  return (
    <section className="blogsContent py-[30px] lg:py-[80px] bg-white">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 justify-center items-center">
          <div className="thumbnail flex justify-center items-center" >
            <Image src={BlogsThumb} className="aspect-w-16 aspect-h-9"  />
          </div>
          <div className="projectRightContent">
            <div className="flex mb-[20px]">
                <span className="txt me-[20px] font-monsterratB text-fs12 text-primaryDark">Getting Started</span>
                <span className="txtRead font-monsterratB text-fs12 text-txtgray">. 6 Min Read</span>
            </div>
            <div className="sectionTitle mb-[25px]">
              <h2 className="font-monsterratB mb-[20px] text-primaryDark text-fs24 lg:text-fs32">
                {blogsData.title}
              </h2>
              <p className="mb-[20px] font-monsterratR text-primaryDark text-fs16 lg:text-fs18">
                {blogsData.description}
              </p>
              <span className="txtDate font-monsterratB text-primaryDark text-fs12 block mb-[20px] ">Jan 8, 2024</span>
            </div>
            <Cta text="View Blogs" btnStyle="px-[50px]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
