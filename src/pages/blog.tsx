import HeaderBannerSection from '@/components/HeaderBannerSection';
import { Meta } from '@/layouts/Meta';
import type { HeaderBanner } from '@/libs/interfaces';
import { Main } from '@/templates/Main';

const Blog = () => {
  const headerBannerData: HeaderBanner = {
    title: 'Blog',
    BgImgURL: '/images/HeaderBanner/banner-blogs.jpg',
  };
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <HeaderBannerSection headerBannerData={headerBannerData} />

      {/* {Array.from(Array(10).keys()).map((elt) => (
      <div
        className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1"
        key={elt}
      >
        <Link href={`/blog/blog-${elt}`}>{`Blog - ${elt}`}</Link>
      </div>
    ))} */}
    </Main>
  );
};

export default Blog;
