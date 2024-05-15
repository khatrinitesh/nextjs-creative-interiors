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

// PROJECT DATA 
export const projectData = {
  title: "LET'S TALK ABOUT YOUR PROJECT? ",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
}

// FOOTER CONTACT INFORMATION DATA
export const contactInfo = [
  { link:'tel:+919999999999',value: "+91 9999999999", icon: IconPhone },
  { link:'https://www.creativeinteriors.in/',value: "www.creativeinteriors.in", icon: IconSite },
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