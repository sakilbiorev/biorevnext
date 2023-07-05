// eslint-disable-next-line import/no-extraneous-dependencies
import Image from 'next/image';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';

import TestimonialsSliderData from '@/libs/data/TestimonialsSliderData';
import type { SectionTitleData } from '@/libs/interfaces';

import SectionTitle from './elements/SectionTitle';

const sectionTitleObj: SectionTitleData = {
  SectionTitle: '[ TESTIMONIALS  ]',
  SectionMainTitle: 'What People Say About Biorev',
};

const TestimonialsSliderSection = () => {
  const testiData = TestimonialsSliderData;
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
    <div className="bg-[url('/images/bg1-home2.jpg')] py-12 text-center ">
      <SectionTitle sectionTitleData={sectionTitleObj} isWhite />
      <div className="mx-auto max-w-[1200px] pt-[25px]">
        <Slider {...settings}>
          {testiData.map((item) => (
            <div key={item.id}>
              <div className="mb-[50px] min-h-[440px] bg-white-0 px-[25px] pb-[30px] pt-[35px] text-justify text-[15px] font-normal leading-[1.8em] text-black-5">
                {item.description}
              </div>
              <div className="flex items-center px-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={150}
                  height={150}
                />
                <div className="flex flex-col">
                  <span className="text-[22px] font-normal leading-[1.4] text-black-3">
                    {item.name}
                  </span>
                  <span className="text-sm font-medium uppercase">
                    {item.designation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSliderSection;
