import Link from 'next/link'
import React from 'react'

const FilterButtons = ({categories, handleFilter,activeCategory  }) => {
  return (
    <>
    <ul className="filter-buttons portfolioNav z-[9] relative bg-primaryDark  max-w-[600px] rounded-[50px] text-center mx-auto flex items-center justify-center  p-[5px]">
      
      {categories.map(category => (
        <li key={category} className="list-none w-full">
          <Link href="javascript:void(0)" onClick={() => handleFilter(category)} className={`overflow-hidden text-fs14 lg:text-fs16 h-[40px] lg:h-[50px] flex items-center justify-center cursor-pointer font-monsterratB rounded-[50px] px-3 transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-lightgray text-primaryDark'
                  : 'text-white'
              }`}>{category}</Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default FilterButtons