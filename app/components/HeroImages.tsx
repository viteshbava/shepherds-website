'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    path: '/imgs/helios-front-cover.png',
    alt: 'Helios Forsaken album cover',
  },
  {
    path: '/imgs/helios-band.png',
    alt: 'Helios Forsaken album art picture of band members',
  },
];

const HeroImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='sm:grow relative aspect-square w-4/5 sm:w-auto max-h-[1000px]'>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.path}
          alt={image.alt}
          fill
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `scale(${index === currentIndex ? 1 : 0.8})`,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default HeroImages;
