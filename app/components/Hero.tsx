import React from 'react';
import Image from 'next/image';
import Logo from './Logo';

const Hero = () => {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src='/imgs/helios-front-cover.png'
        alt='image'
        width={1000}
        height={1000}
        className='max-w-lg w-10/12'
      />
      <Logo />
    </div>
  );
};

export default Hero;
