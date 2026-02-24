'use client';

import { useEffect, useState } from 'react';
import BlurImage from './BlurImage';
import { HamburgerButton } from './header/HamburgerButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import useLockBodyScroll from '../hooks/useLockBodyScroll';

interface FullscreenImageProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ images, initialIndex = 1, onClose }) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        document
          .querySelector('.custom-prev')
          ?.dispatchEvent(new Event('click', { bubbles: true }));
      } else if (event.key === 'ArrowRight') {
        document
          .querySelector('.custom-next')
          ?.dispatchEvent(new Event('click', { bubbles: true }));
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
      <div className='fixed z-50 top-0 right-0 pr-2 h-[4.5rem] sm:h-24 flex flex-col justify-center'>
        <button
          aria-label='Close gallery'
          onClick={onClose}
          className='flex justify-center items-center focus:outline-none w-14 h-14 sm:w-16 sm:h-16 rounded-full transition hover:opacity-70'>
          <HamburgerButton closed={false} />
        </button>
      </div>
      <button className='custom-prev absolute left-0 text-white text-3xl z-50 p-4 hover:opacity-70'>
        &#10094;
      </button>
      <button className='custom-next absolute right-0 text-white text-3xl z-50 p-4 hover:opacity-70'>
        &#10095;
      </button>
      <div className='relative z-40 max-w-4xl w-full h-[80vh] flex items-center justify-center'>
        <Swiper
          initialSlide={initialIndex}
          spaceBetween={50}
          modules={[Navigation]}
          navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
          loop
          className='w-[75%] h-full'
          pagination={{ clickable: true }}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <BlurImage
                src={image}
                alt='Shepherds of Cassini gallery photo'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-contain'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FullscreenImage;
