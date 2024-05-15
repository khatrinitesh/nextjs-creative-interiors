"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { testimonials } from '@/constants/constants'
import Slider from "react-slick";
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

   // Function to generate star icons based on rating
   const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      // If the current star is less than or equal to the rating, render a solid star, otherwise, render an empty star
      stars.push(<FontAwesomeIcon className='cursor-pointer text-rating' icon={i <= rating ? faStar : ['far', 'star']} key={i} />);
    }
    return stars;
  };
  return (
    <>
    <div className="testimonialsSlider slider-container">
      <Slider {...settings}>
      {testimonials.map((val,index) => (
        <div key={index} className="flex items-center justify-start bg-white p-[10px] xl:p-[30px]">
          <div className="sectionTitle mb-[15px]">
            <h3 className="headTitle text-fs28 font-monsterratB text-primaryDark mb-[15px]">{val.title}</h3>
            <p className="desc text-primaryDark font-monsterratR text-fs18">{val.desc}</p>
          </div>
          <div className="detail flex-col md:flex-row flex  items-center">
            <div className="leftDetail mb-[10px] sm:mb-[0] w-full sm:w-[60%] flex items-center">
              <div className="thumbnail w-[20%] me-2">
                <Image src={val.avatar} className="aspect-w-16 aspect-h-9 block mx-auto rounded-[50%]"/>
              </div>
              <div className="caption w-[calc(100%-20%)]">
                <h4 className="subtitle font-monsterratB text-primaryDark test-fs16">{val.subtitle}</h4>
                <p className="flex items-center">
                  <span className="iconMap me-2">
                    <Image src={val.icon} className="aspect-w-16 aspect-h-9 block mx-auto"/>
                  </span>
                  <span className="txtLoc text-fs14 lg:text-fs16 font-monsterratR text-primaryDark">{val.location}</span>
                </p>
              </div>
            </div>
            <div className="rightDetail w-full sm:w-[calc(100%-60%)]">
              <div className="ratingBlock flex justify-end">
                <span className="">{renderStarRating(val.rating)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      </Slider>
    </div>
    
    </>
  )
}

export default TestimonialsData
