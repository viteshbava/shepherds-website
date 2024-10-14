import MusicTemplate from '@/app/components/music/MusicTemplate';
import release from '@/app/data/music/helios';
import { formatMetaDescr } from '@/app/libs/formatMetaDescr';
import { Metadata } from 'next';
import React from 'react';

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
