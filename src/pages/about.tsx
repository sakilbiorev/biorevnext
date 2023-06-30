import ImageAndTextSection from '@/components/ImageAndTextSection';
import StatasticsSection from '@/components/StatasticsSection';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <ImageAndTextSection />
    <StatasticsSection />
  </Main>
);

export default About;
