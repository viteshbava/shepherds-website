import MusicTemplate from '@/app/components/music/MusicTemplate';
import React from 'react';
import selfTitled from '@/app/data/music/selftitled';

const page = () => {
  return <MusicTemplate release={selfTitled} />;
};

export default page;
