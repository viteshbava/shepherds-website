'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import BlurImage from './BlurImage';
import { HamburgerButton } from './header/HamburgerButton';
import { Image } from '@/app/types';

interface FullscreenImageProps {
  images: Image[];
  initialIndex?: number;
  onClose: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isSwiping = useRef(false);

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [isTransitioning, images.length]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [isTransitioning, images.length]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        goPrev();
      } else if (event.key === 'ArrowRight') {
        goNext();
      } else if (event.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button'
        ) as NodeListOf<HTMLElement>;
        if (!focusableElements || focusableElements.length === 0) return;

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (!modalRef.current?.contains(document.activeElement)) {
          event.preventDefault();
          firstFocusable.focus();
        } else if (event.shiftKey && document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeydown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    isSwiping.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    const SWIPE_THRESHOLD = 50;
    if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      goNext();
    } else if (touchDeltaX.current > SWIPE_THRESHOLD) {
      goPrev();
    }
  };

  return (
    <div ref={modalRef} className='fixed inset-0 bg-black/80 flex justify-center items-center z-50'>
      <div className='fixed z-50 top-0 right-0 pr-2 h-[4.5rem] sm:h-24 flex flex-col justify-center'>
        <button
          ref={closeButtonRef}
          aria-label='Close gallery'
          onClick={onClose}
          className='flex justify-center items-center focus:outline-none pointer-fine:focus-visible:ring-2 pointer-fine:focus-visible:ring-white/60 w-14 h-14 sm:w-16 sm:h-16 rounded-full transition hover:opacity-70'>
          <HamburgerButton closed={false} />
        </button>
      </div>
      <button
        aria-label='Previous image'
        onClick={goPrev}
        className='absolute left-0 text-white text-3xl z-50 p-4 hover:opacity-70'>
        &#10094;
      </button>
      <button
        aria-label='Next image'
        onClick={goNext}
        className='absolute right-0 text-white text-3xl z-50 p-4 hover:opacity-70'>
        &#10095;
      </button>
      <div className='relative z-40 max-w-4xl w-[75%] h-[80vh] overflow-hidden'>
        <div
          className='flex h-full transition-transform duration-300 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={() => setIsTransitioning(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {images.map((image, index) => (
            <div key={index} className='relative w-full h-full shrink-0'>
              <BlurImage
                src={image.url}
                alt={image.altText}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullscreenImage;
