import BannerHeaderSection from '@/components/BannerHeaderSection';
import ImageAndTextSection from '@/components/ImageAndTextSection';
import { Meta } from '@/layouts/Meta';
import type { HeaderBanner } from '@/libs/interfaces';
import { Main } from '@/templates/Main';

const About = () => {
  const headerBannerData: HeaderBanner = {
    title: 'About Us',
    BgImgURL: '/images/HeaderBanner/banner2-aboutus.jpg',
  };
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <BannerHeaderSection headerBannerData={headerBannerData} />
      <ImageAndTextSection />
    </Main>
  );
};

export default About;
