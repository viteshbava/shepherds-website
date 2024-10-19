'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';

interface BackgroundImageProps {
  url: string;
  altText: string;
}

const BackgroundImage = ({ url, altText }: BackgroundImageProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const newOpacity = Math.max(0, 0.4 - scrollPosition / windowHeight / 2.5);
      const translateY = Math.min(0, -scrollPosition / 2.5);

      gsap.to('.background-image', {
        opacity: newOpacity,
        y: translateY,
        duration: 0.3,
        ease: 'power1.out',
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='absolute top-0 left-0 w-full min-h-screen max-h-full'>
      <div className='fixed left-1/2 transform -translate-x-1/2 aspect-square min-w-full min-h-full'>
        <Image
          priority
          src={url}
          alt={altText}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='absolute top-0 left-0 w-full object-cover opacity-40 blur-sm background-image'
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
