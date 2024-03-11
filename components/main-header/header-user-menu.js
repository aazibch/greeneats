'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
  useClick
} from '@floating-ui/react';
import { signOut, useSession } from 'next-auth/react';

export default function HeaderUserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(5), flip(), shift()],
    whileElementsMounted: autoUpdate
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role
  ]);

  const logoutButtonClickHandler = () => {
    signOut();
  };

  let content;

  if (session) {
    content = (
      <>
        <button
          ref={refs.setReference}
          {...getReferenceProps()}
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
        {/* User dropdown */}
        {isOpen && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className="z-50 text-base list-none divide-y rounded-lg shadow bg-gray-700 divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-white">
                  {session.user.fullName}
                </span>
                <span className="block text-sm truncate text-gray-400">
                  {session.user.email}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <button
                    onClick={logoutButtonClickHandler}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </FloatingFocusManager>
        )}
      </>
    );
  } else {
    content = (
      <Link
        href="/auth/login"
        className="border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 border-gray-200 text-gray-100 hover:text-white hover:border-gray-700 hover:bg-gray-700"
      >
        Login
      </Link>
    );
  }

  return (
    // User button
    <div className="flex items-center justify-center md:order-2 ml-auto md:ml-8 md:mr-0 mr-2">
      {content}
    </div>
  );
}
