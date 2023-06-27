// eslint-disable-next-line import/no-extraneous-dependencies
import Image from 'next/image';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';

import HomeLatestProjectData from '@/libs/data/HomeLatestProjectData';
import type { SectionTitleData } from '@/libs/interfaces';

import SectionTitle from './elements/SectionTitle';

const sectionTitleObj: SectionTitleData = {
  SectionTitle: '[ OUR PORTFOLIO ]',
  SectionMainTitle: 'Our Latest Projects',
};

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
    <div className="bg-[url('/images/bg1-home2.jpg')] py-12 text-center ">
      <SectionTitle sectionTitleData={sectionTitleObj} isWhite />
      <div className="container px-0 pt-[25px] lg:px-24">
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
