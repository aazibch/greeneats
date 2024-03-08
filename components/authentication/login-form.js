'use client';

import { useState } from 'react';
import classes from './signup-form.module.css';
import { getCsrfToken, signIn } from 'next-auth/react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();

    signIn('credentials', { email: email, password: password });
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
        <p className={classes.actions}>
          <button type="submit">Login</button>
        </p>
      </div>
    </form>
  );
}
