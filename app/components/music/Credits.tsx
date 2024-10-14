import { Credit, Theme } from '@/app/types';
import React from 'react';

interface CreditsProps {
  className?: string;
  credits: Credit[];
  theme: Theme;
}

const Credits = ({ className = '', credits, theme }: CreditsProps) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center bg-gray-500/10 backdrop-blur rounded px-6 py-6 sm:p-0 my-6 sm:my-0`}>
      <h2
        className={`text-xl ${theme === Theme.Red ? 'text-red_bright' : 'text-green_bright'} mb-2`}>
        Credits
      </h2>
      <ul>
        {credits.map((credit, i) => (
          <li key={i} className='mb-2'>
            <span className={theme === Theme.Red ? 'text-red_bright' : 'text-green_bright'}>
              {credit.part_1}
            </span>{' '}
            {credit.part_2}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Credits;
