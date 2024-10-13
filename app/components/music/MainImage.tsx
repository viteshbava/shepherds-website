import React from 'react';
import Image from 'next/image';

interface MainImageProps {
  imgUrl: string;
  altText: string;
  className?: string;
}

const MainImage = ({ className = '', imgUrl, altText }: MainImageProps) => {
  return (
    <div className={`${className} relative aspect-square max-w-full max-h-full`}>
      <Image
        priority
        src={imgUrl}
        alt={altText}
        className='object-cover rounded'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>
  );
};

export default MainImage;
