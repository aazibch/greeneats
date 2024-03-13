'use client';

import { usePathname } from 'next/navigation';

import HeaderLogo from './header-logo';
import HeaderUserMenu from './header-user-menu';
import HeaderNavigation from './header-navigation';

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <nav className="border-gray-200 bg-green-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <HeaderLogo />
          {/* <div className="flex items-center ml-auto"> */}
          {!path.startsWith('/auth/') && <HeaderUserMenu />}
          <HeaderNavigation />
          {/* </div> */}
        </div>
      </nav>
    </>
  );
}
