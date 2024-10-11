'use client';

import React, { useState } from 'react';
import Section from '../../ui/Section';
import ButtonLink from '../../ui/ButtonLink';
import ImageGrid from './ImageGrid';
import FullScreenGallery from './FullScreenGallery';

const Contact = ({ images }: { images: string[] }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setIsFullscreen(true);
  };

  return (
    <Section id='contact' className='mt-24 items-center'>
      <h2 className='mb-6 text-2xl pb-2 w-full border-white/50 border-b-[1px]'>Contact</h2>
      <ButtonLink
        isExternal
        href='mailto:shepherdsofcassini@gmail.com'
        ariaLabel='Send email to shepherdsofcassini@gmail.com'
        className='w-80 max-w-full bg-red_dim uppercase text-sm'>
        shepherdsofcassini@gmail.com
      </ButtonLink>
      <div>
        <ImageGrid images={images} onClickImage={handleImageClick} />
        {isFullscreen && (
          <FullScreenGallery
            images={images}
            initialIndex={activeIndex}
            onClose={() => setIsFullscreen(false)}
          />
        )}
      </div>
    </Section>
  );
};

export default Contact;
