import { MusicData } from '@/app/types';
import React from 'react';
import Section from '../ui/Section';
import ButtonLink from '../ui/ButtonLink';
import MusicNav from './MusicNav';
import MainImage from './MainImage';
import ReleaseDate from './ReleaseDate';
import TrackListing from './TrackListing';

const MusicTemplate = ({ release }: { release: MusicData }) => {
  return (
    <Section className='mt-[4.5rem] sm:mt-[6rem]'>
      <h1 className='text-2xl sm:text-4xl pb-4 border-white/50 border-b-[1px]'>{release.name}</h1>
      <MusicNav className='my-10' currentSlug={release.slug} />
      <div className='grid grid-cols-2 gap-5'>
        <MainImage
          className='col-start-1 row-start-1 row-span-2'
          frontCover={release.frontCover}
          name={release.name}
        />
        <ReleaseDate
          className='col-start-2 row-start-1 row-span-1'
          releaseDate={release.releaseDate}
        />
        <TrackListing
          className='col-start-2 row-start-2 row-span-1'
          trackListing={release.trackListing}
        />
        <div className='col-start-2 row-start-3 row-span-2'>
          <h2 className='text-lg sm:text-xl mt-4 sm:mt-6 mb-3 text-red_bright'>
            Listen | Purchase
          </h2>
          <div className='hidden sm:block w-full h-[120px]'>
            <iframe className='border-0 w-full h-full' src={release.embed.large} seamless></iframe>
          </div>
          <div className='sm:hidden w-full h-[42px]'>
            <iframe className='border-0 w-full h-full' src={release.embed.small} seamless></iframe>
          </div>
          <div className='flex flex-col space-y-4 mt-4'>
            {release.listenLinks.map((link, i) => (
              <ButtonLink
                key={i}
                isExternal
                href={link.href}
                ariaLabel={link.ariaLabel}
                className='w-full bg-red_dim uppercase text-sm'>
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
        <div className='col-start-1 row-start-3 row-span-2'>
          <h2>Credits</h2>
          <ul>
            {release.credits.map((credit, i) => (
              <li key={i}>{`${credit.part_1} ${credit.part_2}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default MusicTemplate;
