import { useRouter } from 'next/router';

import TitleAndDescriptionSection from '@/components/TitleAndDescriptionSection';
import WhatWeOfferSection from '@/components/WhatWeOfferSection';
import { Meta } from '@/layouts/Meta';
import type {
  ThreeColumnBoxesProps,
  TitleAndDescriptionData,
} from '@/libs/interfaces';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  const whatWeOfferData: ThreeColumnBoxesProps = {
    TitleItem: {
      SectionTitle: '[ Our services ]',
      SectionMainTitle: 'What We Offer',
    },
    items: [
      {
        id: 1,
        Title: '3D Rendering',
        Icon: 'https://biorev.com/wp-content/uploads/2020/05/iconbox1.2.png',
        BgImg: 'https://biorev.com/wp-content/uploads/2020/10/bg-iconbox1.jpg',
        Description:
          'We are a team of highly-skilled professionals with over 6 years of experience in construction and 3D Architectural Rendering in.....',
        LinkUrl: 'https://biorev.com/services/3d-rendering-services/',
        LinkText: 'MORE ABOUT 3D RENDERING',
      },
      {
        id: 2,
        Title: 'Interactive Apps',
        Icon: 'https://biorev.com/wp-content/uploads/2020/05/iconbox2.png',
        BgImg: 'https://biorev.com/wp-content/uploads/2020/10/bg-iconbox2.jpg',
        Description:
          'There are many uses of 3D animation rendering, from a basic caption to an entertaining cartoon. Something as simp.....',
        LinkUrl: 'https://biorev.com/services/interactive-apps/',
        LinkText: 'MORE ABOUT INTERACTIVE APPS',
      },
      {
        id: 3,
        Title: 'Virtual Reality',
        Icon: 'https://biorev.com/wp-content/uploads/2020/06/iconbox6.png',
        BgImg: 'https://biorev.com/wp-content/uploads/2020/10/bg-iconbox6.jpg',
        Description:
          'With Biorev’s Google Cardboard service, experience virtual reality in a simple, fun, and affordable way. We provide something.....',
        LinkUrl: 'https://biorev.com/services/virtual-reality/',
        LinkText: 'MORE ABOUT VIRTUAL REALITY',
      },
      {
        id: 4,
        Title: 'Web Development',
        Icon: 'https://biorev.com/wp-content/uploads/2020/05/iconbox3.png',
        BgImg: 'https://biorev.com/wp-content/uploads/2020/10/bg-iconbox3.jpg',
        Description:
          'We offer a wide variety of website designing services meeting the current W3C and SEO standards. Biorev delivers outstand.....',
        LinkUrl: 'https://biorev.com/services/web-development/',
        LinkText: 'MORE ABOUT WEB DEVELOPMENT',
      },
      {
        id: 5,
        Title: 'Brand Management',
        Icon: 'https://biorev.com/wp-content/uploads/2020/06/iconbox4.png',
        BgImg: 'https://biorev.com/wp-content/uploads/2020/10/bg-iconbox4.jpg',
        Description:
          'Biorev provides one of the most trusted Virtual Assistant platforms for real estate services. It helps to solve visitor queries,.....',
        LinkUrl: 'https://biorev.com/services/brand-management/',
        LinkText: 'MORE ABOUT BRAND MANAGEMENT',
      },
      {
        id: 6,
        Title: 'Manpower Staffing',
        Icon: 'https://biorev.com/wp-content/uploads/2020/06/iconbox5.png',
        BgImg: 'https://biorev.com/wp-content/uploads/2020/10/bg-iconbox5.jpg',
        Description:
          'Manpower is the most important asset for any company & quality manpower makes a huge difference in the overall....',
        LinkUrl: 'https://biorev.com/services/manpower-staffing/',
        LinkText: 'MORE ABOUT MANPOWER STAFFING',
      },
    ],
  };

  const whoWeAreData: TitleAndDescriptionData = {
    TitleItem: {
      SectionTitle: '[ KNOW US ]',
      SectionMainTitle: 'Who We Are',
    },
    Description: `<strong>BIOREV, LLC</strong> is a leading 3D Rendering/
    Architectural Visualization Company with expertise in 3D Rendering,
    3D Virtual Tours, Animation, HR Shared Services, Technology Services
    for websites & applications, Social Media, and IT Solutions. We are
    a leading 3D Rendering company in the USA with over 6 years of
    experience in the construction and real estate industry offering
    services in 3D Product Rendering, 3D Exterior Rendering, 3D Interior
    Rendering, and 3D Architectural Rendering and are named amongst the
    top 3D rendering companies in the USA.`,
  };

  return (
    <Main
      meta={
        <Meta
          title="3D Rendering Studio and Architectural Visualization Company - Biorev"
          description="World-class 3D Rendering Studio and Architectural Visualization Company based in USA, Biorev also provides IT, HR and Cloud services."
        />
      }
    >
      <div>
        <img
          src={`${router.basePath}/assets/images/gradient.jpg`}
          alt="Banner"
        />
      </div>

      <TitleAndDescriptionSection titleAndDescriptionData={whoWeAreData} />

      <WhatWeOfferSection whatWeOfferData={whatWeOfferData} />
    </Main>
  );
};

export default Index;
