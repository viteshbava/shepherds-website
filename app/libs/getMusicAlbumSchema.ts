// This file generates the JSON-LD schema for a specific music album.

import { MusicData } from '../types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const getMusicAlbumSchema = (release: MusicData) => {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'MusicAlbum',
      name: release.name,
      url: `${baseUrl}/music/${release.slug}`,
      image: `${baseUrl}${release.frontCover.url}`,
      ...(release.releaseDate && {
        datePublished: release.releaseDate.toISOString().split('T')[0],
      }),
      numTracks: release.trackListing.length,
      byArtist: {
        '@type': 'MusicGroup',
        name: 'Shepherds of Cassini',
      },
      track: {
        '@type': 'ItemList',
        numberOfItems: release.trackListing.length,
        itemListElement: release.trackListing.map((track, index) => ({
          '@type': 'MusicRecording',
          name: track,
          position: index + 1,
          byArtist: {
            '@type': 'MusicGroup',
            name: 'Shepherds of Cassini',
          },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Music',
          item: `${baseUrl}/#music`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: release.name,
          item: `${baseUrl}/music/${release.slug}`,
        },
      ],
    },
  ];
};

export default getMusicAlbumSchema;
