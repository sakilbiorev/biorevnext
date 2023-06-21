import { useRouter } from 'next/router';

import TitleAndDescriptionSection from '@/components/TitleAndDescriptionSection';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

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

      <TitleAndDescriptionSection />
    </Main>
  );
};

export default Index;
