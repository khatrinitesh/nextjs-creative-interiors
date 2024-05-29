import Image from "next/image";
import React from "react";

const PortfolioItem = ({ item }) => {
    // Calculate the number of columns based on the number of images in the item
    const numColumns = Math.min(item.images.length, 4); // Max 3 columns
    const columnWidth = `w-${12 / numColumns}`;
  return (
    <>
      <div className={`grid grid-cols-${numColumns} gap-[30px]`}>
        {item.images.map((img, index) => (
           <div key={index} className={`overflow-hidden  flex justify-center ${columnWidth}`}>
          <Image
            key={index}
            src={img}
            alt={`${item.number}-${index}`}
            className="w-full h-auto object-cover transition-all duration-200 delay-200 hover:scale-110"
          />
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioItem;
