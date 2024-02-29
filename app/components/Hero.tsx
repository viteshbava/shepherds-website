import React from 'react';
import Image from 'next/image';
import Logo from './Logo';
import MyLink from './ui/MyLink';

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
      <p className='mt-6'>Psyechedlic prog metal from Auckland, New Zealand</p>
      <MyLink type='button-regular' href='#'>
        Listen
      </MyLink>
    </div>
  );
};

export default Hero;
