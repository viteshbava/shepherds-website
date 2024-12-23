'use client';

import React from 'react';
import { EmbedLinks, Theme } from '../types';
import { useMediaQuery } from 'react-responsive';

interface BandcampPlayerProps {
  embed: EmbedLinks;
  theme?: Theme;
}

const BandcampPlayer = ({ embed, theme = Theme.Red }: BandcampPlayerProps) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const size = isSmallScreen ? 'small' : 'large';
  const linkCol = (theme === Theme.Red ? '#DE5F5F' : '#6ADEEE').slice(1);

  return (
    <div className='w-full h-[42px] sm:h-[120px]'>
      <iframe
        className='w-full h-full rounded-md opacity-80'
        src={`https://bandcamp.com/EmbeddedPlayer/album=1464114074/size=${size}/bgcol=333333/linkcol=${linkCol}/tracklist=false/artwork=none/transparent=true/`}
        seamless></iframe>
    </div>
  );
};

export default BandcampPlayer;
