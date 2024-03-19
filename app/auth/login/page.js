import LoginForm from '@/components/authentication/login-form';
import classes from './page.module.css';
import { getServerSession } from 'next-auth';
import config from '@/app/api/auth/[...nextauth]/config';
import Container from '@/components/layout/container';

export default async function LoginPage() {
  const session = await getServerSession(config);

  let userInfo;

  if (session) {
    userInfo = <p>{session.user.email}</p>;
  }

  return (
    <Container className="h-full max-w-[70rem] flex items-center">
      <div className="w-full">
        <header className="pb-10">
          <h1 className="text-green-500 text-3xl">Login</h1>
        </header>
        <main>
          <LoginForm />
        </main>
        {userInfo}
      </div>
    </Container>
  );
}
