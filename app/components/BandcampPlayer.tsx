'use client';

import React from 'react';
import { Theme } from '../types';

interface BandcampPlayerProps {
  theme?: Theme;
  albumId: string;
  trackId?: string;
}

const BandcampPlayer = ({ albumId, trackId, theme = Theme.Red }: BandcampPlayerProps) => {
  const linkCol = (theme === Theme.Red ? '#DE5F5F' : '#6ADEEE').slice(1);

  return (
    <>
      <div className='hidden md:block w-full h-[120px]'>
        <iframe
          className='w-full h-full rounded-md opacity-80'
          src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=333333/linkcol=${linkCol}/tracklist=false/artwork=none/track=${trackId}/transparent=true/`}
          seamless></iframe>
      </div>
      <div className='md:hidden w-full h-[42px]'>
        <iframe
          className='w-full h-full rounded-md opacity-80'
          src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=small/bgcol=333333/linkcol=${linkCol}/tracklist=false/artwork=none/track=${trackId}/transparent=true/`}
          seamless></iframe>
      </div>
    </>
  );
};

export default BandcampPlayer;
