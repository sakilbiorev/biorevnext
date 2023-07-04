import Image from 'next/image';
import React from 'react';

const VisionMissionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#f4f4f4] px-5 py-[50px] xl:flex-row xl:gap-20 xl:py-[100px]">
      <div>
        <Image
          src="/images/vmv.png"
          alt="vision banner"
          width={716}
          height={611}
        />
      </div>
      <div>
        <div className="mb-[6px] font-josefin text-[14px] font-bold uppercase text-orange-0">
          [ Our Motto ]
        </div>
        <div className="pb-[10px] font-titillium text-[35px] text-black-3">
          Vision-Mission-Values
        </div>
        <hr className="mb-8 w-[66px] border-t-2 border-dotted border-orange-0 bg-white-0" />
        <div className="leading-7 text-[#555555]">
          <h3 className="mb-[20px] font-titillium text-[20px] font-normal uppercase text-black-3">
            Vision
          </h3>
          <ul className="mb-[20px] list-inside list-disc text-justify font-raleway text-[16px] leading-7">
            <li>One-stop solution for all our clients.</li>
            <li>Products for every service sector domain.</li>
            <li>Starting our own training center.</li>
            <li>Research and Development Centres.</li>
          </ul>
          <h3 className="mb-[20px] font-titillium text-[20px] font-normal uppercase text-black-3">
            Mission
          </h3>
          <p className="mb-[20px] text-[16px]">
            Giving the client a 5-star experience that stays in his <br />{' '}
            consciousness for a long time. We should be their first pick by{' '}
            <br /> choice of quality not by our low prices.
          </p>
          <h3 className="mb-[20px] font-titillium text-[20px] font-normal uppercase text-black-3">
            Values
          </h3>
          <ul className="mb-[20px] list-inside list-disc text-justify font-raleway text-[16px] leading-7">
            <li>Passion</li>
            <li>Courage</li>
            <li>Integrity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
