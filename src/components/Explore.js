"use client";
import { useState } from "react";
import ExploreThumb from "../assets/img/explore.png"
import ExploreThumb2 from "../assets/img/explore2.jpg"
import ExploreThumb3 from "../assets/img/explore3.jpg"
import Image from "next/image";
import Cta from "./Cta";

const Explore = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const getActiveClass = (tabIndex, defaultClass) => {
    return activeTab === tabIndex ? defaultClass : '';
  };
  return (
    <section className="tabbedContent bg-white py-[30px] lg:py-[80px]">
        <div className="container mx-auto">
            <div className="grid gap-20 xl:grid-cols-2">
                <div className="tabContentLeft">
                    <div className={`content ${getActiveClass(1, "active-content" )}`}>
                        <Image src={ExploreThumb} className="aspect-w-16 aspect-h-9 mx-auto block" />
                    </div>
                    <div className={`content ${getActiveClass(2, "active-content" )}`}>
                        <Image src={ExploreThumb2} className="aspect-w-16 aspect-h-9 mx-auto block" />
                    </div>
                    <div className={`content ${getActiveClass(3, "active-content" )}`}>
                        <Image src={ExploreThumb3} className="aspect-w-16 aspect-h-9 mx-auto block" />
                    </div>
                    
                </div>
                <div className="tabContentRight">
                    <div className="sliderTabs relative">
                        <ul className="tab-list mb-[50px]  rounded-[50px] bg-primaryDark overflow-hidden ">
                            <li className={`tabs px-[10px] text-center m-[2px] lg:text-start lg:px-[30px] py-[20px] grow font-monsterratB text-fs14 lg:text-fs16 text-white overflow-hidden ${getActiveClass( 1, "active-tabs !bg-lightgray !text-primaryDark border border-lightgray rounded-[50px]" )}`} onClick={()=> toggleTab(1)}
                                >
                                Residential design
                            </li>
                            <li className={`tabs px-[10px] text-center m-[2px] lg:text-start lg:px-[30px] py-[20px] grow font-monsterratB text-fs14 lg:text-fs16 text-white overflow-hidden ${getActiveClass( 2, "active-tabs !bg-lightgray rounded-[50px] !text-primaryDark " )}`} onClick={()=> toggleTab(2)}
                                >
                                Office design
                            </li>
                            <li className={`tabs px-[10px] text-center relative left-[1px] m-[2px] lg:text-start lg:px-[30px] py-[20px] grow font-monsterratB  text-fs14 lg:text-fs16 text-white overflow-hidden ${getActiveClass( 3, "active-tabs !bg-lightgray rounded-[50px] !text-primaryDark" )}`} onClick={()=> toggleTab(3)}
                                >
                                2d & 3d Floor design
                            </li>
                        </ul>
                    </div>
                    <div className={`content ${getActiveClass(1, "active-content" )}`}>
                        <div className="sectionTitle">
                            <h2 className="mb-[10px] font-monsterratB text-fs24 lg:text-fs36 text-primaryDark">Your Home Redefined</h2>
                            <p className="mb-[20px] font-monsterratR text-fs16 lg:text-fs18 text-primaryDark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <Cta text="Explore" btnStyle="px-[50px]"/>
                        </div>
                    </div>
                    <div className={`content ${getActiveClass(2, "active-content" )}`}>
                    <div className="sectionTitle">
                            <h2 className="mb-[10px] font-monsterratB text-fs24 lg:text-fs36 text-primaryDark">Office Design</h2>
                            <p className="mb-[20px] font-monsterratR text-fs16 lg:text-fs18 text-primaryDark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <Cta text="Explore" btnStyle="px-[50px]"/>
                        </div>
                    </div>
                    <div className={`content ${getActiveClass(3, "active-content" )}`}>
                    <div className="sectionTitle">
                            <h2 className="mb-[10px] font-monsterratB text-fs24 lg:text-fs36 text-primaryDark">Floor Design</h2>
                            <p className="mb-[20px] font-monsterratR text-fs16 lg:text-fs18 text-primaryDark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <Cta text="Explore" btnStyle="px-[50px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
export default Explore;
