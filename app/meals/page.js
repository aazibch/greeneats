import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'Meals | GreenEats',
  description: 'Browse the delicious meals shared by our community.'
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Cruelty-free meals, curated{' '}
          <span className={classes.highlight}>by and for you.</span>
        </h1>
        <p>Pick an Earth-friendly meal to cook or share your own cuisine!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share a Recipe</Link>
        </p>
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
