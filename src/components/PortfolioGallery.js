import React from 'react';
import PortfolioItem from "./PortfolioItem";

const PortfolioGallery = ({ items, filter }) => {
    const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
    {filteredItems.map((item) => (
      <PortfolioItem key={item.id} item={item} />
    ))}
  </div>
  )
}

export default PortfolioGallery