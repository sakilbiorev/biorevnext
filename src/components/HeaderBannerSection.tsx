import Link from 'next/link';

import type { HeaderBanner } from '@/libs/interfaces';

const HeaderBannerSection = ({
  headerBannerData,
}: {
  headerBannerData: HeaderBanner;
}) => {
  return (
    <section
      className="flex h-[500px] flex-col items-center justify-center gap-4 bg-cover bg-leftCenter bg-no-repeat pt-[68px] text-black-0 max-sm:h-[400px]"
      style={{ backgroundImage: `url('${headerBannerData.BgImgURL}')` }}
    >
      <div>
        <div className="">
          <h1 className="font-titillium text-[60px] font-light text-white-0 max-lg:text-[42px] max-sm:text-[32px]">
            {headerBannerData.title}
          </h1>
          <ul className="flex justify-center bg-center text-center font-titillium text-sm font-medium uppercase text-white-0">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li className="relative ml-[10px] pl-6 font-titillium before:absolute before:left-[-2px] before:top-[50%] before:translate-y-[-50%] before:font-josefin before:text-sm before:tracking-[4px] before:text-white-0 before:content-['••']">
              About Us
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeaderBannerSection;
