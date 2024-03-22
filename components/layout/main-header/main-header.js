'use client';

import { usePathname } from 'next/navigation';

import HeaderLogo from './header-logo';
import HeaderUserMenu from './header-user-menu';
import HeaderNavigation from './header-navigation';
import Container from '../container';

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <nav className="border-gray-200 bg-green-600">
        <Container>
          <div className="flex flex-wrap items-center justify-center mx-auto py-5">
            <HeaderLogo />
            {!path.startsWith('/auth/') && <HeaderUserMenu />}
            <HeaderNavigation />
          </div>
        </Container>
      </nav>
    </>
  );
}
