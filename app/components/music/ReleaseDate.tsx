import { formatDate } from '@/app/libs/formatDate';
import React from 'react';

interface ReleaseDateProps {
  className?: string;
  releaseDate: Date | null | undefined;
}

const ReleaseDate = ({ className, releaseDate }: ReleaseDateProps) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center bg-black/10 backdrop-blur rounded px-4 py-6 sm:p-0 my-6 sm:my-0`}>
      <h2 className='text-xl text-red_bright mb-2'>Release Date</h2>
      <p>{releaseDate ? formatDate(releaseDate) : 'TBC'}</p>
    </div>
  );
};

export default ReleaseDate;
