'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import FullScreenGallery from '../FullScreenGallery';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { Product } from '@/app/types';
import ProductItem from './ProductItem';
import ScrollReveal from '../ui/ScrollReveal';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const setIsBodyScrollLocked = useLockBodyScroll();

  const handleImageClick = (images: string[] | null) => {
    setModalImages(images);
    setIsBodyScrollLocked(true);
  };

  const closeFullScreenGallery = () => {
    setModalImages(null);
    setIsBodyScrollLocked(false);
  };

  return (
    <>
      <div className='-mx-[10vw] text-left mt-10 sm:hidden'>
        <Swiper
          className='w-full'
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={'auto'}
          centeredSlides={false}
          grabCursor={true}
          style={{ paddingLeft: '10vw', paddingRight: '20%' }}>
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductItem
                key={index}
                product={product}
                onClick={() => handleImageClick(product.gallery || [product.thumbSrc])}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='mt-10 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 text-left gap-4 w-full'>
        {products.map((product, index) => (
          <ScrollReveal key={index} delay={index * 120}>
            <ProductItem
              product={product}
              onClick={() => handleImageClick(product.gallery || [product.thumbSrc])}
            />
          </ScrollReveal>
        ))}
      </div>
      {modalImages && <FullScreenGallery images={modalImages} onClose={closeFullScreenGallery} />}
    </>
  );
};

export default ProductList;
