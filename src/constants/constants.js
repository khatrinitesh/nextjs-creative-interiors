import IconFb from "../assets/img/iconfb.svg";
import IconTw from "../assets/img/icontw.svg";
import IconIn from "../assets/img/iconin.svg";
import IconPhone from "../assets/img/iconphone.svg";
import IconSite from "../assets/img/iconsite.svg";
import IconAddress from "../assets/img/iconmap.svg";
import IconLight from "../assets/img/iconlight.svg";
import IconRepair from "../assets/img/iconrepair.svg";
import IconSupport from "../assets/img/iconsupport.svg";
import IconFurniture from "../assets/img/iconfurniture.svg";
import Experience1 from "../assets/img/experience1.png";
import Experience2 from "../assets/img/experience2.png";
import Experience3 from "../assets/img/experience3.png";
import Avatar from "../assets/img/avatar.png";
import Story from "../assets/img/about/ourstory.png";
import Approach from "../assets/img/about/ourapproach.png";
import Philosophy from "../assets/img/about/ourphiliosphy.png";
import IconExpertise from "../assets/img/about/icon-expertise.svg";
import IconAttention from "../assets/img/about/icon-attention.svg";
import IconCustomer from "../assets/img/about/icon-customer.svg";

export const dataChoose = [
  {
    icon:IconExpertise,
    title:"EXPERTISE",
    desc:"With years of experience in the industry, our team of skilled designers possesses the expertise and knowledge to bring your vision to life."
  },
  {
    icon:IconAttention,
    title:"ATTENTION TO DETAIL",
    desc:"We believe that it's the little details that make a big difference. From handpicked fabrics to custom-made furniture, we pay meticulous attention to every aspect of the design process."
  },
  {
    icon:IconCustomer,
    title:"CUSTOMER SATISFACTION",
    desc:"Our commitment to customer satisfaction is unwavering. We strive to exceed expectations with every project, ensuring a seamless and enjoyable experience for our clients."
  },
]

// ABOUT FEATURE 
export const aboutStoryApproach = [
  {
    title: "Our Story",
    desc: "Founded with a vision to redefine interior design through the lens of Indian heritage. What began as a humble endeavor to celebrate the beauty of Indian craftsmanship has blossomed into a trusted name synonymous with creativity, quality, and unparalleled design expertise.",
    thumbnail: Story
  },
  {
    title: "Our Approach",
    desc: "Every project we undertake at CREATIVE INTERIORS is a testament to our dedication to excellence. Our collaborative approach ensures that each design is tailor-made to reflect the unique personality and lifestyle of our clients.",
    thumbnail: Approach
  },
];

export const aboutPilosophy = [
  {
  title: "Our Philosophy",
  desc: "At the heart of our philosophy lies a deep reverence for tradition, coupled with an unwavering commitment to innovation. We believe in honoring the heritage of Indian design while embracing the possibilities of modernity, resulting in spaces that are both timeless and contemporary.",
  thumbnail: Philosophy
}
]


// MENU Sidebar
export const menuSidebar = [
  { id: 1, href: '/',color:'text-white', text: 'Home' },
  { id: 2, href: '/about',color:'text-white', text: 'About' },
  { id: 3, href: '/services',color:'text-white', text: 'Services' },
  { id: 4, href: '/contact',color:'text-white', text: 'Contact' }
];

// TESTIMONIALS DATA 
export const testimonials = [
  {
    title: "Great Experience",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: Avatar,
    subtitle: "CEO, Company ABC",
    icon: IconAddress,
    location: "New York, USA",
    rating: 3
  },
  {
    title: "Highly Recommended",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: Avatar,
    subtitle: "Marketing Director, Company XYZ",
    icon: IconAddress,
    location: "Los Angeles, USA",
    rating: 4
  },
  {
    title: "Great Experience",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: Avatar,
    subtitle: "CEO, Company ABC",
    icon: IconAddress,
    location: "New York, USA",
    rating: 5
  },
  {
    title: "Highly Recommended",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: Avatar,
    subtitle: "Marketing Director, Company XYZ",
    icon: IconAddress,
    location: "Los Angeles, USA",
    rating: 4
  },
  {
    title: "Great Experience",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: Avatar,
    subtitle: "CEO, Company ABC",
    icon: IconAddress,
    location: "New York, USA",
    rating: 2
  },
  {
    title: "Highly Recommended",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: Avatar,
    subtitle: "Marketing Director, Company XYZ",
    icon: IconAddress,
    location: "Los Angeles, USA",
    rating: 1
  },
]

// EXPERIENCE DATA
export const experienceData = [
  {
    icon: Experience1,
    title: "Icon 1",
  },
  {
    icon: Experience2,
    title: "Icon 2",
  },
  {
    icon: Experience3,
    title: "Icon 3",
  },
];

// OFFER DATA 
export const offerData = [
  {
    icon: IconLight,
    title: "Consultation & Concept Development",
    description: "Our designers work closely with you to develop a concept that aligns with your vision, lifestyle, and budget.",
  },
  {
    icon: IconRepair,
    title: "Customized Design Solutions",
    description: "From custom furniture and fixtures to unique decor pieces, we ensure every element reflects your style and enhances the overall ambiance.",
  },
  {
    icon: IconFurniture,
    title: "Furniture & Lighting Selection",
    description: "We source from reputable suppliers and artisans to provide you with options that combine style, comfort, and functionality.",
  },
  {
    icon: IconSupport,
    title: "Post-Installation Support",
    description: "We offer post-installation support and guidance to ensure that your newly designed space continues to inspire and delight.",
  },
];

// BLOGS DATA
export const blogsData = {
  title: '"Transforming Spaces : The Art of Interior Design"',
  description: "Welcome to the world of interior design, where creativity meets functionality to transform ordinary spaces into extraordinary ones. In this blog, we'll delve into the essential aspects of interior design and explore how it can elevate your living environment.",
}

// GET IN TOUCH DATA 
export const getTouchData = {
  title: "GET IN TOUCH",
  description: "Whether you're looking to revitalize your home, office, or commercial space, we're here to help.",
}

// PROJECT DATA 
export const projectData = {
  title: "LET'S TALK ABOUT YOUR PROJECT? ",
  description: "Whether you're looking to revitalize your home, office, or commercial space, we're here to help.",
}

// FOOTER CONTACT INFORMATION DATA
export const contactInfo = [
  { link:'tel:+919967408087',value: "+91-9967408087", icon: IconPhone },
  { link:'mailto:creativeinteriors.06@gmail.com',value: "creativeinteriors.06@gmail.com", icon: IconSite },
  { link:'https://maps.app.goo.gl/9yhQbrcufZGGrkb49',value: "Cello Triumph, B wing, unit.406, IB Patel road, Goregaon, Mumbai", icon: IconAddress },
];

// FOOTER NAV LINKS 
export const footerNavLinks = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Services", url: "/services" },
  { text: "Contact", url: "/contact" },
  { text: "Portfolio", url: "/portfolio" },
  { text: "Blog", url: "/blog" },
];

// SOCIAL MEDIA
export const socialMediaLinks = [
  {  image: IconFb, link: 'https://www.facebook.com/' },
  { image: IconIn, link: 'https://www.instagram.com/' },
  { image: IconTw, link: 'https://twitter.com/' },
];