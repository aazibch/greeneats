'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

import { recipeSchema } from './schemas';
import config from '@/app/api/auth/[...nextauth]/config';

export async function shareMeal(prevState, formData) {
  const session = await getServerSession(config);

  if (!session) {
    throw new Error('Session not found!');
  }

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions')
  };

  const { error } = recipeSchema.validate(meal);

  if (error) {
    return {
      message: error.details[0].message
    };
  }

  meal.image = formData.get('image');

  if (!meal.image || meal.image.size === 0) {
    return {
      message: 'No image found.'
    };
  }

  meal.creator = session.user.id;

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}
