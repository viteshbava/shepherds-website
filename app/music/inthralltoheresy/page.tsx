import MusicTemplate from '@/app/components/music/MusicTemplate';
import React from 'react';
import release from '@/app/data/music/heresy';
import { Metadata } from 'next';
import { formatMetaDescr } from '@/app/libs/formatMetaDescr';

export async function generateMetadata(): Promise<Metadata> {
  const metaDescription = formatMetaDescr(release);

  return {
    title: release.name,
    description: metaDescription,
    keywords:
      'shepherds of cassini new zealand music rock metal progressive post prog psychedelic auckland',
    openGraph: {
      title: release.name,
      description: metaDescription,
      images: [release.frontCover],
    },
    twitter: {
      title: release.name,
      description: metaDescription,
      images: [release.frontCover],
    },
  };
}

const page = () => {
  return <MusicTemplate release={release} />;
};

export default page;
