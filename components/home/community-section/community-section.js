import Image from 'next/image';

import Stack from '@/components/layout/stack/stack';
import StackItem from '@/components/layout/stack/stack-item';
import communityImage from '@/assets/home/community.png';

export default function CommunitySection() {
  return (
    <section>
      <Stack>
        <StackItem>
          <div className="h-full flex items-center">
            <div className="flex max-w-[35rem] items-center justify-center m-auto">
              <Image
                className="block w-[full] object-contain"
                src={communityImage}
              />
            </div>
          </div>
        </StackItem>
        <StackItem>
          <div className="text-2xl flex items-center h-full">
            <div>
              <h2 className="text-3xl font-bold uppercase mb-6">
                A thriving community
              </h2>
              <p>
                Share your own recipes, tips, and experiences, and connect with
                others who share your love for green cuisine. Whether
                you&apos;re a seasoned chef or a home cook experimenting with
                plant-based ingredients, GreenEats is your platform to showcase
                your culinary creations. Join us on a journey of culinary
                exploration and conscious eating today!
              </p>
            </div>
          </div>
        </StackItem>
      </Stack>
    </section>
  );
}
