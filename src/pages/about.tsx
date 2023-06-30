import ImageAndTextSection from '@/components/ImageAndTextSection';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <ImageAndTextSection />
  </Main>
);

export default About;
