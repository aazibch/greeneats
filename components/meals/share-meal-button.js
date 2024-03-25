import { useFormStatus } from 'react-dom';

import LoadingSpinner from '../ui/loading-spinner';

export default function ShareMealButton() {
  const { pending } = useFormStatus();

  return (
    <div className="overflow-auto">
      <button
        disabled={pending}
        type="submit"
        className="float-right focus:outline-none text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 bg-green-600 hover:bg-green-700 focus:ring-green-800 space-x-1"
      >
        {pending ? (
          <>
            <LoadingSpinner /> <span>Loading...</span>
          </>
        ) : (
          'Share'
        )}
      </button>
    </div>
  );
}
