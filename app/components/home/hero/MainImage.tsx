'use client';
import { useState } from 'react';
import Image from 'next/image';

interface MainImageProps {
  imgUrl: string;
  altText: string;
  className?: string;
}

const MainImage = ({ imgUrl, altText }: MainImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative aspect-square max-w-full max-h-full w-full`}>
      <Image
        priority
        src={imgUrl}
        alt={altText}
        className={`object-contain rounded transition-opacity duration-300 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default MainImage;