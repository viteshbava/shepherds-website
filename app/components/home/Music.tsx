import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';

const Music = () => {
  return (
    <Section id='music'>
      <Image
        priority
        src='/imgs/heresy/heresy-front-cover.webp'
        alt='In Thrall to Heresy front album cover'
        className='aspect-square'
        width={100}
        height={100}
      />
    </Section>
  );
};

export default Music;
