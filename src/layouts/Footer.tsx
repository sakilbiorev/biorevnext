import Link from 'next/link';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  IoCall,
  IoLocationSharp,
  IoLogoBehance,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMail,
} from 'react-icons/io5';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TbArrowNarrowRight } from 'react-icons/tb';

function footer() {
  return (
    <div className="flex flex-row justify-center gap-20 bg-[#1A1A1A] px-40 py-[100px] text-base text-white-0 max-[920px]:flex-col">
      <div>
        <img src="/logo-footer.svg" alt="" />
        <p>
          We provide a full range of <br />
          Architectural Design/ Virtual 3D Services.
        </p>
        <ul className="flex flex-row gap-5">
          <li>
            <a href="https://www.facebook.com/Biorevllc">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/biorevllc">
              <IoLogoTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/biorev-llc/">
              <IoLogoLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCBWAbagmchU3OcXRtnWFsvg">
              <IoLogoYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/biorevstudios?tracking_source=search_projects|biorev">
              <IoLogoBehance />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-medium text-white-0">Contacts</h4>
        <ul>
          <li className="flex flex-row items-center">
            <IoLocationSharp />
            <a
              className="ml-5"
              href="https://www.google.com/maps/place/400+E+Royal+Ln,+Irving,+TX+75039,+USA/@32.8948618,-96.9404962,18z/data=!3m1!4b1!4m6!3m5!1s0x864c281901ab3ad7:0xc4609080ed215953!8m2!3d32.8948604!4d-96.9396914!16s%2Fg%2F11bw3fqqcv?entry=ttu"
            >
              400 E Royal Lane, Suite #290,
              <br /> Irving, Tx - 75039
            </a>
          </li>
          <li className="flex flex-row items-center">
            <IoMail />
            <Link href="/" className="ml-5">
              info@biorev.us
            </Link>
          </li>
          <li className="flex flex-row items-center">
            <IoCall />
            <Link href="/" className="ml-5">
              +1 (770) 572-1828
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-medium text-white-0">Useful Links</h4>
        <ul>
          <li className="flex flex-row items-center">
            <TbArrowNarrowRight />{' '}
            <Link href="/" className="ml-5">
              Life@Biorev{' '}
            </Link>
          </li>
          <li className="flex flex-row items-center">
            <TbArrowNarrowRight />{' '}
            <Link href="/" className="ml-5">
              Terms & Condition{' '}
            </Link>
          </li>
          <li className="flex flex-row items-center">
            <TbArrowNarrowRight />{' '}
            <Link href="/" className="ml-5">
              Privacy Policy{' '}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-medium text-white-0">Subscibe</h4>
        <input
          className="mt-5	border-b-[0.5px] border-slate-700 bg-transparent focus:outline-none"
          type="email"
          placeholder="Your Email"
        />
        <span className="mt-4 block">
          Follow our newsletter to stay updated
          <br /> about offers and our services.
        </span>
      </div>
    </div>
  );
}

export default footer;
