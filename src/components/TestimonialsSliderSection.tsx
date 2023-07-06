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
    autoplay: false,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="my-[60px] py-12 text-center">
      <SectionTitle sectionTitleData={sectionTitleObj} isWhite={false} />
      <div className="mx-auto mt-[30px] max-w-[1200px] pt-[25px] max-lg:max-w-[970px]">
        <Slider {...settings} className="testiSlider">
          {testiData.map((item) => (
            <div key={item.id} className="px-[15px]">
              <div className="mt-[26px] pr-[20px]">
                <div className="relative mb-[50px] min-h-[440px] border-[1px] border-solid border-gray-6 bg-white-0 px-[25px] pb-[30px] pt-[35px] text-justify text-[15px] font-normal leading-[1.8em] text-black-5">
                  {item.description}
                  <span className="absolute left-[29px] top-[23px] z-[1] h-[45px] w-[80px] font-titillium text-[200px] text-black-3">
                    “
                  </span>
                  <span className="absolute left-[29px] top-[-1px] h-[1px] w-[80px] bg-white-0 " />
                  <span className="absolute left-[20px] top-[20px] z-[-1] h-full w-full bg-gray-8 transition-all duration-300 ease-linear" />
                </div>
                <div className="flex items-center px-2">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="mr-[25px] max-w-[80px] rounded-[50%]"
                  />
                  <div className="flex flex-col justify-start text-left">
                    <span className="text-[22px] font-normal leading-[1.4] text-black-3">
                      {item.name}
                    </span>
                    <span className="text-sm font-medium uppercase">
                      {item.designation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSliderSection;
