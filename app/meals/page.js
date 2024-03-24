import { Suspense } from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import RecipeGrid from '@/components/meals/recipe-grid';
import Container from '@/components/layout/container';
import { getMeals } from '@/lib/meals';
import config from '../api/auth/[...nextauth]/config';
import LoadingSpinner from '@/components/ui/loading-spinner';

export const metadata = {
  title: 'Recipes | GreenEats',
  description: 'Browse through the recipes shared by the community.'
};

async function Meals() {
  const meals = await getMeals();

  return <RecipeGrid recipes={meals} />;
}

export default async function MealsPage() {
  const session = await getServerSession(config);

  let ctaElement = (
    <Link
      href="/meals/share"
      className="focus:outline-none text-white focus:ring-2 font-medium rounded-lg text-base px-5 py-3 me-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800"
    >
      Share a Recipe
    </Link>
  );

  if (!session) {
    ctaElement = (
      <Link
        href="/auth/login"
        className="focus:outline-none text-white focus:ring-2 font-medium rounded-lg text-base px-5 py-3 me-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800"
      >
        Login and Share a Recipe
      </Link>
    );
  }

  return (
    <Container>
      <header className="py-20">
        <h1 className="text-green-500 text-3xl mb-2">Recipes</h1>
        <p className="text-2xl font-normal text-gray-400 mb-8">
          Pick an Earth-friendly meal to cook or share your own cuisine!
        </p>
        {ctaElement}
      </header>

      <div>
        <Suspense
          fallback={
            <div className="flex justify-center">
              <LoadingSpinner size="md" />
            </div>
          }
        >
          <Meals />
        </Suspense>
      </div>
    </Container>
  );
}
