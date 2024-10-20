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
    // Clear the interval if the component unmounts or dependencies change
    if (intervalId) clearInterval(intervalId);

    // Start the loop when the image is loaded and not hovered
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
    // Trigger the loop as soon as the first image loads
    setLoaded(true);
  };

  const handleClick = () => {
    // Move to the next image on click
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    // Restart the interval after the click, unless hovered
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
        setIsHovered(true);
        if (intervalId) clearInterval(intervalId); // Pause the loop when hovered
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        // Resume the loop if not hovered
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
          onClick={handleClick} // Click handler to go to the next image
        />
      ))}
    </div>
  );
};

export default HeroImages;
