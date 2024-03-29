'use client';

import { useState } from 'react';
import Link from 'next/link';

import LoadingSpinner from '../ui/loading-spinner';
import { signIn } from 'next-auth/react';
import { redirectAfterAuth } from '@/lib/actions';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setPending(true);

    const res = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false
    });

    setPending(false);

    if (res.error) {
      return setErrorMessage(res.error);
    }

    if (res.status === 200) {
      redirectAfterAuth();
    }
  };

  return (
    <form
      className="max-w-[50rem] p-1"
      onSubmit={submitFormHandler}
      action="http://localhost:3000/api/auth/callback/credentials"
      method="POST"
    >
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="overflow-auto">
        <div className="float-right">
          <button
            disabled={pending}
            type="submit"
            className="focus:outline-none text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800 space-x-1"
          >
            {pending ? (
              <>
                <LoadingSpinner /> <span>Loading...</span>
              </>
            ) : (
              'Login'
            )}
          </button>
          <Link
            href="/auth/signup"
            className="inline-block py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-2 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
          >
            Signup Instead
          </Link>
        </div>
      </div>

      <div className="min-h-6">{errorMessage && <p>{errorMessage}</p>}</div>
    </form>
  );
}
