import Image from 'next/image'
import React from 'react'

const PortfolioNewItem = ({category, image}) => {
  return (
    <>
    <div className="portfolio-item overflow-hidden">
      <Image  priority src={image} alt={category} className="transition-all duration-200 delay-200 hover:scale-150 cursor-pointer" />
    </div>
    </>
  )
}

export default PortfolioNewItem