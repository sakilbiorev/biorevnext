import Link from 'next/link';

import type { HeaderBanner } from '@/libs/interfaces';

const BannerHeaderSection = ({
  headerBannerData,
}: {
  headerBannerData: HeaderBanner;
}) => {
  return (
    <section
      className="flex h-[500px] flex-col items-center justify-center gap-4 pt-[68px] text-black-0"
      style={{ backgroundImage: `url('${headerBannerData.BgImgURL}')` }}
    >
      <div>
        <div className="">
          <h1 className="font-titillium text-[60px] font-light text-white-0">
            {headerBannerData.title}
          </h1>
          <ul className="flex bg-center text-center font-titillium text-sm font-medium text-white-0">
            <li className="relative ml-[10px] pl-6 font-titillium uppercase">
              <Link href="/">HOME</Link>
            </li>
            <li className="uppercase">3D Rendering Services</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BannerHeaderSection;
