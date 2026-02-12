"use client";
import React from "react";
import ChooseData from "./ChooseData";
import { motion } from "framer-motion";

const WhyChoose = () => {
  return (
    <section className="chooseContent py-[30px] lg:py-[80px] bg-white">
      <div className="container mx-auto">
        <div className="sectionTitle flex flex-col  gap-5 justify-center items-center mb-[30px] lg:mb-[40px]">
          <h2 className="font-monsterratB mb-[10px] text-primaryDark text-fs24 lg:text-fs32">
            Why Choose Us
          </h2>
          <p>
            Our key line of operation is full home interiors. Our leading
            interior designers take a brief and understand your requirements and
            vision for your house. Basis those requirements we work on the
            designs and once the designs are locked, we get into execution. We
            are a one-stop solution provider when it comes to full home interior
            designing and particular room interior for partial home interior
            designing.
          </p>
          <p>
            We believe in transforming spaces into captivating environments that
            reflect your unique lifestyle and personality. With our passion for
            design and dedication to quality, we strive to exceed expectations
            and create lasting impressions. Let's collaborate to turn your
            vision into reality.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <ChooseData />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
