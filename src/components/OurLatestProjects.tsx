// eslint-disable-next-line import/no-extraneous-dependencies
import Image from 'next/image';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';

const OurLatestProjects = () => {
  const LatestImages = [
    {
      id: 1,
      src: '/images/Exterior-Rendering-11.jpg',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: '/images/GroundFloor01.jpg',
      alt: 'Image 2 ',
    },
    {
      id: 3,
      src: '/images/Interior-Rendering-6.jpg',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: '/images/Interior-Rendering-9.jpg',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: '/images/Interior-Rendering1.jpg',
      alt: 'Image 5',
    },
    {
      id: 6,
      src: '/images/BasementRecRoom01.jpg',
      alt: 'Image 6',
    },
  ];
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
        <hr className="bg-h-black mb-8 w-[66px] border-t-2 border-dotted border-white-0" />
      </div>
      <div className="container px-0 lg:px-24 ">
        <Slider {...settings}>
          {LatestImages.map((item) => (
            <div
              className="flex items-center justify-center px-2"
              key={item.id}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={300}
                className="img"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurLatestProjects;
