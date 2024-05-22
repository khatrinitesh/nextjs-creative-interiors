"use client"
import AboutBanner from "@/components/AboutBanner";
import AboutFeature from "@/components/AboutFeature";
import GetTouch from "@/components/GetTouch";
import WhyChoose from "@/components/WhyChoose";

import React from "react";

const About = () => {
  return (
    <div className="customContent">
      <AboutBanner/>
      <AboutFeature/>
      <WhyChoose/>
      <GetTouch/>
    </div>
  );
};

export default About;
