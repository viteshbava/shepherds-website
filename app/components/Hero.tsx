import React from 'react';
import Image from 'next/image';
import Logo from './Logo';
import MyLink from './ui/MyLink';

const Hero = () => {
  return (
    <>
      <div className='sm:grow relative aspect-square w-full sm:w-auto max-h-[1000px]'>
        <Image src='/imgs/helios-front-cover.png' alt='image' fill />
      </div>
      <Logo />
      <p className='mt-2 mb-4'>Psyechedlic prog metal from Auckland, New Zealand</p>
      <MyLink
        type='button-regular'
        target='_blank'
        href='https://shepherdsofcassini.bandcamp.com/album/helios-forsaken'>
        Listen
      </MyLink>
    </>
  );
};

export default Hero;
