'use client';
import { useState } from 'react';
import Image from 'next/image';

interface MainImageProps {
  imgUrl: string;
  altText: string;
  className?: string;
}

const MainImage = ({ className = '', imgUrl, altText }: MainImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${className} relative aspect-square max-w-full max-h-full`}>
      <Image
        priority
        src={imgUrl}
        alt={altText}
        className={`object-cover rounded transition-opacity duration-300 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
};

export default MainImage;
