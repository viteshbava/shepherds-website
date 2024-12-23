import React from 'react';
import { EmbedLinks } from '../types';

interface BandcampPlayerProps {
  embed: EmbedLinks;
}

const BandcampPlayer = ({ embed }: BandcampPlayerProps) => {
  return (
    <>
      <div className='hidden sm:block w-full h-[120px]'>
        <iframe className='w-full h-full rounded-md opacity-80' src={embed.large} seamless></iframe>
      </div>
      <div className='sm:hidden w-full h-[42px]'>
        <iframe className='w-full h-full rounded-md' src={embed.small} seamless></iframe>
      </div>
    </>
  );
};

export default BandcampPlayer;
