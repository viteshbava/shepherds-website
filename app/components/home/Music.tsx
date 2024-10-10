import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import musicList from '@/app/data/music/musicList';

const Music = () => {
  return (
    <Section id='music' className='mt-24'>
      <h2 className='text-2xl pb-2 w-full border-white/50 border-b-[1px]'>Music</h2>
      <div className='flex flex-wrap justify-center w-full gap-4 mt-6'>
        {[...musicList].reverse().map((release, index) => {
          const year = release?.releaseDate?.getFullYear();
          const caption = `${release.name}${year ? ` (${year})` : ''}`;
          return (
            <div key={index} className='w-[calc((100%-1rem*2)/3)]'>
              <div className='relative aspect-square w-full'>
                <Image
                  priority
                  src={release.frontCover}
                  alt='In Thrall to Heresy album cover'
                  className='object-cover'
                  layout='fill'
                />
              </div>
              <p className='mt-1 w-full text-sm'>{caption}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Music;
