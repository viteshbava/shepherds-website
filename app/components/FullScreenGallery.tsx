import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { HamburgerButton } from './header/HamburgerButton';

interface FullscreenImageProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef(0); // useRef to store the starting touch position

  const handleNavigation = useCallback(
    (direction: 'prev' | 'next') => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'next') {
          return (prevIndex + 1) % images.length;
        } else {
          return (prevIndex - 1 + images.length) % images.length;
        }
      });
    },
    [images.length]
  );

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        handleNavigation('prev');
      } else if (event.key === 'ArrowRight') {
        handleNavigation('next');
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touchEndX = event.touches[0].clientX;
      const swipeThreshold = 50; // Minimum distance to consider it a swipe

      if (touchStartX.current - touchEndX > swipeThreshold) {
        handleNavigation('next'); // Swipe left
      } else if (touchEndX - touchStartX.current > swipeThreshold) {
        handleNavigation('prev'); // Swipe right
      }
    };

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [onClose, handleNavigation]);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
      <div className='fixed z-50 top-0 right-0 pr-2 h-[4.5rem] sm:h-24 flex flex-col justify-center'>
        <button
          aria-label='Close gallery'
          onClick={onClose}
          className='flex justify-center items-center focus:outline-none w-14 h-14 sm:w-16 sm:h-16 rounded-full transition'>
          <HamburgerButton closed={false} />
        </button>
      </div>
      <div className='relative z-40 max-w-4xl w-full h-[80vh] flex items-center justify-center'>
        <button
          aria-label='Previous image'
          className='h-full px-4 text-white text-2xl'
          onClick={() => handleNavigation('prev')}>
          &#10094;
        </button>
        <div className='relative flex-grow w-full h-full'>
          <Image
            src={images[currentIndex]}
            alt='Shepherds of Cassini gallery photo'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-contain transition-opacity duration-300 opacity-100'
          />
        </div>
        <button
          aria-label='Next image'
          className='h-full px-4 text-white text-2xl'
          onClick={() => handleNavigation('next')}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default FullscreenImage;
