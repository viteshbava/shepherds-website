import { MusicData } from '@/app/types';
import React from 'react';
import Section from '../ui/Section';
import MusicNav from './MusicNav';
import MainImage from './MainImage';
import ReleaseDate from './ReleaseDate';
import TrackListing from './TrackListing';
import ListenBlock from './ListenBlock';
import Credits from './Credits';
import BackgroundImage from '../BackgroundImage';
import Clouds from '../clouds/Clouds';
import Gallery from './Gallery';

const MusicTemplate = ({ release }: { release: MusicData }) => {
  return (
    <>
      <Clouds theme={release.theme} />
      {release.backgroundImage && (
        <BackgroundImage
          url={release.backgroundImage.url}
          altText={release.backgroundImage.altText}
          animation='albums-1'
        />
      )}
      <Section className='mb-10 sm:mb-20 mt-[7rem] sm:mt-[12rem] items-center'>
        <h1 className='gold-heading-section pb-4 border-white/50 border-b-[1px] w-full'>
          {release.name}
        </h1>
        <MusicNav className='my-10' currentSlug={release.slug} />
        <div className='w-full sm:grid sm:grid-cols-2 gap-y-5 gap-x-5 md:gap-x-10 lg:gap-x-20'>
          <MainImage
            className='col-start-1 row-start-1 row-span-2'
            imgUrl={release.frontCover.url}
            altText={release.frontCover.altText}
          />
          <ReleaseDate
            className='col-start-2 row-start-1 row-span-1'
            releaseDate={release.releaseDate}
            theme={release.theme}
          />
          <TrackListing
            className='col-start-2 row-start-2 row-span-1'
            trackListing={release.trackListing}
            theme={release.theme}
          />
          <ListenBlock
            className='col-start-2 row-start-3 row-span-2'
            bandCampId={release.bandCampId}
            listenLinks={release.listenLinks}
            theme={release.theme}
          />
          <Credits
            className='col-start-1 row-start-3 row-span-2'
            credits={release.credits}
            theme={release.theme}
          />
          <Gallery className='col-start-1 col-span-2 mt-10' images={release.galleryImages} />
        </div>
        <MusicNav className='mt-10 sm:mt-20' currentSlug={release.slug} />
      </Section>
    </>
  );
};

export default MusicTemplate;
