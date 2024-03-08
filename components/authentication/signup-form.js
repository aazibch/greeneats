'use client';

import { useFormState } from 'react-dom';

import { signup } from '@/lib/actions';
import classes from './signup-form.module.css';

export default function SignupForm() {
  const [state, formAction] = useFormState(signup, { message: null });

  return (
    <form className={classes.form} action={formAction}>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Username</label>
          <input type="text" id="username" name="username" required />
        </p>
        <p>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </p>
      <p>
        <label htmlFor="password-confirmation">Password Confirmation</label>
        <input
          type="password"
          id="password-confirmation"
          name="passwordConfirmation"
          required
        />
      </p>
      <div>
        {state.message && <p>{state.message}</p>}
        <p className={classes.actions}>
          <button>Signup</button>
        </p>
      </div>
    </form>
  );
}
