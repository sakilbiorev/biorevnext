import Link from 'next/link';
import { useState } from 'react';

import type { ThreeColumnBoxItem } from '@/libs/interfaces';

const HomeIconBox = ({ item }: { item: ThreeColumnBoxItem }) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const bgImg = hovered ? item.HoverBgImg : item.BgImg;
  return (
    <div
      key={item.id}
      className="mb-[60px] w-screen p-2  sm:w-full md:w-[100%] md:p-4 lg:w-2/6"
    >
      <div className="relative flex min-h-[160px] w-full  items-start justify-center bg-cover bg-center bg-no-repeat">
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="bottom-0 top-32 flex flex-col justify-center p-2 px-[60px] pb-[37px] pt-[50px] text-center leading-8 transition-all duration-300 ease-linear before:absolute before:bottom-[-10px] before:left-[10px] before:h-[1px] before:w-0 before:bg-black-3 before:transition-all before:duration-300 before:ease-linear before:content-[''] after:absolute after:right-[-11px] after:top-[10px] after:h-0 after:w-[1px] after:bg-black-3 after:transition-all after:duration-300 after:ease-linear after:content-[''] hover:before:w-[calc(100%+5px)] hover:before:transition-all hover:before:duration-300 hover:before:ease-linear hover:after:h-[calc(100%+5px)] hover:after:transition-all hover:after:duration-300 hover:after:ease-linear"
        >
          <div className="flex min-h-[85px] items-start justify-center text-center">
            <img alt={item.Title} src={item.Icon} className="inline-flex" />
          </div>
          <h5 className="mb-[15px] font-sans text-2xl font-normal">
            {item.Title}
          </h5>
          <p className="mb-[20px] mt-0 leading-[30px]">{item.Description}</p>
          <Link
            href={item.LinkUrl}
            className="font-titillium text-[13px] font-semibold uppercase text-black-0"
          >
            {item.LinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeIconBox;
