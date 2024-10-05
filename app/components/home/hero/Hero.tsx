import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

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
      <section
        id='hero'
        className={`${styles['hero-height']} h-screen border border-red-600 w-full`}>
        <h1>Hero</h1>
      </section>
    </>
  );
};

export default Hero;
