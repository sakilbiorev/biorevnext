// eslint-disable-next-line import/no-extraneous-dependencies
import parse from 'html-react-parser';

import type { TitleAndDescriptionData } from '@/libs/interfaces';

import SectionTitle from './elements/SectionTitle';

const TitleAndDescriptionSection = ({
  titleAndDescriptionData,
}: {
  titleAndDescriptionData: TitleAndDescriptionData;
}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-[68px] text-black-0">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          sectionTitleData={titleAndDescriptionData.TitleItem}
          isWhite={false}
        />
        <div className="max-w-[1174px] text-justify font-raleway text-black-2">
          <p>{parse(titleAndDescriptionData.Description)}</p>
        </div>
      </div>
    </section>
  );
};

export default TitleAndDescriptionSection;
