import HeaderBannerSection from '@/components/HeaderBannerSection';
import OurSpecializationSection from '@/components/OurSpecializationSection';
import { Meta } from '@/layouts/Meta';
import type { HeaderBanner } from '@/libs/interfaces';
import { Main } from '@/templates/Main';

const company = () => {
  const headerBannerData: HeaderBanner = {
    title: 'Company',
    BgImgURL: '/images/HeaderBanner/banner-company-page.jpg',
  };
  return (
    <Main
      meta={
        <Meta
          title="3D Rendering Company | 3D Rendering Animation - Biorev"
          description="Biorev 3d rendering company expertise in home design 3d, rendering 3d models, 3D Virtual Tour, 3D Rendering, 3D Floor Plans and many more."
        />
      }
    >
      <HeaderBannerSection headerBannerData={headerBannerData} />
      <OurSpecializationSection />
    </Main>
  );
};

export default company;
