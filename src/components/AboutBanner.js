"use client";
import React from "react";
import { motion } from "framer-motion";
import Banner from "../assets/img/about/banner.png";
import Image from "next/image";
import Counter from "./Counter";

const AboutBanner = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <section className="bannerAbout pb-[30px] lg:pb-[80px]">
          <div className="container mx-auto">
            <div className="sectionTitle mb-[30px] lg:mb-[40px] text-center">
              <h2 className="font-monsterratB text-fs24 lg:text-fs36 text-primaryDark uppercase mb-[20px] lg:mb-[30px]">
                WE WORK FOR YOUR BEST, FULL HOME INTERIOR{" "}
              </h2>
              <p className="font-monsterratM text-fs16 lg:text-fs18 text-primaryDark">
                Our key line of operation is full home interiors. Our leading
                interior designers take a brief and understand your requirements
                and vision for your house. Basis those requirements we work on
                the designs and once the designs are locked, we get into
                execution. We are a one-stop solution provider when it comes to
                full home interior designing and particular room interior for
                partial home interior designing.
              </p>
            </div>
            <Image
              priority
              alt="Banner"
              src={Banner}
              className="aspect-w-16 aspect-h-9 block mx-auto"
            />
            <Counter />
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutBanner;
