'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroImages {
  imageUrl: string;
  altText: string | null;
  order: number;
}

const images: HeroImages[] = [
  {
    imageUrl: '/imgs/heresy/heresy-back-cover.webp',
    altText: 'In Thrall to Heresy album back cover image',
    order: 1,
  },
];

const HeroImages = ({ duration = 4000 }: { duration?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let newInterval: NodeJS.Timeout;
    if (images.length > 1) {
      newInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, duration);
    }
    return () => {
      if (newInterval) clearInterval(newInterval);
    };
  }, [duration]);

  return (
    <div className='absolute top-0 left-0 w-full min-h-svh aspect-square z-10'>
      {images.map((image, index) => {
        return (
          <Image
            priority={index === 0}
            key={index}
            src={image.imageUrl}
            alt={image.altText || 'Rotating hero image'}
            fill
            className={`absolute top-0 left-0 w-full transition duration-1000 object-cover opacity-40 blur-sm ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        );
      })}
      <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent'></div>
    </div>
  );
};

export default HeroImages;
