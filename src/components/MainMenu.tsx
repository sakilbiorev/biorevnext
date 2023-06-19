import Link from 'next/link';
import { useRouter } from 'next/router';

const MainMenu = () => {
  const router = useRouter();
  return (
    <header className="absolute z-[999] flex w-full border-b border-white-100">
      <div className="w-[23%]">
        <img
          className="h-auto w-[325px]"
          src={`${router.basePath}/assets/images/biorev-white-logo.svg`}
          alt="Nextjs starter banner"
        />
      </div>
      <nav className="flex w-[71.988%] items-center justify-center">
        <ul className="flex h-[100%] flex-wrap items-center text-sm">
          <li className="group mr-5 flex h-[100%]">
            <Link
              href="/"
              className="relative flex h-[100%] items-center overflow-hidden border-none font-titillium uppercase text-white-0"
            >
              Home
              <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
            </Link>
          </li>
          <li className="group relative mx-5 flex h-[100%]">
            <Link
              href="/about/"
              className="relative flex h-[100%] items-center overflow-hidden border-none pr-[17px] font-titillium uppercase text-white-0 after:absolute after:right-[1px] after:top-[50%] after:mt-[-6px] after:font-Flaticon after:text-[8px] after:content-['']"
            >
              About us
              <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
            </Link>
            <ul className="invisible absolute left-[-34px] top-[100%] z-10 box-border min-w-[290px] translate-y-[30px] bg-black-0 py-5 opacity-0 shadow-mainMenu transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-[10px] group-hover:opacity-100">
              <li className="group px-[34px]">
                <Link
                  href="/"
                  className="block border-none py-[5px] font-titillium text-base leading-[30px] text-gray-0 transition-all duration-300 ease-linear hover:text-white-0"
                >
                  <span className="invisible absolute left-0 top-[50%] h-[1px] bg-white-0 opacity-0 group-hover:visible " />
                  Company
                </Link>
              </li>
              <li className="px-[34px]">
                <Link
                  href="/"
                  className="block border-none py-[5px] font-titillium text-base leading-[30px] text-gray-0"
                >
                  Our Blogs
                </Link>
              </li>
              <li className="px-[34px]">
                <Link
                  href="/"
                  className="block border-none py-[5px] font-titillium text-base leading-[30px] text-gray-0"
                >
                  Our Process
                </Link>
              </li>
            </ul>
          </li>
          <li className="group mx-5 flex h-[100%]">
            <Link
              className="relative flex h-[100%] items-center overflow-hidden border-none pr-[17px] font-titillium uppercase text-white-0 after:absolute after:right-[1px] after:top-[50%] after:mt-[-6px] after:font-Flaticon after:text-[8px] after:content-['']"
              href="javscript:void(0)"
            >
              Our services
              <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
            </Link>
          </li>
          <li className="group mx-5 flex h-[100%]">
            <Link
              href="/blog/"
              className="relative flex h-[100%] items-center overflow-hidden border-none font-titillium uppercase text-white-0"
            >
              <img
                className="h-auto w-6 "
                src={`${router.basePath}/assets/images/xseries-icon.png`}
                alt="Banner background image"
              />
              <strong className="px-[8px] py-[2px] text-[15px]">
                Series app
              </strong>
              <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
            </Link>
          </li>
          <li className="group mx-5 flex h-[100%]">
            <Link
              href="/blog/"
              className="relative flex h-[100%] items-center overflow-hidden border-none font-titillium uppercase text-white-0"
            >
              Portfolio
              <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
            </Link>
          </li>
          <li className="group mx-5 flex h-[100%]">
            <Link
              href="/blog/"
              className="relative flex h-[100%] items-center overflow-hidden border-none font-titillium uppercase text-white-0"
            >
              Get a quote
              <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
            </Link>
          </li>
          <li className="group mx-5 flex h-[100%]">
            <Link
              href="/blog/"
              className="relative flex h-[100%] items-center overflow-hidden border-none pr-[17px] font-titillium uppercase text-white-0 after:absolute after:right-[1px] after:top-[50%] after:mt-[-6px] after:font-Flaticon after:text-[8px] after:content-['']"
            >
              Careers
              <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
            </Link>
          </li>
          <li className="group mx-5 flex h-[100%]">
            <Link
              href="/blog/"
              className="relative flex h-[100%] items-center overflow-hidden border-none font-titillium uppercase text-white-0"
            >
              Contact us
              <span className="absolute bottom-[-14px] left-[50%] ml-[-5px] h-2 w-2 rotate-45 bg-white-0 opacity-0 transition-all duration-300 ease-linear group-hover:bottom-[-4px] group-hover:opacity-100" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-[5%]" />
    </header>
  );
};

export default MainMenu;
