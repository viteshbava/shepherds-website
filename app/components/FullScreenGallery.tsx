import { useEffect, useState } from 'react';
import Image from 'next/image';
import { HamburgerButton } from './header/HamburgerButton';

interface FullscreenImageProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

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
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleNavigation = (direction: 'prev' | 'next') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

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
