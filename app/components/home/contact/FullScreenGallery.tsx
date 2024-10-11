import { useState } from 'react';
import Image from 'next/image';

interface FullscreenImageProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [fading, setFading] = useState(false);

  const handleNavigation = (direction: 'prev' | 'next') => {
    setFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'next') {
          return (prevIndex + 1) % images.length;
        } else {
          return (prevIndex - 1 + images.length) % images.length;
        }
      });
      setFading(false);
    }, 300); // Duration of fade-out animation
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
      <button className='absolute top-4 right-4 text-white text-3xl' onClick={onClose}>
        &times;
      </button>
      <div className='relative max-w-4xl w-full h-[80vh] flex items-center justify-center'>
        <button
          className='absolute left-0 h-full px-4 text-white text-2xl'
          onClick={() => handleNavigation('prev')}>
          &#10094;
        </button>
        <div className={`transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src={`/gallery/${images[currentIndex]}`}
            alt={`Fullscreen Image ${currentIndex + 1}`}
            fill
            objectFit='contain'
            className='w-full h-full'
          />
        </div>
        <button
          className='absolute right-0 h-full px-4 text-white text-2xl'
          onClick={() => handleNavigation('next')}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default FullscreenImage;
