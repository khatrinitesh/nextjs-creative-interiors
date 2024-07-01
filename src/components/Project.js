"use client"
import Image from "next/image";
import ProjectThumb from "../assets/img/home/project.png";
import { projectData } from "@/constants/constants";
import Cta from "./Cta";
import {useRouter} from "next/navigation";

const Project = () => {
   

  const router = useRouter()
  

  const sendEmail  = () => {
    router.push('/contact')
  }
    
  return (
    <section className="projectContent  py-[30px] lg:py-[80px] bg-white">
      <div className="container mx-auto">
        <div className="grid gap-10 md:gap-20 lg:grid-cols-2 justify-center items-center">
          <div className="thumbnail flex justify-center items-center" >
            <Image priority alt="Project Thumb" src={ProjectThumb} className="aspect-w-16 aspect-h-9" />
          </div>
          <div className="projectRightContent">
            <div className="sectionTitle mb-[25px]">
              <h2 className="font-monsterratB mb-[10px] text-primaryDark text-fs24 lg:text-fs32 uppercase">
                {projectData.title}
              </h2>
              <p className="font-monsterratM text-primaryDark text-fs16 lg:text-fs18">
                {projectData.description}
              </p>
            </div>
            <div className="subscribeBlock h-[50px] md:h-[60px] max-w-full w-full rounded-[8px] mb-[60px] relative">
              <Cta
                text="get started"
                onClick={sendEmail} 
                btnStyle="relative top-[5px] md:top-[8px] right-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
