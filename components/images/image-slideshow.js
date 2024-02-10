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
import classes from './image-slideshow.module.css';

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
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
