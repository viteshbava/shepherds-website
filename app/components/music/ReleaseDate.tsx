import { formatDate } from '@/app/libs/formatDate';
import { Theme } from '@/app/types';
import React from 'react';

interface ReleaseDateProps {
  className?: string;
  releaseDate: Date | null | undefined;
  theme: Theme;
}

const ReleaseDate = ({ className, releaseDate, theme }: ReleaseDateProps) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center bg-black/10 backdrop-blur rounded px-4 py-6 sm:p-0 my-6 sm:my-0`}>
      <h2
        className={`text-xl ${theme === Theme.Red ? 'text-red_bright' : 'text-green_bright'} mb-2`}>
        Release Date
      </h2>
      <p>{releaseDate ? formatDate(releaseDate) : 'TBC'}</p>
    </div>
  );
};

export default ReleaseDate;
