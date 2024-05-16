"use client"
import { useState, useEffect } from "react";
import { menuSidebar } from "../constants/constants";

const Sidebar = () => {
  const [btnToggle, setBtnToggle] = useState(false);

  const handleToggle = () => {
    setBtnToggle(!btnToggle);
  };

   // Function to handle navigation link click
   const handleNavClick = () => {
    // Close the sidebar when a navigation link is clicked
    setBtnToggle(false);
  };

  if (btnToggle) {
    // Add overflow-hidden class to the body element
    document.body.classList.add('overflow-hidden');
  } else {
    // Remove overflow-hidden class from the body element
    document.body.classList.remove('overflow-hidden');
  }
  
  return (
    <>
      <button
        onClick={handleToggle}
        className={`transition-all rounded-[3px] duration-300 btnHamburger bg-[#dc2626] border-4 border-black w-[35px] px-[3px] h-[35px] absolute top-[50%] translate-y-[-50%] outline-none right-[30px] active:bg-gray-700 z-[99999]  ${
          btnToggle ? "active" : ""
        }`}
      >
        <span className="line transition-all duration-300  w-full h-[2px] rounded-[3px] bg-white  block relative top-[-5px]"></span>
        <span className="line transition-all duration-300  w-full h-[2px] rounded-[3px] bg-white  block relative top-[0px]"></span>
        <span className="line transition-all duration-300  w-full h-[2px] rounded-[3px] bg-white  block top-[5px] relative"></span>
      </button>
        <div
          className={`sidebar dark:bg-primaryDark bg-secondaryDark z-[9999] flex items-center justify-center transition-all duration-500  h-screen fixed  right-0 w-full  ${btnToggle ? "dark:bg-primaryDark !top-0 ": " top-[-200vh]"
          }`}
        >
          <ul className="w-full flex-col flex justify-center items-center ">
            {menuSidebar.map((section) => (
              <li key={section.id} className="group pl-6">
                <a
                  activeclassname="active"
                  className={`font-raleway text-fs16 font-semibold uppercase cursor-pointer py-[5px] block ${section.color}`}
                  href={section.href} onClick={handleNavClick}
                >
                  <span className="pt-0.5 dark:!text-white !text-primaryDark">{section.text}</span>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-hovergreen bg-defaultgreen"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
    </>
  );
};

export default Sidebar;