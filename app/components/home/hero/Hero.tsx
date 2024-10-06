import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section id='hero' className={`${styles['hero-height']} h-screen`}>
        <h1>Hero</h1>
      </section>
    </>
  );
};

export default Hero;
