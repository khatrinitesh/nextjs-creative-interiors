"use client";
// Import Swiper React components
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // import required modules
import { Navigation, EffectFade } from "swiper/modules";
import BannerImg1 from "../assets/img/home/banner1.png";
import BannerImg2 from "../assets/img/home/banner2.png";
import BannerImg3 from "../assets/img/home/banner3.png";
import BannerSection from "./BannerSection";

const BannerSlideShow = () => {
  return (
    <>
      <div className="slideShowBlock overflow-hidden relative z-[2]">
        <Swiper
          navigation={true}
          modules={[Navigation, EffectFade]}
          className="mySwiper"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* 1 */}
          <SwiperSlide>
            <Image
              alt="Banner"
              src={BannerImg1}
              className="aspect-w-16 aspect-h-9 w-full"
            />
            <BannerSection title="The Ultimate Guide to Home Interior Design" />
          </SwiperSlide>
          {/* 2 */}
          <SwiperSlide>
            <Image
              alt="Banner"
              src={BannerImg2}
              className="aspect-w-16 aspect-h-9 w-full"
            />
            <BannerSection title="Stylish Spaces for Inspired Living" />
          </SwiperSlide>
          {/* 3 */}
          <SwiperSlide>
            <Image
              alt="Banner"
              src={BannerImg3}
              className="aspect-w-16 aspect-h-9 w-full"
            />
            <BannerSection title="Crafting Your Ideal Space with Delight" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BannerSlideShow;
