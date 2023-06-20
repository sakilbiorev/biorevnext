import React from 'react';
import { IoLogoFacebook,IoLogoTwitter , IoLogoLinkedin, IoLogoYoutube,IoLogoBehance } from "react-icons/io5";
import { IoLocationSharp, IoMail,IoCall } from "react-icons/io5";
import { TbArrowNarrowRight } from "react-icons/tb";

function footer() {
  return (
    <div className="flex flex-row items-center justify-center gap-20 bg-[#1A1A1A] px-40 py-[100px] text-base text-white-200">
      <div>
        <img src="/logo-footer.svg" alt="" />
        <p>
          We provide a full range of <br/>Architectural Design/ Virtual 3D Services.
        </p>
        <ul className='flex flex-row gap-5'>
          <li><a href=""><IoLogoFacebook /></a></li>
          <li><a href=""><IoLogoTwitter /></a></li>
          <li><a href=""><IoLogoLinkedin /></a></li>
          <li><a href=""><IoLogoYoutube /></a></li>
          <li><a href=""><IoLogoBehance /></a></li>
        </ul>
      </div>
      <div>
        <h4 className='text-lg font-medium text-white-0'>Contacts</h4>
        <ul>
          <li className='flex flex-row items-center'><IoLocationSharp /><a className='ml-5' href="">400 E Royal Lane, Suite #290,<br/> Irving, Tx - 75039</a></li>
          <li className='flex flex-row items-center'><IoMail /><a className='ml-5' href="">info@biorev.us</a></li>
          <li className='flex flex-row items-center'><IoCall /><a className='ml-5' href="">+1 (770) 572-1828</a></li>
        </ul>
      </div>
      <div>
        <h4 className='text-lg font-medium text-white-0'>Useful Links</h4>
        <ul>
          <li className='flex flex-row items-center'><TbArrowNarrowRight /> <a className='ml-5' href="">Life@Biorev </a></li>
          <li className='flex flex-row items-center'><TbArrowNarrowRight /> <a className='ml-5' href="">Terms & Condition </a></li>
          <li className='flex flex-row items-center'><TbArrowNarrowRight /> <a className='ml-5' href="">Privacy Policy </a></li>
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