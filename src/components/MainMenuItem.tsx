import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import type { MenuItem } from '@/libs/interfaces';

const MainMenuItem = ({ item }: { item: MenuItem }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li key={item.id} className="relative">
      {item.isExternal ? (
        <Link
          href={item.url}
          target="_blank"
          title="Open in a new window"
          className="relative block h-[100%] items-center overflow-hidden border-b-[1px] border-gray-3 py-[9px] pr-[30px] font-raleway capitalize text-white-0"
        >
          <img
            className="h-auto max-w-[100%]"
            src={`${router.basePath}/assets/images/xseries-icon.png`}
            alt="Banner background"
          />
          <strong className="px-[8px] py-[2px] text-[15px] uppercase">
            {item.label}
          </strong>
        </Link>
      ) : (
        <div className="border-b-[1px] border-gray-3">
          <Link
            href={item.url}
            className="relative block h-[100%] items-center overflow-hidden py-[9px] pr-[30px] font-raleway capitalize text-white-0"
          >
            {item.label}
          </Link>
          {item.children && (
            <button
              type="button"
              className={`icon-arrow absolute right-[1px] top-0 block w-[34px] px-[10px] py-[7px] text-base text-gray-4 ${
                isOpen && 'rotate-90'
              }`}
              onClick={toggleMenu}
            >
              <span className="hidden text-[0px]">arrow button</span>
            </button>
          )}
        </div>
      )}
      {isOpen && item.children && (
        <>
          {/* submenu starts */}
          <ul className="pl-[15px] transition-all delay-300 duration-300 ease-in-out">
            {item.children.map((subitem) => (
              <MainMenuItem item={subitem} key={subitem.id} />
            ))}
          </ul>
          {/* submenu ends */}
        </>
      )}
    </li>
  );
};

export default MainMenuItem;
