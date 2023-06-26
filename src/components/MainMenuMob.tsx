import Link from 'next/link';

const MainMenuMob = ({
  isOpenMob,
  toggleMobMenu,
}: {
  isOpenMob: boolean;
  toggleMobMenu: () => void;
}) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-[999] h-screen w-[400px] ${
        isOpenMob ? 'translate-x-0' : 'translate-x-full'
      } overflow-hidden bg-black-0 px-[25px] py-[90px] transition-all duration-300 ease-linear`}
    >
      <button
        type="button"
        onClick={toggleMobMenu}
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
        </div>
      </div>
    </div>
  );
};

export default MainMenuMob;
