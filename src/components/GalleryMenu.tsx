import Link from 'next/link';

import type { GallryMenuData } from '@/libs/interfaces';

const GalleryMenu = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const galleryMenuData: GallryMenuData = {
    galleryTitle: 'Our Gallery',
    galleryImages: [
      {
        id: 1,
        label: 'gallery image 1',
        imgURL:
          'https://biorev.com/wp-content/uploads/2020/05/p3-gallery2-150x150.jpg',
      },
      {
        id: 2,
        label: 'gallery image 2',
        imgURL:
          'https://biorev.com/wp-content/uploads/2020/05/p3-gallery4-150x150.jpg',
      },
      {
        id: 3,
        label: 'gallery image 3',
        imgURL:
          'https://biorev.com/wp-content/uploads/2020/05/p3-gallery1-150x150.jpg',
      },
      {
        id: 4,
        label: 'gallery image 4',
        imgURL:
          'https://biorev.com/wp-content/uploads/2020/05/p4-gallery1-150x150.jpg',
      },
      {
        id: 5,
        label: 'gallery image 5',
        imgURL:
          'https://biorev.com/wp-content/uploads/2020/05/p3-gallery5-150x150.jpg',
      },
      {
        id: 6,
        label: 'gallery image 6',
        imgURL:
          'https://biorev.com/wp-content/uploads/2020/05/p4-gallery2-150x150.jpg',
      },
    ],
    contactInfoTitle: 'Contact Info',
    address: '400 E Royal Lane,<br/>Suite # 290, Irving, TX – 75039',
    email: 'info@biorev.us',
    phone: '+1 (770) 572-1828',
    twitterLink: 'http://www.twitter.com/biorevllc',
    facebookLink: 'https://www.facebook.com/Biorevllc',
    linkedinLink: 'https://www.linkedin.com/company/biorev-llc',
    instagramLink: 'https://www.instagram.com/biorev_llc/',
    pinterestLink: 'https://in.pinterest.com/biorevllc',
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 z-[999] h-screen w-[400px] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } overflow-hidden bg-black-0 py-[90px] pl-[25px] pr-[42px] transition-all duration-300 ease-linear`}
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
                className="h-[72px] w-auto"
                src="/assets/images/biorev-white-logo.svg"
                alt="Biorev logo"
              />
            </Link>
          </div>
          <div className="pb-5">
            <h2 className="font-titillium text-[40px] font-normal leading-[48px] text-white-0">
              {galleryMenuData.galleryTitle}
            </h2>
          </div>
          <div className="flex flex-wrap justify-between pb-[30px]">
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
        </div>
      </div>
    </div>
  );
};

export default GalleryMenu;
