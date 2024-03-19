import Link from 'next/link';

import Stack from '@/components/layout/stack/stack';
import StackItem from '@/components/layout/stack/stack-item';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function HeroSection() {
  return (
    <section className="my-10">
      <Stack>
        <StackItem>
          <div className="m-auto max-w-[50rem] h-[40rem]">
            <ImageSlideshow />
          </div>
        </StackItem>
        <StackItem>
          <div className="flex items-center h-full">
            <div>
              <h2 className="text-4xl font-extrabold uppercase mb-2">
                For the conscientious eater
              </h2>
              <p className="text-2xl mb-6 font-normal text-gray-400">
                Vegan and vegetarian dishes from all over the world, tailored to
                Pakistani users.
              </p>
              <div>
                <Link
                  href="/community"
                  className="inline-block text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-base px-5 py-3 text-center me-2 mb-2"
                >
                  Join the Community
                </Link>
                <Link
                  href="/meals"
                  className="inline-block py-3 px-5 me-2 mb-2 text-base font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-2 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                >
                  Explore Recipes
                </Link>
              </div>
            </div>
          </div>
        </StackItem>
      </Stack>
    </section>
  );
}
