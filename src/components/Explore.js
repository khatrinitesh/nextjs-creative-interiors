"use client";
import { useState } from "react";
import ExploreThumb from "../assets/img/home/explore1.png";
import ExploreThumb2 from "../assets/img/home/explore2.png";
import ExploreThumb3 from "../assets/img/home/explore3.png";
import Image from "next/image";
import Cta from "./Cta";
import { useRouter } from "next/navigation";

const Explore = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const getActiveClass = (tabIndex, defaultClass) => {
    return activeTab === tabIndex ? defaultClass : "";
  };

  const router = useRouter();

  const btnNext = () => {
    router.push("/portfolio");
  };
  return (
    <section className="tabbedContent bg-white py-[30px] lg:py-[80px]">
      <div className="container mx-auto">
        <div className="grid gap-20 xl:grid-cols-2">
          <div className="tabContentLeft">
            <div className={`content ${getActiveClass(1, "active-content")}`}>
              <Image
                alt="Explore Thumb"
                priority
                src={ExploreThumb}
                className="aspect-w-16 aspect-h-9 mx-auto block h-[300px] lg:h-[480px] xl:h-[580px] object-scale-down w-full"
              />
            </div>
            <div className={`content ${getActiveClass(2, "active-content")}`}>
              <Image
                alt="Explore Thumb"
                priority
                src={ExploreThumb2}
                className="aspect-w-16 aspect-h-9 mx-auto block h-[300px] lg:h-[480px] xl:h-[580px] object-scale-down w-full"
              />
            </div>
            <div className={`content ${getActiveClass(3, "active-content")}`}>
              <Image
                alt="Explore Thumb"
                priority
                src={ExploreThumb3}
                className="aspect-w-16 aspect-h-9 mx-auto block h-[300px] lg:h-[480px] xl:h-[580px] object-scale-down w-full"
              />
            </div>
          </div>
          <div className="tabContentRight">
            <div className="sliderTabs relative">
              <ul className="tab-list justify-center mb-[30px] leading-[50px] lg:mb-[50px]  rounded-[50px] bg-primaryDark overflow-hidden ">
                <li
                  className={`cursor-pointer border-0 tabs px-[10px] outline-none transition-all duration-50 text-center m-[2px] lg:px-[30px] grow font-monsterratB text-fs14 lg:text-fs16 text-white overflow-hidden ${getActiveClass(1, "active-tabs !bg-lightgray !text-primaryDark border border-lightgray rounded-[50px]")}`}
                  onClick={() => toggleTab(1)}
                >
                  Residential design
                </li>
                <li
                  className={`cursor-pointer  border-0 tabs px-[10px] outline-none transition-all duration-50  text-center m-[2px] lg:px-[30px] grow font-monsterratB text-fs14 lg:text-fs16 text-white overflow-hidden ${getActiveClass(2, "active-tabs !bg-lightgray rounded-[50px] !text-primaryDark ")}`}
                  onClick={() => toggleTab(2)}
                >
                  Office design
                </li>
                <li
                  className={`cursor-pointer  border-0 tabs px-[10px] outline-none transition-all duration-50  text-center relative left-[1px] m-[2px] lg:px-[30px] grow font-monsterratB  text-fs14 lg:text-fs16 text-white overflow-hidden ${getActiveClass(3, "active-tabs !bg-lightgray rounded-[50px] !text-primaryDark")}`}
                  onClick={() => toggleTab(3)}
                >
                  Commercial space
                </li>
              </ul>
            </div>
            <div className={`content ${getActiveClass(1, "active-content")}`}>
              <div className="sectionTitle">
                <h2 className="mb-[10px] font-monsterratB text-fs24 lg:text-fs36 text-primaryDark">
                  Your Home Redefined
                </h2>
                <p className="mb-[20px] font-monsterratR text-fs16 lg:text-fs18 text-primaryDark">
                  Our residential interior designs are crafted with meticulous
                  attention to detail, reflecting a passion for creating spaces
                  that inspire and rejuvenate.
                </p>
                <Cta onClick={btnNext} text="Explore" btnStyle="px-[50px]" />
              </div>
            </div>
            <div className={`content ${getActiveClass(2, "active-content")}`}>
              <div className="sectionTitle">
                <h2 className="mb-[10px] font-monsterratB text-fs24 lg:text-fs36 text-primaryDark">
                  Designing the Perfect Office
                </h2>
                <p className="mb-[20px] font-monsterratR text-fs16 lg:text-fs18 text-primaryDark">
                  Office design plays a crucial role in enhancing productivity,
                  creativity, and employee well-being. A well-designed office
                  not only fosters a positive work environment but also reflects
                  the company’s culture and values.
                </p>
                <Cta onClick={btnNext} text="Explore" btnStyle="px-[50px]" />
              </div>
            </div>
            <div className={`content ${getActiveClass(3, "active-content")}`}>
              <div className="sectionTitle">
                <h2 className="mb-[10px] font-monsterratB text-fs24 lg:text-fs36 text-primaryDark">
                  Commercial Spaces Reimagined
                </h2>
                <p className="mb-[20px] font-monsterratR text-fs16 lg:text-fs18 text-primaryDark">
                  Commercial interior design is essential for creating spaces
                  that are not only functional but also aesthetically pleasing.
                  The design of a commercial space can significantly impact
                  customer experience, employee productivity, and overall
                  business success.
                </p>
                <Cta onClick={btnNext} text="Explore" btnStyle="px-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Explore;
