"use client"
import AboutBanner from "@/components/AboutBanner";
import AboutFeature from "@/components/AboutFeature";
import GetTouch from "@/components/GetTouch";
import WhyChoose from "@/components/WhyChoose";
import MainLayout from "@/layout/MainLayout";

import React from "react";

const About = () => {
  return (
    <MainLayout>
    <div className="customContent py-[70px]">
      <AboutBanner/>
      <AboutFeature/>
      <WhyChoose/>
      <GetTouch/>
    </div>
    </MainLayout>
  );
};

export default About;
