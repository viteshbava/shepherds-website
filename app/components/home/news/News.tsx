import React from 'react';
import Section from '../../ui/Section';
import { getReleaseState } from '@/app/libs/getReleaseState';
import PreSingle from './PreSingle';
import SingleRelease from './SingleRelease';
import AlbumRelease from './AlbumRelease';

const releaseState = getReleaseState();

const News = () => {
  return (
    <Section id='news' className='mt-24'>
      <h2 className='gold-heading-section md:text-3xl mb-6 pb-2 w-full border-white/50 border-b-[1px]'>
        News
      </h2>
      {releaseState === 'pre-single' && <PreSingle />}
      {releaseState === 'single-released' && <SingleRelease />}
      {releaseState === 'album-released' && <AlbumRelease />}
    </Section>
  );
};

export default News;
