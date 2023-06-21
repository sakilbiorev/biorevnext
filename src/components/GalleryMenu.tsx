import Link from 'next/link';

const GalleryMenu = () => {
  return (
    <div className="fixed inset-y-0 right-0 z-[999] h-screen w-[400px] translate-x-full overflow-hidden bg-black-0 py-[90px] pl-[25px] pr-[42px] transition-all duration-300 ease-linear">
      <div className="absolute right-0 top-0 z-[9999] block h-[90px] w-[90px] cursor-pointer bg-black-1 text-center text-xl leading-[90px] text-white-0 transition-all duration-300 ease-linear">
        <span className='font-Flaticon after:text-[21px] after:leading-[90px] after:text-white-0 after:content-["\f130"]' />
      </div>
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
        </div>
      </div>
    </div>
  );
};

export default GalleryMenu;
