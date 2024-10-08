import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Section from '../../ui/Section';

const Hero = () => {
  return (
    <Section id='hero' className={`${styles['hero-height']} border border-red-500`}>
      <div className='grid grid-cols-2 gap-4'>
        <div className='w-full'>
          <Image
            priority
            src='/imgs/heresy/heresy-front-cover.webp'
            alt='In Thrall to Heresy front album cover'
            className='aspect-square object-cover'
            width={100}
            height={100}
          />
        </div>
        <div className='w-full'>
          <div>
            <h2>In Thrall to Heresy</h2>
            <p>New album out now</p>
            <h3>Listen | Purchase</h3>
            <div>Bandcamp Player</div>
            <div className='flex flex-col'>
              <button>Bandcamp</button>
              <button>Spotify</button>
              <button>Apple</button>
              <button>YouTube</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
