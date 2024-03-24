'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import walnutAndLentilBoloneseImg from '@/assets/walnut-and-lentil-bolognese.jpg';
import vegetableSoupImg from '@/assets/vegetable-soup.jpg';
import huevosRancherosImg from '@/assets/huevos-rancheros.jpg';
import instantPotMacAndCheeseImg from '@/assets/instant-pot-mac-and-cheese.jpg';
import perfectGrilledCheeseImg from '@/assets/perfect-grilled-cheese.jpg';
import vegetarianMeatballsImg from '@/assets/vegetarian-meatballs.jpg';
import coconutCurryRamenImg from '@/assets/coconut-curry-ramen.jpg';

const images = [
  { image: walnutAndLentilBoloneseImg, alt: 'Walnut and Lentil Bolonese' },
  { image: vegetableSoupImg, alt: 'Vegetable Soup' },
  { image: huevosRancherosImg, alt: 'Huevos Rancheros' },
  { image: instantPotMacAndCheeseImg, alt: 'Instant Pot Mac And Cheese' },
  { image: perfectGrilledCheeseImg, alt: 'Perfect Grilled Cheese Sandwich' },
  { image: vegetarianMeatballsImg, alt: 'Vegetarian Meatballs' },
  { image: coconutCurryRamenImg, alt: 'Coconut Curry Ramen' }
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg shadow overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={
            index === currentImageIndex
              ? `z-10 opacity-100 scale-100 translate-x-[0] rotate-[0] w-full h-full object-cover absolute top-[0] left-[0] [transition:all_0.5s_ease-in-out]`
              : 'w-full h-full object-cover absolute top-[0] left-[0] opacity-0 scale-110 -translate-x-4 -rotate-[5deg] [transition:all_0.5s_ease-in-out]'
          }
          alt={image.alt}
        />
      ))}
    </div>
  );
}
