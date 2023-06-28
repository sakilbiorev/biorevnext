import { type ReactNode, useState } from 'react';

import Footer from '@/components/Footer';
import GalleryMenu from '@/components/GalleryMenu';
import Header from '@/components/Header';
import MainMenuMob from '@/components/MainMenuMob';
import MainMenuData from '@/libs/data/MainMenuData';
import useWindowSize from '@/libs/hooks';
import type { MenuItem } from '@/libs/interfaces';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const wSize = useWindowSize();
  const [isOpenDesk, setIsOpenDesk] = useState(false);
  const [isOpenMob, setIsOpenMob] = useState(false);
  const menuData: MenuItem[] = MainMenuData;
  const toggleDeskMenu = () => {
    setIsOpenDesk(!isOpenDesk);
  };
  const toggleMobMenu = () => {
    setIsOpenMob(!isOpenMob);
  };
  return (
    <>
      <Header
        items={menuData}
        toggleDeskMenu={toggleDeskMenu}
        isOpenDesk={isOpenDesk}
        toggleMobMenu={toggleMobMenu}
        isOpenMob={isOpenMob}
      />
      <div className="w-full text-gray-700 antialiased">
        {props.meta}

        <div className="mx-auto">
          <main>{props.children}</main>
        </div>
      </div>
      {wSize.width > 1150 ? (
        <GalleryMenu isOpen={isOpenDesk} toggleMenu={toggleDeskMenu} />
      ) : (
        <MainMenuMob
          isOpenMob={isOpenMob}
          toggleMobMenu={toggleMobMenu}
          items={menuData}
        />
      )}
      <Footer />
    </>
  );
};

export { Main };
