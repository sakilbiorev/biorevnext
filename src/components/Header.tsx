import { useRouter } from 'next/router';

import type { MenuItem } from '@/libs/interfaces';

import MainMenuDesk from './MainMenuDesk';

const Header = ({
  items,
  toggleDeskMenu,
  isOpenDesk,
}: {
  items: MenuItem[];
  toggleDeskMenu: () => void;
  isOpenDesk: boolean;
}) => {
  const router = useRouter();

  return (
    <header className="absolute z-[999] flex w-full border-b border-white-100 max-[1150px]:justify-between">
      {/** Logo * */}
      <div className="w-[23%] max-xl:w-[350px] max-[1150px]:w-auto">
        <img
          className="h-[72px] w-auto"
          src={`${router.basePath}/assets/images/biorev-white-logo.svg`}
          alt="Biorev logo"
        />
      </div>

      {/** Mainmenu * */}
      <MainMenuDesk items={items} />

      {/** Toggle menu * */}
      <div className="w-[5%] max-[1150px]:w-auto">
        {/** Backdrop * */}
        <button
          type="button"
          onClick={toggleDeskMenu}
          aria-label="Backdrop"
          className={`fixed left-0 top-0 h-screen w-screen cursor-close bg-black-overlay ${
            isOpenDesk ? 'visible z-[9998]' : 'invisible -z-10'
          }`}
        />
        <button
          type="button"
          onClick={toggleDeskMenu}
          className="relative flex h-[100%] cursor-pointer items-center justify-end px-[25px]"
        >
          <span className='font-Flaticon text-white-0 after:text-[22px] after:content-["\f105"]' />
        </button>
      </div>
    </header>
  );
};

export default Header;
