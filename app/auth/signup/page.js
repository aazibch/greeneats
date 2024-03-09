import SignupForm from '@/components/authentication/signup-form';
import classes from './page.module.css';

export const metadata = {
  title: 'Signup | GreenEats',
  description: 'Join the community.'
};

export default function SignupPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Signup and{' '}
          <span className={classes.highlight}>join the community</span>
        </h1>
      </header>
      <main className={classes.main}>
        <SignupForm />
      </main>
    </>
  );
}
