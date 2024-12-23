import React from 'react';
import Section from '../../ui/Section';
import Image from 'next/image';
import BioText from './BioText';

const About = () => {
  return (
    <Section id='about' className='mt-24'>
      <h2 className='gold-heading-section mb-6 pb-2 w-full border-white/50 border-b-[1px]'>
        About
      </h2>
      <div className='relative w-full aspect-[990/560]'>
        <Image
          src='/imgs/about-photo.webp'
          alt='Shepherds of Cassini band members standing together'
          className='object-cover rounded'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </div>
      <p className='self-start text-left mt-1 text-sm'>
        Shepherds of Cassini is (left to right) Omar Al-Hashimi – Drums, Felix Lun – Violin, Vitesh
        Bava – Bass, Brendan Zwaan – Guitar, Vocals, Keys
      </p>
      <BioText />
    </Section>
  );
};

export default About;
