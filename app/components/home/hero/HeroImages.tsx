'use client';

import { useEffect, useRef, useState } from 'react';
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

  // Inside your component
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const isTouchDevice = useRef<boolean>(window.matchMedia('(hover: none)').matches).current;

  useEffect(() => {
    if (images.length === 0) return; // Handle empty images
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);

    if (loaded && !isHovered) {
      console.log('SETTING LOOP FROM USEEFFECT!');
      intervalIdRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      setIntervalId(intervalIdRef.current);
    }

    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, [images.length, isHovered, loaded]);

  const onFirstImageLoad = () => {
    setLoaded(true);
  };

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (intervalId) clearInterval(intervalId);
    if (!isHovered) {
      console.log('SETTING LOOP FROM HANDLECLICK!');
      const newInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      setIntervalId(newInterval);
    }
  };

  return (
    <div
      className={`relative aspect-square max-w-full max-h-full w-full ${className}`}
      onMouseEnter={() => {
        if (!isTouchDevice) {
          console.log('mouse entered');
          setIsHovered(true);
          if (intervalId) clearInterval(intervalId);
        }
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) {
          console.log('mouse left');
          setIsHovered(false);
          if (!intervalId && loaded) {
            console.log('SETTING LOOP FROM MOUSELEAVE!');
            const newInterval = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000);
            setIntervalId(newInterval);
          }
        }
      }}>
      <Image
        priority
        src={images[0]}
        alt={altText}
        className='object-cover border border-red-600 rounded-xl'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
      {/* {images.map((image, index) => (
        <Image
          key={index}
          priority={index === 0}
          src={image}
          alt={altText}
          className={`object-contain rounded transition-opacity duration-500 ease-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${images.length > 1 ? 'cursor-pointer' : ''}`}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          onLoad={index === 0 ? onFirstImageLoad : undefined}
          onClick={handleClick}
        />
      ))} */}
    </div>
  );
};

export default HeroImages;
