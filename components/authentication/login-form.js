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
      className={classes.form}
      onSubmit={submitFormHandler}
      action="http://localhost:3000/api/auth/callback/credentials"
      method="POST"
    >
      <div className={classes.row}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        <div className={classes.actions}>
          <Link href="/auth/signup">Signup Instead</Link>
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}
