'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BackgroundImageProps {
  url: string;
  altText: string;
}

const BackgroundImage = ({ url, altText }: BackgroundImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='absolute top-0 left-0 aspect-square w-full min-h-screen'>
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
  );
};

export default BackgroundImage;
