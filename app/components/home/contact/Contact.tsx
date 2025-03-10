'use client';

import React, { useState } from 'react';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';
import ImageGrid from './ImageGrid';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import FullScreenGallery from '../../FullScreenGallery';
import { IconNames } from '@/app/types';

const Contact = ({ images }: { images: string[] }) => {
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
    <Section id='contact' className='my-24 items-center z-auto'>
      <h2 className='gold-heading-section text-3xl mb-12 pb-2 w-full border-white/50 border-b-[1px]'>
        Contact
      </h2>
      <ButtonLink
        isExternal
        href='mailto:shepherdsofcassini@gmail.com'
        ariaLabel='Send email to shepherdsofcassini@gmail.com'
        icon={IconNames.Email}
        className='w-80 max-w-full'>
        shepherdsofcassini@gmail.com
      </ButtonLink>
      <div className='w-full mt-12'>
        <ImageGrid images={images} onClickImage={handleImageClick} />
        {isFullscreen && (
          <FullScreenGallery
            images={images}
            initialIndex={activeIndex}
            onClose={closeFullScreenGallery}
          />
        )}
      </div>
    </Section>
  );
};

export default Contact;
