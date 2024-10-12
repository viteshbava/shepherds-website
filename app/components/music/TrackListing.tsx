import React from 'react';

interface TrackListingProps {
  className?: string;
  trackListing: string[];
}

const TrackListing = ({ className = '', trackListing }: TrackListingProps) => {
  return (
    <div className={className}>
      <h2>Track Listing</h2>
      <ol>
        {trackListing.map((track, i) => (
          <li key={i}>{track}</li>
        ))}
      </ol>
    </div>
  );
};

export default TrackListing;
