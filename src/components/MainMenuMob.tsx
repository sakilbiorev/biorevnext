import Link from 'next/link';

import type { MenuItem } from '@/libs/interfaces';

import MainMenuItem from './MainMenuItem';

const MainMenuMob = ({
  isOpenMob,
  toggleMobMenu,
  items,
}: {
  isOpenMob: boolean;
  toggleMobMenu: () => void;
  items: MenuItem[];
}) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-[999] h-screen w-[310px] ${
        isOpenMob ? 'translate-x-0' : 'translate-x-full'
      } max-h-[100%] overflow-hidden overflow-y-auto bg-black-0 px-[35px] pb-[35px] pt-[20px] transition-all duration-300 ease-linear`}
    >
      <button
        type="button"
        onClick={toggleMobMenu}
        className="mb-[10px] block h-[40px] cursor-pointer bg-black-1 text-center text-xl text-white-0 transition-all duration-300 ease-linear"
      >
        <span className='font-Flaticon after:text-[21px] after:text-white-0 after:content-["\f134"]' />
      </button>
      <div className="relative pb-[35px]">
        <ul className="flex h-[100%] flex-col flex-wrap text-sm">
          {items.map((item) => (
            <MainMenuItem item={item} key={item.id} />
          ))}
          <li className="group relative h-[100%]">
            <Link
              href="tel:+17705721828"
              target="_blank"
              title="Open in a new window"
              className="relative block h-[100%] items-center overflow-hidden border-none py-[9px] pr-[30px] font-titillium capitalize text-white-0"
            >
              +1 (770) 572-1828
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenuMob;
