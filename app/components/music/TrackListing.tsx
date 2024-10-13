import React from 'react';

interface TrackListingProps {
  className?: string;
  trackListing: string[];
}

const TrackListing = ({ className = '', trackListing }: TrackListingProps) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center bg-black/10 backdrop-blur rounded px-4 py-6 sm:p-0 my-6 sm:my-0`}>
      <h2 className='text-xl text-red_bright mb-2'>Track Listing</h2>
      <ol className='list-decimal flex flex-col justify-center items-center'>
        {trackListing.map((track, i) => (
          <li key={i} className='pl-2'>
            {track}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TrackListing;
