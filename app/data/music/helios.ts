import { IconNames, MusicData, Theme } from '@/app/types';

const helios: MusicData = {
  name: 'Helios Forsaken',
  slug: 'heliosforsaken',
  releaseDate: new Date('2015-07-11'),
  theme: Theme.Green,
  trackListing: [
    'Raijin',
    'Mirrors Have No Memory',
    'The Almagest',
    'Mauerfall',
    "Pleiades' Plea",
    'Helios Forsaken',
  ],
  credits: [
    { part_1: 'Produced by', part_2: 'Shepherds of Cassini & Dave Rhodes' },
    {
      part_1: 'Recorded & mixed by',
      part_2: 'Dave Rhodes at Depot Sound Recording Studio, Auckland, NZ',
    },
    { part_1: 'Mastered by', part_2: 'Chris Chetland at Kog Studio, Auckland, NZ' },
    { part_1: 'Darbuka on Mauerfall & Helios Forsaken performed by', part_2: 'Reyahn Leng' },
    { part_1: 'Album art by', part_2: 'Chris Lewis' },
    { part_1: 'Hand drawn text by', part_2: 'Omar Al-Hashimi' },
    { part_1: 'Photography by', part_2: 'Hazwani Hussain & Fern King' },
    { part_1: 'All music written by', part_2: 'Shepherds of Cassini' },
  ],
  bandCampId: '1464114074',
  frontCover: {
    url: '/imgs/helios/helios-front-cover.jpg',
    altText: 'Shepherds of Cassini, Helios Forsaken album cover, art by Chris Lewis',
  },
  backgroundImage: {
    url: '/imgs/helios/helios-background.webp',
    altText: 'Shepherds of Cassini, Helios Forsaken album art by Chris Lewis',
  },
  listenLinks: [
    {
      icon: IconNames.Bandcamp,
      label: 'Bandcamp',
      secondaryLabel: 'Buy CD',
      ariaLabel: 'Listen / buy on Bandcamp',
      href: 'https://shepherdsofcassini.bandcamp.com/album/helios-forsaken',
    },
    {
      icon: IconNames.Spotify,
      label: 'Spotify',
      ariaLabel: 'Listen on Spotify',
      href: 'https://open.spotify.com/album/4NbjwGD2anED3em2K3SheA?si=XL013o1jRJK74sI0ZBHbZA',
    },
    {
      icon: IconNames.AppleMusic,
      label: 'Apple',
      ariaLabel: 'Listen on Apple Music',
      href: 'https://music.apple.com/us/album/helios-forsaken/1693857752n',
    },
    {
      icon: IconNames.YouTube,
      label: 'YouTube',
      ariaLabel: 'Listen on YouTube',
      href: 'https://www.youtube.com/playlist?list=OLAK5uy_nQaQ8MPFcDXglLqlXSBojobn2mCUCmIyE&playnext=1&index=1',
    },
    {
      icon: IconNames.Amazon,
      label: 'Amazon',
      ariaLabel: 'Listen on Amazon Music',
      href: 'https://www.amazon.com/Helios-Forsaken/dp/B0DKBGVCWT',
    },
  ],
  galleryPath: '/imgs/helios/album-gallery',
  openGraphImg: '/imgs/helios/opengraph-image.png',
};

export default helios;
