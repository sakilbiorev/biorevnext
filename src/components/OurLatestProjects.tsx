// eslint-disable-next-line import/no-extraneous-dependencies
import Image from 'next/image';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';

import HomeLatestProjectData from '@/libs/data/HomeLatestProjectData';

const OurLatestProjects = () => {
  const LatestImages = HomeLatestProjectData;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[url('/images/bg1-home2.jpg')] py-12 text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="font-josefin text-[14px] font-bold text-orange-0">
          [ OUR PORTFOLIO ]
        </div>
        <div className="font-titillium text-[40px] font-thin text-[#F3EDED]">
          Our Latest Projects
        </div>
        <hr className="mb-8 w-[66px] border-t-2 border-dotted border-white-0 bg-black-3" />
      </div>
      <div className="container px-0 lg:px-24 ">
        <Slider {...settings}>
          {LatestImages.map((item) => (
            <div
              className="flex items-center justify-center px-2"
              key={item.id}
            >
              <Image src={item.src} alt={item.alt} width={500} height={300} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurLatestProjects;
