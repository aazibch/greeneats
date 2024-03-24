import { getServerSession } from 'next-auth';

import config from '@/app/api/auth/[...nextauth]/config';
import LoginForm from '@/components/authentication/login-form';
import Container from '@/components/layout/container';

export const metadata = {
  title: 'Login | GreenEats',
  description: 'Log into your account.'
};

export default async function LoginPage() {
  const session = await getServerSession(config);

  let userInfo;

  if (session) {
    userInfo = <p>{session.user.email}</p>;
  }

  return (
    <Container className="h-full flex items-center">
      <div className="p-4 w-full">
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
