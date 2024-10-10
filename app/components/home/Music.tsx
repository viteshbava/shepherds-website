import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import musicList from '@/app/data/music/musicList';

const Music = () => {
  return (
    <Section id='music' className='mt-24'>
      <h2 className='text-2xl pb-2 w-full border-white/50 border-b-[1px]'>Music</h2>
      <div className='md:flex flex-wrap justify-center w-full gap-6 mt-6'>
        {[...musicList].reverse().map((release, index) => {
          const year = release?.releaseDate?.getFullYear();
          const caption = `${release.name}${year ? ` (${year})` : ''}`;
          return (
            <div
              key={index}
              className='w-full md:w-[calc((100%-1.5rem*2)/2)] lg:w-[calc((100%-1.5rem*2)/3)] mb-5'>
              <div className='relative aspect-square w-full'>
                <Image
                  priority
                  src={release.frontCover}
                  alt='In Thrall to Heresy album cover'
                  className='object-cover'
                  layout='fill'
                />
              </div>
              <p className='mt-1 w-full'>{caption}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Music;
