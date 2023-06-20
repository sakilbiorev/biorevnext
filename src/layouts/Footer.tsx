import React from 'react';
import { IoLogoFacebook,IoLogoTwitter , IoLogoLinkedin, IoLogoYoutube,IoLogoBehance } from "react-icons/io5";
import { IoLocationSharp, IoMail,IoCall } from "react-icons/io5";
import { TbArrowNarrowRight } from "react-icons/tb";

function footer() {
  return (
    <div className="flex flex-row justify-center max-[920px]:flex-col gap-20 bg-[#1A1A1A] px-40 py-[100px] text-base text-white-200">
      <div>
        <img src="/logo-footer.svg" alt="" />
        <p>
          We provide a full range of <br/>Architectural Design/ Virtual 3D Services.
        </p>
        <ul className='flex flex-row gap-5'>
          <li><a href="https://www.facebook.com/Biorevllc"><IoLogoFacebook /></a></li>
          <li><a href="https://twitter.com/biorevllc"><IoLogoTwitter /></a></li>
          <li><a href="https://www.linkedin.com/company/biorev-llc/"><IoLogoLinkedin /></a></li>
          <li><a href="https://www.youtube.com/channel/UCBWAbagmchU3OcXRtnWFsvg"><IoLogoYoutube /></a></li>
          <li><a href="https://www.behance.net/biorevstudios?tracking_source=search_projects|biorev"><IoLogoBehance /></a></li>
        </ul>
      </div>
      <div>
        <h4 className='text-lg font-medium text-white-0'>Contacts</h4>
        <ul>
          <li className='flex flex-row items-center'><IoLocationSharp /><a className='ml-5' href="https://www.google.com/maps/place/400+E+Royal+Ln,+Irving,+TX+75039,+USA/@32.8948618,-96.9404962,18z/data=!3m1!4b1!4m6!3m5!1s0x864c281901ab3ad7:0xc4609080ed215953!8m2!3d32.8948604!4d-96.9396914!16s%2Fg%2F11bw3fqqcv?entry=ttu">400 E Royal Lane, Suite #290,<br/> Irving, Tx - 75039</a></li>
          <li className='flex flex-row items-center'><IoMail /><a className='ml-5' >info@biorev.us</a></li>
          <li className='flex flex-row items-center'><IoCall /><a className='ml-5' >+1 (770) 572-1828</a></li>
        </ul>
      </div>
      <div>
        <h4 className='text-lg font-medium text-white-0'>Useful Links</h4>
        <ul>
          <li className='flex flex-row items-center'><TbArrowNarrowRight /> <a className='ml-5'>Life@Biorev </a></li>
          <li className='flex flex-row items-center'><TbArrowNarrowRight /> <a className='ml-5'>Terms & Condition </a></li>
          <li className='flex flex-row items-center'><TbArrowNarrowRight /> <a className='ml-5'>Privacy Policy </a></li>
        </ul>
      </div>
      <div>
        <h4 className='text-lg font-medium text-white-0'>Subscibe</h4>
        <input className='bg-transparent	border-b-0.5 border-slate-700 focus:outline-none mt-5' type="email" placeholder="Your Email" />
        <span className='block mt-4'>
          Follow our newsletter to stay updated<br/> about offers and our services.
        </span>
      </div>
    </div>
  );
}

export default footer;