import Image from 'next/image';
import { notFound } from 'next/navigation';

import Container from '@/components/layout/container';
import { getMeal } from '@/lib/meals';
import Stack from '@/components/layout/stack/stack';
import StackItem from '@/components/layout/stack/stack-item';

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: `${meal.title} | GreenEats`,
    description: meal.summary
  };
}

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return (
    <Container>
      <header className="my-10">
        <Stack>
          <StackItem>
            <div className="relative max-w-[50rem] h-[30rem] rounded-lg overflow-hidden">
              <Image
                className="object-cover"
                src={`https://nextjs-food-users-images.s3.ap-south-1.amazonaws.com/${meal.image}`}
                alt={meal.title}
                fill
              />
            </div>
          </StackItem>
          <StackItem>
            <div className="flex items-center h-full">
              <div>
                <h1 className="text-3xl mb-2">{meal.title}</h1>
                <p className="text-lg mb-4">
                  by{' '}
                  <a
                    className="font-bold"
                    href={`mailto:${meal.creator.email}`}
                  >
                    {meal.creator.fullName}
                  </a>
                </p>
                <p className="mb-3 text-xl text-gray-400">{meal.summary}</p>
              </div>
            </div>
          </StackItem>
        </Stack>
      </header>
      <article
        className="bg-gray-800 border-gray-700 p-8 rounded-lg text-xl"
        dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}
      ></article>
    </Container>
  );
}
