"use client";
import Image from "next/image";
import React,{useState } from "react";
import Banner from "../../assets/img/portfolio/banner.jpg";
import { motion } from "framer-motion";
// import PortfolioFiltering from "@/components/PortfolioFiltering";
// import PortfolioGallery from "@/components/PortfolioGallery";
import { portfoliolist } from './../../constants/constants';
import FilterButtons from "@/components/FilterButtons";
import PortfolioNewGrid from "@/components/PortfolioNewGrid";

const Portfolio = () => {
 

  const [filter, setFilter] = useState('Residential design');
  const categories = ['Residential design', 'Office design', 'Commercial design'];
  const handleFilter = category => {
    setFilter(category);
  };

  const filteredItems = filter === 'all' ? portfoliolist : portfoliolist.filter(item => item.category === filter);
  return (
    <div className="customContent mb-[30px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="sectionTitle mb-[40px]">
            <h2 className="mb-[10px] text-fs20 lg:text-fs24 font-monsterratB text-[rgba(27,27,27,.5)]">
              Portfolio
            </h2>
            <h3 className="uppercase mb-[10px] text-fs24 lg:text-fs36 font-monsterratB text-primaryDark">
              An Idea changes everything
            </h3>
            <p className="text-[#4f4f4f] mb-[30px] text-fs16 lg:text-fs-18 font-monsterratM">
              Our key line of operation is full home interiors. Our leading
              interior designers take a brief and understand your requirements
              and vision for your house. Basis those requirements we work on the
              designs and once the designs are locked, we get into execution. We
              are a one-stop solution provider when it comes to full home
              interior designing and particular room interior for partial home
              interior designing.
            </p>
            <Image src={Banner} alt="Banner" className="aspect-w-16 aspect-h-9" />
          </div>
        <div class="portfolioFiltering overflow-hidden relative">
        <FilterButtons categories={categories} handleFilter={handleFilter}  activeCategory={filter}/>
        <PortfolioNewGrid items={filteredItems} />
          {/* <PortfolioFiltering  categorylist={categorylist} selectedCategory={selectedCategory} setFilter={handleSelectCategory}/>
          <PortfolioGallery items={portfoliolist} filter={selectedCategory} /> */}
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
