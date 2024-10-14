import { MusicData } from '@/app/types';
import Link from 'next/link';
import React from 'react';
import musicList from '@/app/data/music/musicList';

interface MusicNavProps {
  className?: string;
  currentSlug: string;
}

const MusicNav = ({ className = '', currentSlug }: MusicNavProps) => {
  const index = musicList.findIndex((item) => currentSlug === item.slug);
  const numReleases = musicList.length;

  const prevLink = `/music/${musicList[index - 1]?.slug}`;
  const nextLink = `/music/${musicList[index + 1]?.slug}`;

  return (
    <div className={`${className} flex justify-between w-full max-w-[350px]`}>
      <Link className={`hover:opacity-80 ${index > 0 ? '' : 'invisible'}`} href={prevLink}>
        <span className='mr-3'>&#10094;</span>Prev
      </Link>
      <Link className='hover:opacity-80' href='/#music'>
        All Music
      </Link>
      <Link
        className={`hover:opacity-80 ${index !== numReleases - 1 ? '' : 'invisible'}`}
        href={nextLink}>
        Next<span className='ml-3'>&#10095;</span>
      </Link>
    </div>
  );
};

export default MusicNav;
