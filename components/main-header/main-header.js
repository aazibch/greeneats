import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from './nav-link';
import { getServerSession } from 'next-auth';
import config from '@/app/api/auth/[...nextauth]/config';
import { redirect } from 'next/navigation';
import LogoutButton from './logout-button';

export default async function MainHeader() {
  const session = await getServerSession(config);

  return (
    <>
      <header className={classes.header}>
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
      </header>
    </>
  );
}
