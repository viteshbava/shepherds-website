'use client';

import React, { useState } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import FullScreenGallery from '../FullScreenGallery';
import Image from 'next/image';

interface GalleryProps {
  className?: string;
  images: string[];
}

const Gallery = ({ className = '', images }: GalleryProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const setIsBodyScrollLocked = useLockBodyScroll();

  // const images = [
  //   '/imgs/heresy/album-gallery/vinyl-test.webp',
  //   '/imgs/heresy/album-gallery/cd-test.avif',
  //   '/imgs/heresy/album-gallery/cd-test.avif',
  //   '/imgs/heresy/album-gallery/cd-test.avif',
  //   '/imgs/heresy/album-gallery/cd-test.avif',
  //   '/imgs/heresy/album-gallery/cd-test.avif',
  //   '/imgs/heresy/album-gallery/cd-test.avif',
  // ];

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setIsFullscreen(true);
    setIsBodyScrollLocked(true);
  };

  const closeFullScreenGallery = () => {
    setIsFullscreen(false);
    setIsBodyScrollLocked(false);
  };

  return (
    <div className={`${className}`}>
      <div className='flex justify-center items-center flex-wrap gap-[14px]'>
        {images.map((image, index) => (
          <div
            key={image}
            className='relative aspect-square cursor-pointer w-[calc((100%-14px)/2)] sm:w-[calc((100%-14px*2)/3)] lg:w-[calc((100%-14px*5)/6)]
 hover:opacity-90'
            onClick={() => handleImageClick(index)}>
            <Image
              src={image}
              alt='Shepherds of Cassini gallery photo'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='rounded-sm object-cover'
            />
          </div>
        ))}
      </div>
      {isFullscreen && (
        <FullScreenGallery
          images={images}
          initialIndex={activeIndex}
          onClose={closeFullScreenGallery}
        />
      )}
    </div>
  );
};

export default Gallery;
