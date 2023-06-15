import { useRouter } from 'next/router';

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
      <a href="#">
        <img
          src={`${router.basePath}/assets/images/gradient.jpg`}
          alt="Banner background image"
        />
      </a>
    </Main>
  );
};

export default Index;
