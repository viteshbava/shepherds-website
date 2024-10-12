import MusicTemplate from '@/app/components/music/MusicTemplate';
import React from 'react';
import heresy from '@/app/data/music/heresy';

const page = () => {
  return <MusicTemplate release={heresy} />;
};

export default page;
