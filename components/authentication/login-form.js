'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import classes from './signup-form.module.css';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

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
      router.push('/');
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
        <p>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
      </div>
      <p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        <p className={classes.actions}>
          <button type="submit">Login</button>
        </p>
      </div>
    </form>
  );
}
