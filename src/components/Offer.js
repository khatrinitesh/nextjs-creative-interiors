"use client"
import Image from "next/image";
import OfferThumb from "../assets/img/offer.png"
import OfferData from "./OfferData";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

const Offer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="py-[30px] lg:py-[80px] dark:bg-primaryDarkGradient bg-secondaryDarkGradient">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2">
            <div data-aos="fade-up" data-aos-duration="1500"  className="OfferContent xl:pe-[100px] mb-[30px] xl:mb-0">
                <div className="sectionTitle mb-[50px]">
                    <h2 className="text-fs24 lg:text-fs36 font-monsterratB dark:text-white text-primaryDark mb-[20px]">INTERIOR DESIGN SERVICES WE OFFER</h2>
                    <p className="text-fs14 lg:text-fs16 font-monsterratR dark:text-white text-primaryDark">At <Link href='https://creativeinteriors.in/' target="_blank" className="font-monsterratB">Creative Interior</Link>, we specialize in creating bespoke interiors that reflect your lifestyle and vision. Our comprehensive interior design services cover every aspect of transforming your space into a personalized haven. Whether you're looking to refresh a single room or undertake a full home renovation, we're here to bring your dreams to life.</p>
                </div>
                <div className="grid w-full gap-10 sm:grid-cols-2  grid-rows-2">
                    <OfferData/>
                </div>
            </div>
            <div className="thumbnail" data-aos-duration="1500" data-aos="flip-up">
                <Image src={OfferThumb}className="mx-auto block"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
