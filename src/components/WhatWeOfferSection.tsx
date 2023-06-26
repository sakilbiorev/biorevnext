import Link from 'next/link';

import type { ThreeColumnBoxesProps } from '@/libs/interfaces';

import SectionTitle from './elements/SectionTitle';

const WhatWeOfferSection = ({
  whatWeOfferData,
}: {
  whatWeOfferData: ThreeColumnBoxesProps;
}) => {
  return (
    <section className="pt-[68px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="w-full">
          <SectionTitle sectionTitleData={whatWeOfferData.TitleItem} />
          <div className="flex flex-wrap justify-center pt-[50px]">
            {whatWeOfferData.items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mb-[60px] w-screen p-2  sm:w-full md:w-[100%] md:p-4 lg:w-2/6"
                >
                  <div
                    style={{ backgroundImage: `url(${item.BgImg})` }}
                    className="relative flex min-h-[160px] w-full  items-start justify-center bg-cover bg-center bg-no-repeat"
                  >
                    <div className="bottom-0 top-32 flex flex-col justify-center p-2 px-[60px] pb-[37px] pt-[50px] text-center leading-8">
                      <div className="flex min-h-[85px] items-start justify-center text-center">
                        <img
                          alt={item.Title}
                          src={item.Icon}
                          className="inline-flex"
                        />
                      </div>
                      <h5 className="mb-[15px] font-sans text-2xl font-normal">
                        {item.Title}
                      </h5>
                      <p className="mb-[20px] mt-0 leading-[30px]">
                        {item.Description}
                      </p>
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
