'use client';

import { useState } from 'react';
import Link from 'next/link';

import classes from './login-form.module.css';
import { signIn } from 'next-auth/react';
import { redirectAfterAuth } from '@/lib/actions';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false
    });

    if (res.error) {
      return setErrorMessage(res.error);
    }

    if (res.status === 200) {
      redirectAfterAuth();
    }
  };

  return (
    <form
      className="max-w-[50rem]"
      onSubmit={submitFormHandler}
      action="http://localhost:3000/api/auth/callback/credentials"
      method="POST"
    >
      <div className="mb-5">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="password"
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
        />
      </div>
      <div>
        <button
          type="submit"
          class="focus:outline-none text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800"
        >
          Login
        </button>
        <Link
          href="/auth/signup"
          className="inline-block py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-2 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
        >
          Signup Instead
        </Link>
      </div>
      <div className="h-4">{errorMessage && <p>{errorMessage}</p>}</div>
    </form>
  );
}
