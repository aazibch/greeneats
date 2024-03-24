import Image from 'next/image';

import Stack from '@/components/layout/stack/stack';
import StackItem from '@/components/layout/stack/stack-item';
import mealImage from '@/assets/home/meal.png';

export default function AboutSection() {
  return (
    <section>
      <Stack>
        <StackItem className="order-2 lg:order-1">
          <div className="text-2xl flex items-center h-full">
            <div>
              <h2 className="text-3xl font-bold uppercase mb-6">
                A movement towards sustainable and compassionate eating
              </h2>
              <p>
                GreenEats is not just another food app; it is a movement towards
                a more sustainable and compassionate way of eating. By choosing
                plant-based recipes, you are making a positive impact on the
                environment and animal welfare. GreenEats empowers you to make
                conscious choices about what you eat, knowing that every meal
                you enjoy is helping to reduce your carbon footprint and reduce
                suffering the world.
              </p>
            </div>
          </div>
        </StackItem>
        <StackItem className="order-1 lg:order-2">
          <div className="h-full flex items-center">
            <div className="flex max-w-[35rem] items-center justify-center m-auto">
              <Image
                className="block w-[full] object-contain"
                src={mealImage}
              />
            </div>
          </div>
        </StackItem>
      </Stack>
    </section>
  );
}
