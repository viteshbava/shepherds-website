import React from 'react';
import Image from 'next/image';

interface MainImageProps {
  frontCover: string;
  name: string;
  className?: string;
}

const MainImage = ({ className = '', frontCover, name }: MainImageProps) => {
  return (
    <div className={`${className} relative aspect-square max-w-full max-h-full`}>
      <Image
        priority
        src={frontCover}
        alt={`${name} album cover`}
        className='object-cover'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>
  );
};

export default MainImage;
