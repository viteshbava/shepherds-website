import React from 'react';
import Section from '../../ui/Section';
import Image from 'next/image';
import BioText from './BioText';

const About = () => {
  return (
    <Section id='about' className='mt-24'>
      <h2 className='mb-6 text-2xl pb-2 w-full border-white/50 border-b-[1px]'>About</h2>
      <div className='relative w-full aspect-[990/560]'>
        <Image
          priority
          src='/imgs/about-photo.webp'
          alt='Band members standing together'
          className='object-cover'
          layout='fill'
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
