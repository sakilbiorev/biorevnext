import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
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

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 gap-10 bg-[#1A1A1A] px-10 py-[100px] font-raleway text-base text-white-0 sm:grid-cols-2 md:px-20 lg:grid-cols-4 lg:px-[30px] xl:px-56">
        <div>
          <Image width={150} height={100} src="/logo-footer.svg" alt="" />
          <p className="my-5">
            We provide a full range of <br />
            Architectural Design/ Virtual 3D Services.
          </p>
          <ul className="flex flex-row gap-3">
            <li className="rounded-full border-[0.5px] border-neutral-700 p-2 hover:bg-neutral-700">
              <a href="https://www.facebook.com/Biorevllc">
                <IoLogoFacebook />
              </a>
            </li>
            <li className="rounded-full border-[0.5px] border-neutral-700 p-2 hover:bg-neutral-700">
              <a href="https://twitter.com/biorevllc">
                <IoLogoTwitter />
              </a>
            </li>
            <li className="rounded-full border-[0.5px] border-neutral-700 p-2 hover:bg-neutral-700">
              <a href="https://www.linkedin.com/company/biorev-llc/">
                <IoLogoLinkedin />
              </a>
            </li>
            <li className="rounded-full border-[0.5px] border-neutral-700 p-2 hover:bg-neutral-700">
              <a href="https://www.youtube.com/channel/UCBWAbagmchU3OcXRtnWFsvg">
                <IoLogoYoutube />
              </a>
            </li>
            <li className="rounded-full border-[0.5px] border-neutral-700 p-2 hover:bg-neutral-700">
              <a href="https://www.behance.net/biorevstudios?tracking_source=search_projects|biorev">
                <IoLogoBehance />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-titillium text-lg text-white-0">Contacts</h4>
          <ul className="my-5 flex flex-col gap-5">
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
          <h4 className="font-titillium text-lg text-white-0">Useful Links</h4>
          <ul className="my-5 flex flex-col gap-5">
            <li className="flex flex-row items-center">
              <span>
                <TbArrowNarrowRight />
              </span>{' '}
              <Link href="/" className="ml-5">
                Life @ Biorev{' '}
              </Link>
            </li>
            <li className="flex flex-row items-center">
              <span>
                <TbArrowNarrowRight />
              </span>{' '}
              <Link href="/" className="ml-5">
                Terms & Condition{' '}
              </Link>
            </li>
            <li className="flex flex-row items-center">
              <span>
                <TbArrowNarrowRight />
              </span>{' '}
              <Link href="/" className="ml-5">
                Privacy Policy{' '}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-titillium text-lg text-white-0">Subscibe</h4>
          <div className="flex w-[280px] flex-row items-baseline	justify-between border-b-[0.5px] border-slate-700">
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
      <div className="border-t-[1px] border-[#313131] bg-[#1A1A1A] py-8 text-center text-[15px] text-[#7D7D7D]">
        © Copyright {new Date().getFullYear()}. Made by <span>Biorev</span>.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </div>
    </footer>
  );
}

export default Footer;
