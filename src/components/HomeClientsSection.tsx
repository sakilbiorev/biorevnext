import Image from 'next/image';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';

import HomeClientsData from '@/libs/data/HomeClientsData';

const HomeClientsSection = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    swipeToSlide: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-orange-0 py-5 text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 font-titillium text-[24px] text-[#F3EDED] md:text-[30px] lg:text-[40px]">
          Some of the best clients we have worked with
        </div>
      </div>
      <div className="container px-0">
        <Slider {...settings}>
          {HomeClientsData.map((item) => (
            <div
              className="mb-8 flex items-center justify-center px-2"
              key={item.id}
            >
              <Image src={item.src} alt={item.alt} width={250} height={100} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeClientsSection;
