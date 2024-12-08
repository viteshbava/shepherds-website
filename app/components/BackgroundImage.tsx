'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BackgroundImageProps {
  url: string;
  altText: string;
  fixed?: boolean;
  addBlur?: boolean;
  finalOpacity?: number;
}

const BackgroundImage = ({
  url,
  altText,
  fixed = false,
  addBlur = true,
  finalOpacity = 0.4,
}: BackgroundImageProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!fixed) {
      const handleScroll = () => {
        if (imageRef.current) {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;

          const newOpacity = Math.max(0, 0.4 - scrollPosition / windowHeight / 2.5);
          const translateY = Math.min(0, -scrollPosition / 2.5);

          gsap.to(imageRef.current, {
            opacity: newOpacity,
            y: translateY,
            duration: 0.3,
            ease: 'power1.out',
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [fixed]);

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

  return fixed ? (
    <div className='fixed w-screen h-screen top-0 left-0 -z-20'>
      <Image
        priority
        src={url}
        alt={altText}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className={`absolute top-0 left-0 object-cover object-top ${
          addBlur ? 'blur-sm' : ''
        } opacity-0`}
        onLoad={handleImageLoad}
        ref={imageRef}
      />
    </div>
  ) : (
    <div className='absolute top-0 left-0 w-full min-h-screen max-h-full -z-20'>
      <div className='fixed left-1/2 transform -translate-x-1/2 aspect-square min-w-full min-h-screen'>
        <Image
          priority
          src={url}
          alt={altText}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className={`absolute top-0 left-0 w-full object-cover ${
            addBlur ? 'blur-sm' : ''
          } opacity-0`}
          onLoad={handleImageLoad}
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
