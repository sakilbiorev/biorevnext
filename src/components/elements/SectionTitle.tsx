// eslint-disable-next-line import/no-extraneous-dependencies

import type { SectionTitleData } from '@/libs/interfaces';

const SectionTitle = ({
  sectionTitleData,
}: {
  sectionTitleData: SectionTitleData;
}) => {
  return (
    <div className="relative flex w-full flex-col justify-center pb-5 text-center before:absolute before:bottom-[1px] before:left-[50%] before:h-[2px] before:w-[66px] before:translate-x-[-50%] before:border-b-2 before:border-dotted before:border-b-orange-0">
      <div className="mb-[6px] space-x-[0.5px] font-josefin text-[14px] font-bold uppercase text-orange-0">
        {sectionTitleData.SectionTitle}
      </div>
      <h2 className="font-titillium text-[40px] font-normal leading-[48px]">
        {sectionTitleData.SectionMainTitle}
      </h2>
    </div>
  );
};

export default SectionTitle;
