'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HeaderNavigation() {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  const toggleMobileNavigationClickHandler = () => {
    setShowMobileNavigation(
      (prevShowMobileNavigation) => !prevShowMobileNavigation
    );
  };

  return (
    <>
      <button
        onClick={toggleMobileNavigationClickHandler}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${
          showMobileNavigation ? '' : 'hidden'
        } w-full md:block md:w-auto ml-auto`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-white rounded bg-gray-700 md:bg-transparent md:text-gray-700 md:p-0 "
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 "
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
