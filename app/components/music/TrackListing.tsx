import { Theme } from '@/app/types';
import React from 'react';

interface TrackListingProps {
  className?: string;
  trackListing: string[];
  theme: Theme;
}

const TrackListing = ({ className = '', trackListing, theme }: TrackListingProps) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center bg-black/10 backdrop-blur rounded px-6 py-6 sm:p-0 my-6 sm:my-0`}>
      <h2
        className={`text-xl ${theme === Theme.Red ? 'text-red_bright' : 'text-green_bright'} mb-2`}>
        Track Listing
      </h2>
      <ol className='list-decimal list-inside flex flex-col justify-center items-center'>
        {trackListing.map((track, i) => (
          <li key={i}>{track}</li>
        ))}
      </ol>
    </div>
  );
};

export default TrackListing;
