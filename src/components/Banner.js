import Image from 'next/image'
import BannerImg from "../assets/img/banner.jpg";
import ScrollArrowDown from './ScrollArrowDown';

const Banner = () => {
  return (
    <div className="bannerContent h-auto relative">
        <Image src={BannerImg} alt=""/>
        <ScrollArrowDown/>
    </div>
  )
}

export default Banner