import type { ReactNode } from 'react';

import MainMenu from '@/components/MainMenu';
import type { MenuItem } from '@/libs/interfaces';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const menuData: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    url: '/',
    isExternal: false,
  },
  {
    id: 2,
    label: 'About us',
    url: '/about/',
    isExternal: false,
    children: [
      {
        id: 3,
        label: 'Company',
        url: '',
        isExternal: false,
      },
      {
        id: 4,
        label: 'Our blogs',
        url: '',
        isExternal: false,
      },
      {
        id: 5,
        label: 'Our process',
        url: '',
        isExternal: false,
      },
    ],
  },
  {
    id: 6,
    label: 'Our services',
    url: '',
    isExternal: false,
    children: [
      {
        id: 7,
        label: '3D Rendering Services',
        url: '',
        isExternal: false,
        children: [
          {
            id: 8,
            label: '3D Architectural Renderings',
            url: '',
            isExternal: false,
          },
          {
            id: 9,
            label: 'Biorev 360',
            url: '',
            isExternal: false,
          },
        ],
      },
      {
        id: 10,
        label: 'Web development',
        url: '',
        isExternal: false,
      },
      {
        id: 11,
        label: 'Virtual Reality',
        url: '',
        isExternal: false,
      },
      {
        id: 12,
        label: 'Brand Management',
        url: '',
        isExternal: false,
      },
    ],
  },
  {
    id: 13,
    label: 'Series app',
    url: 'https://xseries360.com/',
    isExternal: true,
  },
  {
    id: 14,
    label: 'Portfolio',
    url: '',
    isExternal: false,
  },
  {
    id: 15,
    label: 'Get a quote',
    url: '',
    isExternal: false,
  },
  {
    id: 16,
    label: 'Careers',
    url: '',
    isExternal: false,
    children: [
      {
        id: 17,
        label: 'Current openings',
        url: '',
        isExternal: false,
      },
      {
        id: 18,
        label: 'Life @ Biorev',
        url: '',
        isExternal: false,
      },
    ],
  },
  {
    id: 19,
    label: 'Contact Us',
    url: '/',
    isExternal: false,
  },
];

const Main = (props: IMainProps) => (
  <>
    <MainMenu items={menuData} />
    <div className="w-full text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <main className="content text-xl">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()}. Made by <span>Biorev</span>.
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  </>
);

export { Main };
