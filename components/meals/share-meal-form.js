'use client';

import { useFormState } from 'react-dom';

import ImagePicker from '@/components/meals/image-picker';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import { shareMeal } from '@/lib/actions';
import classes from './share-meal-form.module.css';

export default function ShareMealForm() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <form className="max-w-[50rem] overflow-auto p-1" action={formAction}>
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="summary"
          className="block mb-2 text-sm font-medium text-white"
        >
          Summary
        </label>
        <input
          type="text"
          id="summary"
          name="summary"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="instructions"
          className="block mb-2 text-sm font-medium text-white"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          name="instructions"
          rows="10"
          required
        ></textarea>
      </div>
      <ImagePicker label="Dish Image" name="image" />
      <button
        type="submit"
        className="float-right focus:outline-none text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 bg-green-600 hover:bg-green-700 focus:ring-green-800"
      >
        Share
      </button>
      <div className="h-4">{state.message && <p>{state.message}</p>}</div>
    </form>
  );
}
