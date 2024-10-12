import { formatDate } from '@/app/libs/formatDate';
import React from 'react';

interface ReleaseDateProps {
  className?: string;
  releaseDate: Date | null | undefined;
}

const ReleaseDate = ({ className, releaseDate }: ReleaseDateProps) => {
  return (
    <div className={className}>
      <h2>Release Date</h2>
      <p>{releaseDate ? formatDate(releaseDate) : 'TBC'}</p>
    </div>
  );
};

export default ReleaseDate;
