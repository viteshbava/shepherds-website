'use client';

import React, { useState } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import FullScreenGallery from '../FullScreenGallery';
import BlurImage from '../BlurImage';
import ScrollReveal from '../ui/ScrollReveal';
import { Image } from '@/app/types';

interface GalleryProps {
  className?: string;
  images: Image[];
}

const Gallery = ({ className = '', images }: GalleryProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const setIsBodyScrollLocked = useLockBodyScroll();

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
          <ScrollReveal
            key={image.url}
            delay={index * 60}
            className='w-[calc((100%-14px)/2)] sm:w-[calc((100%-14px*2)/3)] lg:w-[calc((100%-14px*5)/6)]'>
            <div
              className='relative aspect-square cursor-pointer w-full hover:scale-[1.02] transition-all duration-200'
              onClick={() => handleImageClick(index)}>
              <BlurImage
                src={image.url}
                alt={image.altText}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='rounded-sm object-cover'
              />
            </div>
          </ScrollReveal>
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
