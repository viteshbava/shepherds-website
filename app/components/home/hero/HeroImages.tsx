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
  const isTouchDevice = useRef<boolean>(false);

  useEffect(() => {
    if (isTouchDevice) {
      isTouchDevice.current = window.matchMedia('(hover: none)').matches;
    }
  }, []);

  useEffect(() => {
    if (images.length === 0) return; // Handle empty images
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);

    if (loaded && !isHovered) {
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
      const newInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      setIntervalId(newInterval);
    }
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      onMouseEnter={() => {
        if (!isTouchDevice.current) {
          setIsHovered(true);
          if (intervalId) clearInterval(intervalId);
        }
      }}
      onMouseLeave={() => {
        if (!isTouchDevice.current) {
          setIsHovered(false);
          if (!intervalId && loaded) {
            const newInterval = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000);
            setIntervalId(newInterval);
          }
        }
      }}>
      {images.map((image, index) => (
        <Image
          key={index}
          priority={index === 0}
          src={image}
          alt={altText}
          className={`object-contain rounded transition-opacity duration-700 ease-out opacity-0 ${
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
