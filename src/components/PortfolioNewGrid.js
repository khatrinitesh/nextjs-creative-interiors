
"use client"
import React,{useState } from 'react'
import Masonry from 'react-masonry-css';
import PortfolioNewItem from './PortfolioNewItem';

const PortfolioNewGrid = ({items }) => {

  const [itemsToShow, setItemsToShow] = useState(6); // Initial number of items to show
  const [loading, setLoading] = useState(false);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setItemsToShow(itemsToShow + 6); // Load 6 more items
      setLoading(false);
    }, 500); // Simulate a loading delay
  };

  // Flatten the items array to simplify loading more images
  const flattenedItems = items.flatMap(item =>
    item.images.map((image, index) => ({
      ...item,
      image,
      uniqueKey: `${item.id}_${index}`
    }))
  );
  
  return (
    <>
   <div className="mt-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {flattenedItems.slice(0, itemsToShow).map(item => (
          <PortfolioNewItem
            key={item.uniqueKey}
            title={`Item ${item.id}`} // Assuming title should be "Item {id}"
            category={item.category}
            image={item.image}
          />
        ))}
      </Masonry>
      {itemsToShow < flattenedItems.length && (
        <div className="flex items-center justify-center">
          <button
            onClick={handleLoadMore}
            className="bg-primaryDark text-fs14 font-monsterratB lg:text-fs16 text-white px-6 py-3 rounded-[10px] shadow-btnLoading hover:bg-primaryDarker"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
    </>
  )
}

export default PortfolioNewGrid