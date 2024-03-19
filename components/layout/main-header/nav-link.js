'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './header-navigation.module.css';

export default function NavLink({ href, children }) {
  const path = usePathname();
  const classNames =
    'block py-2 px-3 rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0';

  return (
    <Link
      href={href}
      className={
        (path.startsWith(href) && href !== '/') ||
        (path === '/' && href === '/')
          ? `${classes.active} ${classNames}`
          : classNames
      }
    >
      {children}
    </Link>
  );
}
