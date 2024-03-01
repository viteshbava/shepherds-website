import React from 'react';
import Image from 'next/image';
import Logo from './Logo';
import MyLink from './ui/MyLink';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <>
      <HeroImages />
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
