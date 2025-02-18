'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useState } from 'react';
import FullScreenGallery from './FullScreenGallery';

export interface CarouselItem {
  thumbSrc: string;
  gallery?: string[];
  alt: string;
  caption?: React.ReactNode;
}

interface CarouselProps {
  carouselItems: CarouselItem[];
}

const Carousel = ({ carouselItems }: CarouselProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <Swiper
        className='w-full'
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={'auto'}
        centeredSlides={false}
        grabCursor={true}
        style={{ paddingLeft: '10vw', paddingRight: '20%' }}>
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='text-left'>
              <button className='relative aspect-square w-full'>
                <Image
                  src={item.thumbSrc}
                  alt='Physical album image'
                  className='object-cover'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
                />
              </button>
              {item.caption && <div className='mt-2'>{item.caption}</div>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {isFullscreen && <FullScreenGallery images={images} onClose={closeFullScreenGallery} />}
    </>
  );
};

export default Carousel;
