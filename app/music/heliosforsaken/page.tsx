import MusicTemplate from '@/app/components/music/MusicTemplate';
import helios from '@/app/data/music/helios';
import React from 'react';

const page = () => {
  return <MusicTemplate release={helios} />;
};

export default page;
