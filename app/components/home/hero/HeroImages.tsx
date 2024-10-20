'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (images.length > 1 && loaded) {
      const newInterval = setInterval(() => {
        if (!isHovered) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
      }, 3000);
      return () => {
        clearInterval(newInterval);
      };
    }
  }, [images.length, isHovered, loaded]);

  const onFirstImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={`relative aspect-square max-w-full max-h-full w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {images.map((image, index) => (
        <Image
          key={index}
          priority={index === 0}
          src={image}
          alt={altText}
          className={`object-contain rounded transition-opacity duration-300 ease-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${images.length > 1 ? 'cursor-pointer' : ''}`}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          onLoad={index === 0 ? onFirstImageLoad : undefined}
        />
      ))}
    </div>
  );
};

export default HeroImages;

// const HeroImages = ({ images, altText }: HeroImagesProps) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className={`relative aspect-square max-w-full max-h-full w-full`}>
//       <Image
//         priority
//         src={images[0]}
//         alt={altText}
//         className={`object-contain rounded transition-opacity duration-300 ease-out ${
//           loaded ? 'opacity-100' : 'opacity-0'
//         }`}
//         fill
//         sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
//         onLoad={() => setLoaded(true)}
//       />
//     </div>
//   );
// };

// export default HeroImages;
