import React from 'react';
import BlurImage from '../BlurImage';
import Section from '../ui/Section';
import musicList from '@/app/data/music/musicList';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';

const Music = () => {
  return (
    <Section id='music' className='mt-24'>
      <h2 className='gold-heading-section mb-6 pb-2 w-full border-white/50 border-b-[1px]'>
        Music
      </h2>
      <div className='sm:flex flex-wrap justify-center w-full gap-6'>
        {[...musicList].reverse().map((release, index) => {
          const year = release?.releaseDate?.getFullYear();
          const caption = `${release.name}${year ? ` (${year})` : ''}`;
          return (
            <ScrollReveal
              key={index}
              delay={index * 100}
              className='inline-block w-full sm:w-[calc((100%-1.5rem*2)/2)] lg:w-[calc((100%-1.5rem*2)/3)] mb-6 sm:mb-0'>
              <Link
                href={`/music/${release.slug}`}
                className='inline-block w-full hover:scale-[1.02] transition-all duration-200'>
                <div className='relative aspect-square w-full'>
                  <BlurImage
                    src={release.frontCover.url}
                    alt={release.frontCover.altText}
                    className='object-cover rounded'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </div>
                <p className='mt-1 w-full'>{caption}</p>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Music;
