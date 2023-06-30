import Image from 'next/image';
import React from 'react';

import { Button } from './elements/Button';

function ImageAndTextSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-5 py-16 xl:flex-row">
      <div>
        <Image
          src="/images/about-us/whoweare.png"
          height={800}
          width={630}
          alt="who we are banner"
        />
      </div>
      <div>
        <div className="flex flex-col items-start justify-center">
          <div className="font-josefin text-[14px] font-bold uppercase text-orange-0">
            [ About Company ]
          </div>
          <div className="font-titillium text-[40px] font-thin text-black-0">
            Welcome To Biorev
          </div>
          <hr className="mb-8 w-[66px] border-t-2 border-dotted border-orange-0 bg-white-0" />
        </div>
        <div className="mb-10 flex flex-col gap-5 font-raleway text-[16px] leading-7 text-[#555555]">
          <p>
            Biorev provides photo-realistic 3D Architectural Rendering and 3D
            Animations <br /> for the design/build industry, inventors, and
            product developers with the <br /> utmost focus on customer
            satisfaction. We stand behind our work and <br />
            support our client{'\u2019'}s technology needs unconditionally.
            Biorev has the track <br /> record of complete support, and service
            to take your project to a new level.
          </p>
          <p>
            We create beautiful conversion-friendly websites, drive targeted
            website
            <br /> traffic, and help you in a gamut of digital marketing
            activities to take your tour <br /> business to the next level.
          </p>
          <p>
            The staff at Biorev has been responsible for designing excellent
            multimedia <br /> presentations for a variety of global companies.
          </p>
          <p>
            Biorev is a leading 3D Rendering company in the USA, specializing in
            3D <br /> Architectural Rendering Services, 3D Product Rendering,
            Virtual Walk-through <br /> Services of Real Estate, Virtual
            Assistant Services for Real Estate Sales,
            <br /> Technology solutions for web and mobile applications, Social
            Media Solutions,
            <br /> and IT solutions.
          </p>
          <p>
            We are also a young HR technologies, outsourcing, and Services
            Company
            <br /> providing end-to-end employee life cycle management solutions
            to
            <br /> organizations.
          </p>
          <p>
            Besides a remarkable 3D Architectural rendering company, Biorev is
            one of
            <br /> the foremost HR outsourcing firms specializing in helping
            companies optimize
            <br /> their HR processes in the areas of shared services and offers
            virtual assistants,
            <br /> online and mobile solutions for real estate marketing.
          </p>
          <p>
            We proudly serve clients globally ranging from IT to the
            Construction Industry.
          </p>
        </div>
        <Button types="orange" size="default">
          View Projects
        </Button>
      </div>
    </div>
  );
}

export default ImageAndTextSection;
