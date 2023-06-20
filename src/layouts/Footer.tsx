import Link from "next/link";
import React from "react";

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
} from "react-icons/io5";
// eslint-disable-next-line import/no-extraneous-dependencies
import { TbArrowNarrowRight } from "react-icons/tb";

import { FaPaperPlane } from "react-icons/fa";
function footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-30 xl:px-56 md:px-20 gap-10 bg-[#1A1A1A] px-10 py-[100px] font-raleway text-base text-white-200">
      <div>
        <img src="/logo-footer.svg" alt="" />
        <p>
          We provide a full range of <br />
          Architectural Design/ Virtual 3D Services.
        </p>
        <ul className="flex flex-row gap-3">
          <li className="border-[0.5px] p-2 rounded-full hover:bg-neutral-700 border-neutral-700">
            <a href="https://www.facebook.com/Biorevllc">
              <IoLogoFacebook />
            </a>
          </li>
          <li className="border-[0.5px] p-2 rounded-full hover:bg-neutral-700 border-neutral-700">
            <a href="https://twitter.com/biorevllc">
              <IoLogoTwitter />
            </a>
          </li>
          <li className="border-[0.5px] p-2 rounded-full hover:bg-neutral-700 border-neutral-700">
            <a href="https://www.linkedin.com/company/biorev-llc/">
              <IoLogoLinkedin />
            </a>
          </li>
          <li className="border-[0.5px] p-2 rounded-full hover:bg-neutral-700 border-neutral-700">
            <a href="https://www.youtube.com/channel/UCBWAbagmchU3OcXRtnWFsvg">
              <IoLogoYoutube />
            </a>
          </li>
          <li className="border-[0.5px] p-2 rounded-full hover:bg-neutral-700 border-neutral-700">
            <a href="https://www.behance.net/biorevstudios?tracking_source=search_projects|biorev">
              <IoLogoBehance />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-titillium text-white-0">Contacts</h4>
        <ul className="flex flex-col gap-5">
          <li className="flex flex-row items-center">
            <span>
              <IoLocationSharp />
            </span>
            <a
              className="ml-5"
              href="https://www.google.com/maps/place/400+E+Royal+Ln,+Irving,+TX+75039,+USA/@32.8948618,-96.9404962,18z/data=!3m1!4b1!4m6!3m5!1s0x864c281901ab3ad7:0xc4609080ed215953!8m2!3d32.8948604!4d-96.9396914!16s%2Fg%2F11bw3fqqcv?entry=ttu"
            >
              400 E Royal Lane, Suite #290,
              <br /> Irving, Tx - 75039
            </a>
          </li>
          <li className="flex flex-row items-center">
            <span>
              <IoMail />
            </span>
            <Link href="/" className="ml-5">
              info@biorev.us
            </Link>
          </li>
          <li className="flex flex-row items-center">
            <span>
              <IoCall />
            </span>
            <Link href="/" className="ml-5">
              +1 (770) 572-1828
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-titillium text-white-0">Useful Links</h4>
        <ul className="flex flex-col gap-5">
          <li className="flex flex-row items-center">
            <span>
              <TbArrowNarrowRight />
            </span>{" "}
            <Link href="/" className="ml-5">
              Life @ Biorev{" "}
            </Link>
          </li>
          <li className="flex flex-row items-center">
            <span>
              <TbArrowNarrowRight />
            </span>{" "}
            <Link href="/" className="ml-5">
              Terms & Condition{" "}
            </Link>
          </li>
          <li className="flex flex-row items-center">
            <span>
              <TbArrowNarrowRight />
            </span>{" "}
            <Link href="/" className="ml-5">
              Privacy Policy{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-titillium text-white-0">Subscibe</h4>
        <div className="flex flex-row items-baseline justify-between	border-b-[0.5px] w-[280px] border-slate-700">
          <input
            className="mt-5 bg-transparent focus:outline-none"
            type="email"
            placeholder="Your Email"
          />
          <i>
            <FaPaperPlane />
          </i>
        </div>
        <span className="mt-4 block">
          Follow our newsletter to stay updated
          <br /> about offers and our services.
        </span>
      </div>
    </div>
  );
}

export default footer;
