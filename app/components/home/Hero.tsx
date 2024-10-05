import React from 'react';
import Image from 'next/image';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <>
      {/* <HeroImages />
      <div className='flex flex-col items-center relative z-10'>
        <Logo />
        <p className='text-xl mt-2 mb-4'>Psyechedlic prog metal from Auckland, New Zealand</p>
        <MyLink
          type='button-regular'
          target='_blank'
          href='https://shepherdsofcassini.bandcamp.com/album/helios-forsaken'>
          Listen
        </MyLink>
      </div> */}
      <div id='hero' className='h-screen border border-red-600 w-full'>
        <h1>Hero</h1>
      </div>
    </>
  );
};

export default Hero;
