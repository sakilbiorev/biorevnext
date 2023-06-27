import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';
import {
  HiOutlineLocationMarker,
  HiOutlineMailOpen,
  HiOutlinePhone,
} from 'react-icons/hi';

import GallryMenuData from '@/libs/data/GalleryMenuData';
import type { GallryMenuItem } from '@/libs/interfaces';

const GalleryMenu = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const galleryMenuData: GallryMenuItem = GallryMenuData;

  return (
    <div
      className={`fixed inset-y-0 right-0 z-[999] h-screen w-[400px] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } overflow-hidden bg-black-0 px-[25px] py-[90px] transition-all duration-300 ease-linear`}
    >
      <button
        type="button"
        onClick={toggleMenu}
        className="absolute right-0 top-0 z-[9999] block h-[90px] w-[90px] cursor-pointer bg-black-1 text-center text-xl leading-[90px] text-white-0 transition-all duration-300 ease-linear"
      >
        <span className='font-Flaticon after:text-[21px] after:leading-[90px] after:text-white-0 after:content-["\f130"]' />
      </button>
      <div className="relative px-5">
        <div className="flex flex-wrap px-[15px]">
          <div className="mb-10 mt-5">
            <Link href="/">
              <img
                className="h-auto w-[283px]"
                src="/assets/images/home3-1color-white.png"
                alt="Biorev logo"
              />
            </Link>
          </div>
          <div className="pb-5">
            <h2 className="font-titillium text-[40px] font-normal leading-[48px] text-white-0">
              {galleryMenuData.galleryTitle}
            </h2>
          </div>
          <div className="mr-[-10px] flex flex-wrap justify-between pb-[30px]">
            {galleryMenuData.galleryImages.map((item) => (
              <div
                key={item.id}
                className="w-1/3 flex-1 grow-[1] pb-[5px] pr-[10px]"
              >
                <Link href={item.imgURL}>
                  <img src={item.imgURL} alt={item.label} />
                </Link>
              </div>
            ))}
          </div>
          <div className="pb-5">
            <h2 className="font-titillium text-[40px] font-normal leading-[48px] text-white-0">
              {galleryMenuData.contactInfoTitle}
            </h2>
          </div>
          <ul className="pb-10 text-white-0">
            {galleryMenuData.address !== '' && (
              <li className="flex items-center pb-[12.5px] font-raleway leading-[18px]">
                <HiOutlineLocationMarker className="text-[41.5px]" />
                <span className="pl-[18px]">{galleryMenuData.address}</span>
              </li>
            )}
            {galleryMenuData.email !== '' && (
              <li className="mt-[12.5px] flex items-center pb-[12.5px] leading-[18px]">
                <HiOutlineMailOpen className="text-[20.5px]" />
                <span className="pl-[18px]">{galleryMenuData.email}</span>
              </li>
            )}
            {galleryMenuData.phone !== '' && (
              <li className="mt-[12.5px] flex items-center leading-[18px]">
                <HiOutlinePhone className="text-[20.5px]" />
                <span className="pl-[18px]">{galleryMenuData.phone}</span>
              </li>
            )}
          </ul>
          <ul className="flex text-white-0 ">
            {galleryMenuData.twitterLink !== '' && (
              <li className="mr-[15px] flex items-center pb-[12.5px]">
                <Link
                  target="_blank"
                  title="Open in a new window"
                  href={galleryMenuData.twitterLink}
                  className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[1px] border-gray-1 bg-black-0 transition-all duration-300 hover:border-gray-2 hover:bg-gray-2"
                >
                  <FaTwitter className="text-[14px]" />
                </Link>
              </li>
            )}
            {galleryMenuData.facebookLink !== '' && (
              <li className="mr-[15px] flex items-center pb-[12.5px]">
                <Link
                  target="_blank"
                  title="Open in a new window"
                  href={galleryMenuData.facebookLink}
                  className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[1px] border-gray-1 bg-black-0 transition-all duration-300 hover:border-gray-2 hover:bg-gray-2"
                >
                  <FaFacebookF className="text-[14px]" />
                </Link>
              </li>
            )}
            {galleryMenuData.linkedinLink !== '' && (
              <li className="mr-[15px] flex items-center pb-[12.5px]">
                <Link
                  target="_blank"
                  title="Open in a new window"
                  href={galleryMenuData.linkedinLink}
                  className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[1px] border-gray-1 bg-black-0 transition-all duration-300 hover:border-gray-2 hover:bg-gray-2"
                >
                  <FaLinkedinIn className="text-[14px]" />
                </Link>
              </li>
            )}
            {galleryMenuData.instagramLink !== '' && (
              <li className="mr-[15px] flex items-center pb-[12.5px]">
                <Link
                  target="_blank"
                  title="Open in a new window"
                  href={galleryMenuData.instagramLink}
                  className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[1px] border-gray-1 bg-black-0 transition-all duration-300 hover:border-gray-2 hover:bg-gray-2"
                >
                  <FaInstagram className="text-[14px]" />
                </Link>
              </li>
            )}
            {galleryMenuData.pinterestLink !== '' && (
              <li className="mr-[15px] flex items-center pb-[12.5px]">
                <Link
                  target="_blank"
                  title="Open in a new window"
                  href={galleryMenuData.pinterestLink}
                  className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[1px] border-gray-1 bg-black-0 transition-all duration-300 hover:border-gray-2 hover:bg-gray-2"
                >
                  <FaPinterest className="text-[14px]" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GalleryMenu;
