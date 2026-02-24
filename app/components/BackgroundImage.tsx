'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BackgroundImageProps {
  url: string;
  altText: string;
  animation?: 'fixed' | 'home-1' | 'albums-1';
  addBlur?: boolean;
  finalOpacity?: number;
}

const BackgroundImage = ({
  url,
  altText,
  animation = 'fixed',
  addBlur = true,
  finalOpacity = 0.4,
}: BackgroundImageProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let handleScroll = () => {};

    switch (animation) {
      case 'fixed':
        // no animation
        break;
      case 'home-1':
        handleScroll = () => {
          if (imageRef.current) {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            const newOpacity = Math.max(0, finalOpacity - scrollPosition / windowHeight / 4.5);

            gsap.to(imageRef.current, {
              opacity: newOpacity,
              duration: 0.3,
              ease: 'power1.out',
            });
          }
        };
        break;
      case 'albums-1':
        handleScroll = () => {
          if (imageRef.current) {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            const newOpacity = Math.max(0, finalOpacity - scrollPosition / windowHeight / 2.5);
            const translateY = Math.min(0, -scrollPosition / 2.5);

            gsap.to(imageRef.current, {
              opacity: newOpacity,
              y: translateY,
              duration: 0.3,
              ease: 'power1.out',
            });
          }
        };
        break;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animation, finalOpacity]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        {
          opacity: finalOpacity,
          duration: 0.2,
          ease: 'power1.out',
        }
      );
    }
  };

  switch (animation) {
    case 'fixed':
      return (
        <div className='fixed w-screen h-screen top-0 left-0 -z-20'>
          <Image
            priority
            src={url}
            alt={altText}
            fill
            sizes='100vw'
            className={`absolute top-0 left-0 object-cover object-top ${
              addBlur ? 'blur-sm' : ''
            } opacity-0`}
            onLoad={handleImageLoad}
            ref={imageRef}
          />
        </div>
      );
    case 'home-1':
      return (
        <div className='absolute top-0 left-0 w-full min-h-screen max-h-full -z-20'>
          <div
            className={`fixed left-1/2 transform -translate-x-1/2 aspect-square min-w-full min-h-screen ${
              addBlur ? 'blur-sm' : ''
            }`}>
            <Image
              priority
              src={url}
              alt={altText}
              fill
              sizes='100vw'
              className={`absolute top-0 left-0 w-full opacity-0`}
              onLoad={handleImageLoad}
              ref={imageRef}
            />
          </div>
        </div>
      );
    case 'albums-1':
      return (
        <div className='absolute top-0 left-0 w-full min-h-screen max-h-full -z-20'>
          <div
            className={`fixed left-1/2 transform -translate-x-1/2 aspect-square min-w-full min-h-screen ${
              addBlur ? 'blur-sm' : ''
            }`}>
            <Image
              priority
              src={url}
              alt={altText}
              fill
              sizes='100vw'
              className={`absolute top-0 left-0 w-full object-cover opacity-0`}
              onLoad={handleImageLoad}
              ref={imageRef}
            />
          </div>
        </div>
      );
  }
};

export default BackgroundImage;
