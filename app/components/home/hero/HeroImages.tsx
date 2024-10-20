'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroImagesProps {
  images: string[];
  altText: string;
  className?: string;
}

const HeroImages = ({ images, altText, className = '' }: HeroImagesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalId) clearInterval(intervalId);
    if (images.length > 1 && loaded && !isHovered) {
      const newInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      setIntervalId(newInterval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [images.length, isHovered, loaded, currentIndex]);

  const onFirstImageLoad = () => {
    setLoaded(true);
  };

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (intervalId) clearInterval(intervalId);
    if (!isHovered) {
      const newInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      setIntervalId(newInterval);
    }
  };

  return (
    <div
      className={`relative aspect-square max-w-full max-h-full w-full ${className}`}
      onMouseEnter={() => {
        console.log('mouse entered');
        const isTouchDevice = window.matchMedia('(hover: none)').matches;
        if (!isTouchDevice) {
          setIsHovered(true);
          if (intervalId) clearInterval(intervalId);
        }
      }}
      onMouseLeave={() => {
        console.log('mouse left');
        setIsHovered(false);
        if (!intervalId && loaded) {
          const newInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000);
          setIntervalId(newInterval);
        }
      }}>
      {images.map((image, index) => (
        <Image
          key={index}
          priority={index === 0}
          src={image}
          alt={altText}
          className={`object-contain rounded transition-opacity duration-300 ease-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${images.length > 1 ? 'cursor-pointer' : ''}`}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          onLoad={index === 0 ? onFirstImageLoad : undefined}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default HeroImages;
