'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

import classes from './signup-form.module.css';
import { redirectAfterAuth } from '@/lib/actions';

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials-signup', {
      username,
      email,
      password,
      passwordConfirmation,
      redirect: false
    });

    if (res.error) {
      return setErrorMessage(res.error);
    }

    if (res.status === 200) {
      redirectAfterAuth();
    }
  };

  // const [state, formAction] = useFormState(signup, { message: null });

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="password-confirmation">Password Confirmation</label>
        <input
          type="password"
          id="password-confirmation"
          name="passwordConfirmation"
          required
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </p>
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        <p className={classes.actions}>
          <button>Signup</button>
        </p>
      </div>
    </form>
  );
}
