'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroImagesProps {
  images: string[];
  altText: string;
  className?: string;
}

const HeroImages = ({ images, altText }: HeroImagesProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative aspect-square max-w-full max-h-full w-full`}>
      <Image
        priority
        src={images[0]}
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

export default HeroImages;
