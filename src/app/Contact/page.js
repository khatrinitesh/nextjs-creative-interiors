"use client";
import React, { useState } from "react";
import Cta from "@/components/Cta";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

import bannerContact from "../../assets/img/contact/bannercontact.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form after successful submission
      })
      .catch((error) => {
        toast.error('Failed to send email. Please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      if (name === 'phone') {
        const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
        if (numericValue.length > 10) {
          return prevState;
        }
        return { ...prevState, [name]: numericValue };
      }
      return { ...prevState, [name]: value };
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Name is required.');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Email is required.');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('Phone number is required.');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Message is required.');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error('Phone number must be 10 digits.');
      return false;
    }
    return true;
  };

  return (
    <div className="customContent mb-[30px] md:mb-0">
      <div className="container mx-auto">
        <h2 className="text-fs24 lg:text-fs32 font-monsterratB text-primaryDark uppercase mb-[30px]">
          Contact
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 lg:mb-[80px]">
          <div className="w-full">
          <form onSubmit={sendEmail} className="max-w-full  w-full bg-lightgray p-6 rounded-[10px] shadow">
          <div className="mb-4">
          <label className="font-monsterratM text-fs14 lg:text-fs16" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full shadow-black font-monsterratM text-fs14 lg:text-fs16 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-monsterratM text-fs14 lg:text-fs16" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full shadow-black font-monsterratM text-fs14 lg:text-fs16 px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-monsterratM text-fs14 lg:text-fs16" htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
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
            <Image src={bannerContact} className="aspect-w-16 aspect-h-9 h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
