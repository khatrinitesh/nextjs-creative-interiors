
import ScrollArrowDown from './ScrollArrowDown';
import BannerSlideShow from './BannerSlideShow';

const Banner = () => {
  return (
    <div className="bannerContent h-auto relative">
        <BannerSlideShow/>
        <ScrollArrowDown/>
    </div>
  )
}

export default Banner