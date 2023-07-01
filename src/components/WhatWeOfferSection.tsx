import type { ThreeColumnBoxesProps } from '@/libs/interfaces';

import SectionTitle from './elements/SectionTitle';
import HomeIconBox from './HomeIconBox';

const WhatWeOfferSection = ({
  whatWeOfferData,
}: {
  whatWeOfferData: ThreeColumnBoxesProps;
}) => {
  return (
    <section className="pt-[68px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="w-full">
          <SectionTitle
            sectionTitleData={whatWeOfferData.TitleItem}
            isWhite={false}
          />
          <div className="flex flex-wrap justify-center pt-[50px]">
            {whatWeOfferData.items.map((item) => {
              return <HomeIconBox key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
