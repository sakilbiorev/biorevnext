import Link from 'next/link';
import { useRouter } from 'next/router';

import type { MenuItem } from '@/libs/interfaces';

const MainMenu = ({ items }: { items: MenuItem[] }) => {
  const router = useRouter();
  return (
    <header className="absolute z-[999] flex w-full border-b border-white-100">
      <div className="w-[23%]">
        <img
          className="h-[72px] w-auto"
          src={`${router.basePath}/assets/images/biorev-white-logo.svg`}
          alt="Biorev logo"
        />
      </div>
      <nav className="flex w-[71.988%] items-center justify-center">
        {/* mainmenu starts */}
        <ul className="flex h-[100%] flex-wrap items-center text-sm">
          {items.map((item, index) => (
            <li
              key={item.id}
              className={`group relative ${index === 0 ? 'mr-5' : 'mx-5'} ${
                index === items.length - 1 && 'ml-5 mr-0'
              } flex h-[100%]`}
            >
              {item.isExternal ? (
                <Link
                  href={item.url}
                  target="_blank"
                  title="Open in a new window"
                  className={`relative flex h-[100%] items-center overflow-hidden border-none font-titillium uppercase text-white-0 ${
                    item.children &&
                    'after:absolute after:right-[1px] after:top-[50%] after:mt-[-6px] after:font-Flaticon after:text-[8px] after:content-[""]'
                  }`}
                >
                  <img
                    className="h-auto w-6 "
                    src={`${router.basePath}/assets/images/xseries-icon.png`}
                    alt="Banner background"
                  />
                  <strong className="px-[8px] py-[2px] text-[15px]">
                    {item.label}
                  </strong>
                  <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
                </Link>
              ) : (
                <Link
                  href={item.url}
                  className={`relative flex h-[100%] items-center overflow-hidden border-none font-titillium uppercase text-white-0 ${
                    item.children &&
                    'pr-[17px] after:absolute after:right-[1px] after:top-[50%] after:mt-[-6px] after:font-Flaticon after:text-[8px] after:content-[""]'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
                </Link>
              )}
              {item.children ? (
                <>
                  {/* submenu starts */}
                  <ul className="invisible absolute left-[-34px] top-[100%] z-10 box-border min-w-[290px] translate-y-[30px] bg-black-0 py-5 opacity-0 shadow-mainMenu transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-[10px] group-hover:opacity-100">
                    {item.children.map((subitem) => (
                      <li
                        key={subitem.id}
                        className="group/item relative px-[34px]"
                      >
                        <Link
                          href={subitem.url}
                          className={`group/itemLink relative block overflow-hidden border-none py-[5px] font-titillium text-base leading-[30px] text-gray-0 transition-all duration-300 ease-linear hover:pl-10 hover:text-white-0 ${
                            subitem.children &&
                            'after:absolute after:right-[1px] after:top-[calc(50%-4.5px)] after:mt-[0px] after:flex after:-rotate-90 after:font-Flaticon after:text-[9px] after:leading-none after:content-[""]'
                          }`}
                        >
                          <span className="invisible absolute left-0 top-[50%] h-[1px] w-0 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover/itemLink:visible group-hover/itemLink:left-0 group-hover/itemLink:w-[30px] group-hover/itemLink:opacity-100" />
                          {subitem.label}
                        </Link>
                        {subitem.children && (
                          <>
                            {/* submenu starts */}
                            <ul className="invisible absolute left-[calc(100%+2px)] top-[-30px] z-10 box-border min-w-[290px] translate-y-[30px] whitespace-nowrap bg-black-0 py-5 opacity-0 shadow-mainMenu transition-all duration-300 ease-in-out group-hover/item:visible group-hover/item:translate-y-[10px] group-hover/item:opacity-100">
                              {subitem.children.map((subitem2) => (
                                <li
                                  key={subitem2.id}
                                  className="group/item1 px-[34px]"
                                >
                                  <Link
                                    href={subitem2.url}
                                    className="group/item1 relative block overflow-hidden border-none py-[5px] font-titillium text-base leading-[30px] text-gray-0 transition-all duration-300 ease-linear hover:pl-10 hover:text-white-0"
                                  >
                                    <span className="invisible absolute left-0 top-[50%] h-[1px] w-0 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover/item1:visible group-hover/item1:left-0 group-hover/item1:w-[30px] group-hover/item1:opacity-100" />
                                    {subitem2.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            {/* submenu ends */}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  {/* submenu ends */}
                </>
              ) : null}
            </li>
          ))}
        </ul>
        {/* mainmenu ends */}
      </nav>
      <div className="w-[5%]">
        <div className="fixed left-0 top-0 h-screen w-screen cursor-close bg-black-overlay" />
        <div className="relative flex h-[100%] cursor-pointer items-center justify-end px-[25px]">
          <span className='font-Flaticon text-white-0 after:text-[22px] after:content-["\f105"]' />
        </div>
      </div>
    </header>
  );
};

export default MainMenu;
