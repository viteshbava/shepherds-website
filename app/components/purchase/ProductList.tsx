'use client';

import { useRef, useState } from 'react';
import FullScreenGallery from '../FullScreenGallery';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { Image, Product } from '@/app/types';
import ProductItem from './ProductItem';
import ScrollReveal from '../ui/ScrollReveal';

interface ProductListProps {
  products: Product[];
}

const toImages = (urls: string[]): Image[] =>
  urls.map((url) => ({ url, altText: '' }));

const ProductList = ({ products }: ProductListProps) => {
  const [modalImages, setModalImages] = useState<Image[] | null>(null);
  const setIsBodyScrollLocked = useLockBodyScroll();
  const scrollRef = useRef<HTMLUListElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = scrollRef.current!.scrollLeft;
    scrollRef.current!.style.scrollSnapType = 'none';
    scrollRef.current!.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    scrollRef.current!.scrollLeft = scrollLeft.current - (e.clientX - startX.current);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    scrollRef.current!.style.scrollSnapType = '';
    scrollRef.current!.style.scrollBehavior = '';
  };

  const handleImageClick = (images: Image[] | null) => {
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
        <ul
          ref={scrollRef}
          className='flex gap-5 overflow-x-auto cursor-grab scroll-pl-[10vw]
                     snap-x snap-mandatory scroll-smooth select-none
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}>
          {products.map((product, index) => (
            <li key={index} className='shrink-0 w-[70vw] snap-start first:ml-[10vw] last:mr-[20%]'>
              <ProductItem
                product={product}
                onClick={() => handleImageClick(toImages(product.gallery || [product.thumbSrc]))}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-10 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 text-left gap-4 w-full'>
        {products.map((product, index) => (
          <ScrollReveal key={index} delay={index * 120}>
            <ProductItem
              product={product}
              onClick={() => handleImageClick(toImages(product.gallery || [product.thumbSrc]))}
            />
          </ScrollReveal>
        ))}
      </div>
      {modalImages && <FullScreenGallery images={modalImages} onClose={closeFullScreenGallery} />}
    </>
  );
};

export default ProductList;
