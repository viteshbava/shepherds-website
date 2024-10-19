'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

interface BackgroundImageProps {
  url: string;
  altText: string;
}

const BackgroundImage = ({ url, altText }: BackgroundImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const target = useRef<HTMLDivElement | null>(null);

  const backgroundImage = useParallax<HTMLDivElement>({
    speed: 60,
    targetElement: target.current || undefined,
  });

  return (
    <ParallaxProvider>
      <div ref={target} className='absolute top-0 left-0 w-full min-h-screen max-h-full'>
        <div ref={backgroundImage.ref} className='absolute aspect-square min-w-full min-h-full'>
          <Image
            priority
            src={url}
            alt={altText}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className={`absolute top-0 left-0 w-full object-cover blur-sm transition-opacity duration-300 ease-in-out ${
              isLoaded ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            }}
            onLoadingComplete={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default BackgroundImage;
