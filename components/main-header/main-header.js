'use client';

import Link from 'next/link';
import Image from 'next/image';

// import classes from './main-header.module.css';
// import NavLink from './nav-link';
// import config from '@/app/api/auth/[...nextauth]/config';
// import { redirect } from 'next/navigation';
// import LogoutButton from './logout-button';
import { useState } from 'react';
import HeaderLogo from './header-logo';
import HeaderUserMenu from './header-user-menu';
import HeaderNavigation from './header-navigation';

export default function MainHeader() {
  return (
    <>
      <nav className="border-gray-200 bg-green-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <HeaderLogo />
          <HeaderUserMenu />
          <HeaderNavigation />
        </div>
      </nav>
    </>
  );
}
