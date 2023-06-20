import Link from 'next/link';
import { useRouter } from 'next/router';

const MainMenu = () => {
  const router = useRouter();
  return (
  <header className="w-full border-b border-white-100 flex absolute z-[999]">
    <div className='w-[23%]'>
      <img
          className='w-[325px] h-auto'
          src={`${router.basePath}/assets/images/biorev-white-logo.svg`}
          alt="Nextjs starter banner"
        />
    </div>
    <nav className='w-[71.988%] flex justify-center items-center'>
      <ul className="flex flex-wrap text-sm items-center h-[100%]">
        <li className="mr-5 flex h-[100%]">
          <Link
            href="/"
            className="border-none text-white-0 font-titillium uppercase flex h-[100%] items-center"
          >
            Home
            <span className='absolute h-2 w-2 bottom-[-14px] left-[50%] opacity-0 ml-[-5px] rotate-45'></span>
          </Link>
        </li>
        <li className="mx-5 relative flex h-[100%]">
          <Link
            href="/about/"
            className="border-none pr-[17px] text-white-0 font-titillium after:font-Flaticon after:content-[''] after:text-[8px] after:absolute after:top-[50%] after:mt-[-6px] after:right-[1px] uppercase flex h-[100%] items-center"
          >
            About us
            </Link>
            <ul className='min-w-[290px] top-[100%] left-[-34px] absolute z-10 box-border shadow-md bg-black-0 py-5'>
              <li className='px-[34px]'>
                <Link
                  href="/"
                  className="border-none text-gray-0 font-titillium text-base leading-[30px] py-[5px] block"
                >
                  Company
                </Link>
              </li>
              <li className='px-[34px]'>
                <Link
                  href="/"
                  className="border-none text-gray-0 font-titillium text-base leading-[30px] py-[5px] block"
                >
                  Our Blogs
                </Link>
              </li>
              <li className='px-[34px]'>
                <Link
                  href="/"
                  className="border-none text-gray-0 font-titillium text-base leading-[30px] py-[5px] block"
                >
                  Our Process
                </Link>
              </li>
            </ul>
        </li>
        <li className="mx-5 flex h-[100%]">
          <Link
            className="relative border-none pr-[17px] text-white-0 font-titillium after:font-Flaticon after:content-[''] after:text-[8px] after:absolute after:top-[50%] after:mt-[-6px] after:right-[1px] uppercase flex h-[100%] items-center"
            href="#"
          >
            Our services
          </Link>
        </li>
        <li className="mx-5 flex h-[100%]">
          <Link
            href="/blog/"
            className="border-none text-white-0 font-titillium flex items-center uppercase h-[100%]"
          >
            <img
              className='w-6 h-auto '
              src={`${router.basePath}/assets/images/xseries-icon.png`}
              alt="Banner background image"
            />
            <strong className='py-[2px] px-[8px] text-[15px]'>Series app</strong>
          </Link>
        </li>
        <li className="mx-5 flex h-[100%]">
          <Link
            href="/blog/"
            className="border-none text-white-0 font-titillium uppercase flex h-[100%] items-center"
          >
            Portfolio
          </Link>
        </li>
        <li className="mx-5 flex h-[100%]">
          <Link
            href="/blog/"
            className="border-none text-white-0 font-titillium uppercase flex h-[100%] items-center"
          >
            Get a quote
          </Link>
        </li>
        <li className="mx-5 flex h-[100%]">
          <Link
            href="/blog/"
            className="relative border-none pr-[17px] text-white-0 font-titillium after:font-Flaticon after:content-[''] after:text-[8px] after:absolute after:top-[50%] after:mt-[-6px] after:right-[1px] uppercase flex h-[100%] items-center"
          >
            Careers
          </Link>
        </li>
        <li className="mx-5 flex h-[100%]">
          <Link
            href="/blog/"
            className="border-none text-white-0 font-titillium uppercase flex h-[100%] items-center"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
    <div className='w-[5%]'>
    </div>
  </header>
  )
};

export default MainMenu;