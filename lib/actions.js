'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

import { signupSchema } from './schemas';
import dbConnect from './dbConnect';
import User from '@/models/User';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error('Invalid input.');

    return {
      message: 'Invalid input.'
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}

const getDublicateFieldErrorForEmail = () => {
  return { message: 'An account with the same email address already exists.' };
};

const getDublicateFieldErrorForUsername = () => {
  return { message: 'An account with the same username already exists.' };
};

export async function signup(prevState, formData) {
  try {
    const user = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirmation: formData.get('passwordConfirmation')
    };

    const { error, value } = signupSchema.validate(user);

    if (error) {
      return { message: error.details[0].message };
    }

    dbConnect();
    await User.create(user);
  } catch (err) {
    if ('keyPattern' in err && Object.keys(err.keyPattern)[0] === 'email') {
      return getDublicateFieldErrorForEmail();
    } else if (
      'keyPattern' in err &&
      Object.keys(err.keyPattern)[0] === 'username'
    ) {
      return getDublicateFieldErrorForUsername();
    }

    throw err;
  }

  redirect('/');
}

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}
