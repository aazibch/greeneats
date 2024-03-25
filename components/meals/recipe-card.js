import Link from 'next/link';
import Image from 'next/image';

export default function RecipeCard({ title, slug, image, summary, creator }) {
  return (
    <div className="flex flex-col border rounded-lg shadow bg-gray-800 border-gray-700 h-full overflow-hidden">
      <div>
        <div className="relative h-[15rem]">
          <Image
            className="object-cover"
            src={`https://nextjs-food-users-images.s3.ap-south-1.amazonaws.com/${image}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="grow p-5 flex flex-col">
        <div className="grow">
          <div className="mb-2">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <p>
              by <span className="font-bold">{creator.fullName}</span>
            </p>
          </div>

          <p className="mb-3 font-normal text-gray-400">{summary}</p>
        </div>
        <div>
          <Link
            href={`/recipes/${slug}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-2 focus:ring-gray-600 focus:outline-none bg-gray-700 hover:border-gray-600 hover:bg-gray-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
