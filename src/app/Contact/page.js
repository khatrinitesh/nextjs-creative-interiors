"use client"
import React,{useState} from "react";
import Cta from "@/components/Cta";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import ToastContainerComponent from "@/components/ToastContainer";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // HANDLE CHANGE FILL FORM
  const handleChange = (e) => {
    // Allow only numeric input for mobile number
    if (e.target.name === 'mobile' && isNaN(e.target.value)) {
      return;
    }
  
    // Limit the length of mobile number to 10 characters
    if (e.target.name === 'mobile' && e.target.value.length !== 10) {
      setErrors({ ...errors, mobile: 'Mobile No. should contain exactly 10 digits' });
      return;
    } else {
      setErrors({ ...errors, mobile: '' });
    }
  
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
    // Add validation check here to display error messages as the user types
    const newErrors = { ...errors };
    if (e.target.name === 'name' && !e.target.value.trim()) {
      newErrors.name = 'Name is required';
    } else if (e.target.name === 'email' && !e.target.value.trim()) {
      newErrors.email = 'Email is required';
    } else if (e.target.name === 'email' && !/^\S+@\S+\.\S+$/.test(e.target.value)) {
      newErrors.email = 'Email is invalid';
    } else if (e.target.name === 'message' && !e.target.value.trim()) {
      newErrors.message = 'Message is required';
    } else {
      newErrors[e.target.name] = '';
    }
    setErrors(newErrors);
  };

  // VALIDATION FORM
  const validateForm = () => {
    const newErrors = {};
    // 1 - NAME
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    // 2 - EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    // 3 - MOBILE 
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile No. is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile No. should contain 10 digits";
    }
    // 4 - MESSAGE
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const sendEmail = (e) => {
    if (!validateForm()) {
      return;
    }
  
    console.log(formData); // Log the form data to check if it's correctly populated
  
    // Send the email
    emailjs
      .sendForm("service_60pxdoy", "template_52khocw", {message:formData?.message}, "a1u_zKxDNiJ_YgFY0")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
           // Reset the form data state
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
        },
        (error) => {
        }
      );
  
  };
  
 
  return (
    <div className="customContent">
       <ToastContainerComponent />
      <div className="container mx-auto">
        <h2 className="text-fs24 lg:text-fs32 font-monsterratB text-primaryDark uppercase mb-[30px]">Contact</h2>
        <div className="grid lg:grid-cols-2 gap-4">
        <form
          className="max-w-full lg:max-w-[600px] bg-lightgray p-6 rounded-[10px] shadow"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="message"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full shadow-black px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full shadow-black px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-bold mb-2"
            >
              Mobile No.
            </label>
            <input  maxLength={10}
              type="number"
              id="mobile"
              name="mobile"
              placeholder="Your Mobile No."
              value={formData.mobile}
              onChange={handleChange}
              className="w-full shadow-black px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full overflow-hidden resize-none shadow-black px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Cta onClick={sendEmail} text="Send Message" type="submit" />
          </div>
        </form>
        <div className="wallPaper">
          {/* <Image src="https://c1.wallpaperflare.com/preview/987/457/165/contact-us-contact-call-us-phone-email.jpg" className="aspect-w-16 aspect-h-9"/> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
