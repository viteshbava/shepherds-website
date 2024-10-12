import { Credit } from '@/app/types';
import React from 'react';

interface CreditsProps {
  className?: string;
  credits: Credit[];
}

const Credits = ({ className = '', credits }: CreditsProps) => {
  return (
    <div className={className}>
      <h2>Credits</h2>
      <ul>
        {credits.map((credit, i) => (
          <li key={i}>{`${credit.part_1} ${credit.part_2}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Credits;
