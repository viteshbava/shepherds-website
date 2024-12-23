import React from 'react';
import Section from '../ui/Section';
import Image from 'next/image';

const News = () => {
  return (
    <Section id='news' className='mt-24'>
      <h2 className='mb-6 text-2xl pb-2 w-full border-white/50 border-b-[1px]'>News</h2>
      <div className='relative w-full max-w-[500px] aspect-square mx-auto'>
        <Image
          src='/imgs/heresy/heresy-front-cover.png'
          alt='Shepherds of Cassini, In Thrall to Heresy, album cover'
          className='object-cover rounded'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </div>
      <div className='relative w-full max-w-[500px] h-[100px] mx-auto'>
        <Image
          src='/imgs/heresy/album-logo.png'
          alt='Shepherds of Cassini, In Thrall to Heresy, album logo'
          className='object-contain'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 33vw'
        />
      </div>
    </Section>
  );
};

export default News;
