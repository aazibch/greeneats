import { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { config } from 'dotenv';

export const metadata = {
  title: 'Meals | GreenEats',
  description: 'Browse the delicious meals shared by our community.'
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  const session = await getServerSession(config);

  let ctaElement = <Link href="/meals/share">Share a Recipe</Link>;

  if (!session) {
    ctaElement = <Link href="/meals/share">Sign up and share a recipe</Link>;
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Cruelty-free meals, curated{' '}
          <span className={classes.highlight}>by and for you.</span>
        </h1>
        <p>Pick an Earth-friendly meal to cook or share your own cuisine!</p>
        <div className={classes.cta}>{ctaElement}</div>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
