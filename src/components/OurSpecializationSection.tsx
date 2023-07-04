import Image from 'next/image';
import React from 'react';

const OurSpecializationSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-[120px]">
      <div className="mb-5">
        <Image
          src="/images/os.jpg"
          alt="tech image"
          height={500}
          width={1095}
        />
      </div>
      <div className="bg-slidePattern bg-cover px-[40px] py-[50px] leading-[48px] xl:absolute xl:ml-[800px] xl:mt-[400px] xl:w-[380px]">
        <div className="pb-[20px] font-titillium font-thin uppercase text-white-0 xl:text-[35px]">
          Our Specializations
        </div>
        <hr className="border-h-black mb-8 w-[66px] border-t-2 border-dotted bg-white-0" />
        <p className="text-justify font-raleway text-[16px] leading-7 text-[#a3a3a3]">
          We are an expert 3D Rendering Company with specialization in 3D
          Architectural Rendering, 3D Floor Plans,{' '}
          <span className="text-white-0">3D Virtual Tours</span>, Animation, HR
          Shared Services, Technology services for Web and more applications,
          Social Media Solutions, and IT Solutions.
        </p>
      </div>
    </div>
  );
};

export default OurSpecializationSection;
