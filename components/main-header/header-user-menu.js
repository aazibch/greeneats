'use client';

import { useState } from 'react';

export default function HeaderUserMenu() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu((prevShowUserMenu) => !prevShowUserMenu);
  };

  return (
    // User button
    <div className="flex items-center md:order-2 ml-auto md:ml-8 md:mr-0 mr-2 relative">
      <button
        onClick={toggleUserMenu}
        type="button"
        className="flex text-sm bg-gray-700 rounded-full md:me-0 focus:ring-2 focus:ring-gray-700"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://res.cloudinary.com/aazibch/image/upload/v1692366211/zephyr-messenger/users/default.jpg"
          alt="user photo"
        />
      </button>
      {/* <!-- User dropdown menu --> */}
      <div
        className={`${
          showUserMenu ? '' : 'hidden'
        } z-50 absolute top-10 right-[-0.25rem] w-40 text-base list-none divide-y rounded-lg shadow bg-gray-700 divide-gray-600`}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-white">John Doe</span>
          <span className="block text-sm truncate text-gray-400">
            john@domain.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
