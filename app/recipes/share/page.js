import { getServerSession } from 'next-auth';

import ShareMealForm from '@/components/meals/share-meal-form';
import config from '@/app/api/auth/[...nextauth]/config';
import { notFound } from 'next/navigation';
import Container from '@/components/layout/container';

export const metadata = {
  title: 'Share a Recipe | GreenEats',
  description:
    'Whether it is your own creation or a recipe you learned from your mom, share it with the community!'
};

export default async function ShareMealPage() {
  const session = await getServerSession(config);

  if (!session) {
    notFound();
  }

  return (
    <Container>
      <header className="py-20">
        <h1 className="text-green-500 text-3xl mb-2">Share a Recipe</h1>
        <p className="text-2xl font-normal text-gray-400">
          Whether it is your own creation or a recipe you learned from your mom,
          share it with the community!
        </p>
      </header>

      <ShareMealForm />
    </Container>
  );
}
