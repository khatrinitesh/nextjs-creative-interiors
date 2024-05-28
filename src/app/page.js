// COMPONENTS
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import Experience from "@/components/Experience";
import Explore from "@/components/Explore";
import Offer from "@/components/Offer";
import Project from "@/components/Project";
import Team from "@/components/TeamData";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="homeContent">
      <Banner/>
      <Experience/>
      <Explore/>
      <Offer/>
      <Blogs/>
      <Testimonials/>
      <Team/>
      <Project/>
    </div>
  );
}


