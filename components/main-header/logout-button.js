'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const logoutButtonClickHandler = () => {
    signOut();
  };

  return <button onClick={logoutButtonClickHandler}>Logout</button>;
}
