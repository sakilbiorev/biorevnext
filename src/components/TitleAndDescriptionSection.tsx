const TitleAndDescriptionSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-10 pt-[68px] text-black-0">
      <div className="relative flex w-full flex-col justify-center pb-5 text-center before:absolute before:bottom-[1px] before:left-[50%] before:h-[2px] before:w-[66px] before:translate-x-[-50%] before:border-b-2 before:border-dotted before:border-b-orange-0">
        <div className="font-josefin text-[14px] font-bold text-orange-0">
          [ KNOW US ]
        </div>
        <h2 className="font-titillium text-[40px] font-normal leading-[48px]">
          Who We Are
        </h2>
      </div>
      <div className="max-w-[1174px] text-justify font-raleway text-black-2">
        <p>
          <strong>BIOREV, LLC</strong> is a leading 3D Rendering/ Architectural
          Visualization Company with expertise in 3D Rendering, 3D Virtual
          Tours, Animation, HR Shared Services, Technology Services for websites
          & applications, Social Media, and IT Solutions. We are a leading 3D
          Rendering company in the USA with over 6 years of experience in the
          construction and real estate industry offering services in 3D Product
          Rendering, 3D Exterior Rendering, 3D Interior Rendering, and 3D
          Architectural Rendering and are named amongst the top 3D rendering
          companies in the USA.
        </p>
      </div>
    </section>
  );
};

export default TitleAndDescriptionSection;
