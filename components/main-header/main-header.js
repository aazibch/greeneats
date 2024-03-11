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
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
          <HeaderLogo />
          <HeaderUserMenu />
          <HeaderNavigation />
        </div>
      </nav>

      {/* <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food" priority />
          GreenEats
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">The Community</NavLink>
            </li>
            <li>
              {session ? (
                <LogoutButton />
              ) : (
                <NavLink href="/auth/login">Login</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header> */}
    </>
  );
}
