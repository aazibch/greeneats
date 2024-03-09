import { getServerSession } from 'next-auth';

import classes from './page.module.css';
import ShareMealForm from '@/components/meals/share-meal-form';
import config from '@/app/api/auth/[...nextauth]/config';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Share a Meal | GreenEats',
  description:
    "Whether it's your own creation or a recipe you learned from your mom, share it with the community!"
};

export default async function ShareMealPage() {
  const session = await getServerSession(config);

  if (!session) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share a <span className={classes.highlight}>meal</span>
        </h1>
        <p>
          Whether it&apos;s your own creation or a recipe you learned from your
          mom, share it with the community!
        </p>
      </header>
      <main className={classes.main}>
        <ShareMealForm />
      </main>
    </>
  );
}
