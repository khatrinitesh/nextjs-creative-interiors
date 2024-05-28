"use client"
// Import Swiper React components
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';// import required modules
import { Navigation ,EffectFade} from 'swiper/modules';
import BannerImg from "../assets/img/banner.jpg"

const BannerSlideShow = () => {
    
  return (
    <>
    <div className="slideShowBlock overflow-hidden">
    <Swiper navigation={true} modules={[Navigation,EffectFade]} className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

    >
      <SwiperSlide>
        <Image alt="Banner" src={BannerImg} className="aspect-w-16 aspect-h-9 w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="Banner" src={BannerImg} className="aspect-w-16 aspect-h-9 w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="Banner" src={BannerImg} className="aspect-w-16 aspect-h-9 w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="Banner" src={BannerImg} className="aspect-w-16 aspect-h-9 w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="Banner" src={BannerImg} className="aspect-w-16 aspect-h-9 w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="Banner" src={BannerImg} className="aspect-w-16 aspect-h-9 w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="Banner" src={BannerImg} className="aspect-w-16 aspect-h-9 w-full"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="Banner" src={BannerImg} className="aspect-w-16 aspect-h-9 w-full"/>
      </SwiperSlide>
    </Swiper>
    </div>
    </>
  )
}

export default BannerSlideShow