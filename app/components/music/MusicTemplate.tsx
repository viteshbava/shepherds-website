import { MusicData } from '@/app/types';
import React from 'react';
import Section from '../ui/Section';
import ButtonLink from '../ui/ButtonLink';
import MusicNav from './MusicNav';
import MainImage from './MainImage';
import ReleaseDate from './ReleaseDate';
import TrackListing from './TrackListing';
import ListenBlock from './ListenBlock';
import Credits from './Credits';

const MusicTemplate = ({ release }: { release: MusicData }) => {
  return (
    <Section className='mt-[4.5rem] sm:mt-[6rem]'>
      <h1 className='text-2xl sm:text-4xl pb-4 border-white/50 border-b-[1px]'>{release.name}</h1>
      <MusicNav className='my-10' currentSlug={release.slug} />
      <div className='sm:grid sm:grid-cols-2 gap-5'>
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
        <ListenBlock
          className='col-start-2 row-start-3 row-span-2'
          embedLinks={release.embed}
          listenLinks={release.listenLinks}
        />
        <Credits className='col-start-1 row-start-3 row-span-2' credits={release.credits} />
      </div>
    </Section>
  );
};

export default MusicTemplate;
