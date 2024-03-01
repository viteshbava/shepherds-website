'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    path: '/imgs/helios-front-cover.png',
    alt: 'Helios Forsaken album cover',
  },
  {
    path: '/imgs/selftitled-front-cover.png',
    alt: 'Self titled album cover',
  },
  {
    path: '/imgs/helios-band.png',
    alt: 'Helios Forsaken album art picture of band members',
  },
  {
    path: '/imgs/helios-back-cover.png',
    alt: 'Helios Forsaken back cover',
  },
  {
    path: '/imgs/helios-inside-image.png',
    alt: 'Helios Forsaken inside image',
  },
];

const HeroImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleImageClick = () => {
    if (intervalId) clearInterval(intervalId);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    const newInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    setIntervalId(newInterval);
  };

  useEffect(() => {
    const newInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change slide every 5 seconds
    setIntervalId(newInterval);
    return () => {
      if (newInterval) clearInterval(newInterval);
    };
  }, []);

  return (
    <div
      onClick={handleImageClick}
      className='sm:grow relative aspect-square w-4/5 sm:w-auto max-h-[1000px] z-0'>
      {images.map((image, index) => {
        let scale = 1.5;
        if (index === currentIndex) scale = 1;
        if (index === currentIndex - 1) scale = 0.7;
        if (currentIndex === 0 && index === images.length - 1) scale = 0.7;
        return (
          <Image
            key={index}
            src={image.path}
            alt={image.alt}
            width={1000}
            height={1000}
            className={`absolute top-0 left-0 w-full h-full transition duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `scale(${scale})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default HeroImages;
