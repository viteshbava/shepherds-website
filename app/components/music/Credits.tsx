import { Credit } from '@/app/types';
import React from 'react';

interface CreditsProps {
  className?: string;
  credits: Credit[];
}

const Credits = ({ className = '', credits }: CreditsProps) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center bg-black/10 backdrop-blur rounded px-4 py-6 sm:p-0 my-6 sm:my-0`}>
      <h2 className='text-xl text-red_bright mb-2'>Credits</h2>
      <ul>
        {credits.map((credit, i) => (
          <li key={i} className='mb-2'>
            <span className='text-red_bright'>{credit.part_1}</span> {credit.part_2}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Credits;
