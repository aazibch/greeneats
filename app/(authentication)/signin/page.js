import LoginForm from '@/components/authentication/login-form';
import classes from './page.module.css';
import { getServerSession } from 'next-auth';
import config from '@/app/api/auth/[...nextauth]/config';

export default async function SignIn() {
  const session = await getServerSession(config);

  let userInfo;

  if (session) {
    userInfo = <p>{session.user.email}</p>;
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.highlight}>Login</span>
        </h1>
      </header>
      <main className={classes.main}>
        <LoginForm />
      </main>
      {userInfo}
    </>
  );
}
