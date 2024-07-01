"use client";
import React, { useState } from "react";
import Cta from "@/components/Cta";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

import bannerContact from "../../assets/img/contact/bannercontact.jpeg";
import MainLayout from "@/layout/MainLayout";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    emailjs.send('service_6osxwlg', 'template_q9fj8ci', formData, 'a1u_zKxDNiJ_YgFY0')
      .then((response) => {
        toast.success('Email sent successfully!');
        setFormData({ from_name: '', from_email: '', from_phone: '', message: '' }); // Reset form after successful submission
      })
      .catch((error) => {
        toast.error('Failed to send email. Please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      
      return { ...prevState, [name]: value };
    });
  };

  const validateForm = () => {
    if (!formData.from_name.trim()) {
      toast.error('Name is required.');
      return false;
    }
    if (!formData.from_email.trim()) {
      toast.error('Email is required.');
      return false;
    }
    if (!formData.from_phone.trim()) {
      toast.error('Phone number is required.');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Message is required.');
      return false;
    }
    if (!/^\d{10}$/.test(formData.from_phone)) {
      toast.error('Phone number must be 10 digits.');
      return false;
    }
    return true;
  };

  return (
    <MainLayout>
    <div className="customContent py-[70px]">
      <div className="container mx-auto">
        <h2 className="text-fs24 lg:text-fs32 font-monsterratB text-primaryDark uppercase mb-[30px]">
          Contact
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 lg:mb-[80px]">
          <div className="w-full">
          <form onSubmit={sendEmail} className="max-w-full  w-full bg-lightgray p-6 rounded-[10px] shadow">
          <div className="mb-4">
          <label className="font-monsterratM text-fs14 lg:text-fs16" htmlFor="from_name">Name:</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="w-full shadow-black font-monsterratM text-fs14 lg:text-fs16 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-monsterratM text-fs14 lg:text-fs16" htmlFor="from_email">Email:</label>
          <input
            type="email"
            id='from_email'
            name='from_email'
            value={formData.from_email}
            onChange={handleChange}
            className="w-full shadow-black font-monsterratM text-fs14 lg:text-fs16 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-monsterratM text-fs14 lg:text-fs16" htmlFor="from_phone">Phone Number:</label>
          <input
            type="tel"
            id="from_phone"
            name="from_phone"
            value={formData.from_phone}
            onChange={handleChange}
            className="w-full shadow-black font-monsterratM text-fs14 lg:text-fs16 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-monsterratM text-fs14 lg:text-fs16" htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full shadow-black font-monsterratM text-fs14 lg:text-fs16 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
            <div className="mb-4">
              <Cta onClick={sendEmail} text="Send Message" type="submit" />
            </div>
          </form>
          <ToastContainer />
          </div>
          <div className="wallPaper h-full">
            <Image alt="Banner" priority src={bannerContact} className="aspect-w-16 aspect-h-9 h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default Contact;
