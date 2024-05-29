import React from 'react';
import Link from "next/link";

const PortfolioFiltering = ({ categorylist,selectedCategory, setFilter }) => {
 
  return (
    <>
      <ul className="portfolioNav relative bg-primaryDark  max-w-[600px] rounded-[50px] text-center mx-auto flex items-center justify-center  p-[5px]">
      {categorylist.map((types) => (
        <li key={types.category} className="list-none w-full">
          <Link
            href="javascript:void(0)"
            onClick={() => setFilter(types.category)}
            className={`overflow-hidden h-[50px] flex items-center justify-center cursor-pointer text-white font-monsterratB rounded-[50px] text-fs14 lg:text-fs16  px-3 transition-colors duration-300 ${selectedCategory === types.category ? 'bg-lightgray !text-primaryDark' : ''}`}
          >
            {types.category}
          </Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default PortfolioFiltering