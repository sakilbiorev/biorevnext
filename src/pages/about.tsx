import HeaderBannerSection from '@/components/HeaderBannerSection';
import ImageAndTextSection from '@/components/ImageAndTextSection';
import StatasticsSection from '@/components/StatasticsSection';
import { Meta } from '@/layouts/Meta';
import type { HeaderBanner } from '@/libs/interfaces';
import { Main } from '@/templates/Main';

const About = () => {
  const headerBannerData: HeaderBanner = {
    title: 'About Us',
    BgImgURL: '/images/HeaderBanner/banner2-aboutus.jpg',
  };
  return (
    <Main
      meta={
        <Meta
          title="About Us | Biorev Studios"
          description="[ About Company] Welcome To Biorev Biorev provides photo-realistic 3D Architectural Rendering and 3D Animations for the design/build industry, inventors, and product developers with the utmost focus on customer satisfaction. We stand behind our work and support our client’s technology needs unconditionally. Biorev has the track record of complete support, and service to take your [&hellip;]"
        />
      }
    >
      <HeaderBannerSection headerBannerData={headerBannerData} />
      <ImageAndTextSection />
      <StatasticsSection />
    </Main>
  );
};

export default About;
