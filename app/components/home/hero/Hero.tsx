import React from 'react';
import styles from './styles.module.css';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <>
      <section id='hero' className={`${styles['hero-height']} h-screen`}>
        <HeroImages />
      </section>
    </>
  );
};

export default Hero;
