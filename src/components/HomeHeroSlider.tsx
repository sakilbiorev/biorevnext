import router from 'next/router';

const HomeHeroSlider = () => {
  return (
    <section>
      <img
        className="mx-auto"
        src={`${router.basePath}/assets/images/gradient.jpg`}
        alt="Banner"
      />
    </section>
  );
};

export default HomeHeroSlider;
