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

// const getDublicateFieldErrorForEmail = () => {
//   return { message: 'An account with the same email address already exists.' };
// };

// const getDublicateFieldErrorForUsername = () => {
//   return { message: 'An account with the same username already exists.' };
// };

// export async function signup(prevState, formData) {
//   try {
//     const user = {
//       username: formData.get('username'),
//       email: formData.get('email'),
//       password: formData.get('password'),
//       passwordConfirmation: formData.get('passwordConfirmation')
//     };

//     const { error, value } = signupSchema.validate(user);

//     if (error) {
//       return { message: error.details[0].message };
//     }

//     await dbConnect();
//     await User.create(user);
//   } catch (err) {
//     if ('keyPattern' in err && Object.keys(err.keyPattern)[0] === 'email') {
//       return getDublicateFieldErrorForEmail();
//     } else if (
//       'keyPattern' in err &&
//       Object.keys(err.keyPattern)[0] === 'username'
//     ) {
//       return getDublicateFieldErrorForUsername();
//     }

//     throw err;
//   }

//   redirect('/');
// }

export async function redirectAfterAuth() {
  revalidatePath('/', 'layout');
  redirect('/');
}
