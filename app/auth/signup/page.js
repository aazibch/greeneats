import SignupForm from '@/components/authentication/signup-form';
import classes from './page.module.css';
import Container from '@/components/layout/container';

export const metadata = {
  title: 'Signup | GreenEats',
  description: 'Join the community.'
};

export default function SignupPage() {
  return (
    <>
      <Container className="h-full max-w-[70rem] flex items-center">
        <div className="w-full">
          <header className="pb-10">
            <h1 className="text-green-500 text-3xl">Signup</h1>
          </header>
          <main>
            <SignupForm />
          </main>
        </div>
      </Container>
    </>
  );
}
