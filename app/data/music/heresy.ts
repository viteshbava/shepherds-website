import { IconNames, MusicData, Theme } from '@/app/types';

const heresy: MusicData = {
  name: 'In Thrall to Heresy',
  slug: 'inthralltoheresy',
  theme: Theme.Red,
  trackListing: [
    'Usurper',
    'Shifting Gleam',
    'Slough',
    'Vestibule',
    'Red Veil',
    'Mutineers',
    'Abyss',
    'Threnody',
  ],
  credits: [
    { part_1: 'Produced by', part_2: 'Shepherds of Cassini & Dave Rhodes' },
    { part_1: 'Recorded by', part_2: 'Dave Rhodes at The Chapel, Auckland, NZ' },
    { part_1: 'Mixed by', part_2: 'Dave Rhodes' },
    { part_1: 'Mastered by', part_2: 'Luke Finlay at Primal Mastering, Auckland, NZ' },
    { part_1: 'Original artwork and lettering by', part_2: 'Moonroot' },
    { part_1: 'Layout by', part_2: 'Vitesh Bava' },
    { part_1: 'All music written by', part_2: 'Shepherds of Cassini' },
  ],
  bandCampId: '1464114074',
  frontCover: {
    url: '/imgs/heresy/heresy-front-cover.webp',
    altText: 'Shepherds of Cassini, In Thrall to Heresy, album cover, artwork by Moonroot',
  },
  backgroundImage: {
    url: '/imgs/heresy/heresy-back-cover.webp',
    altText: 'Shepherds of Cassini, In Thrall to Heresy, back cover artowrk by Moonroot',
  },
  listenLinks: [
    {
      icon: IconNames.Bandcamp,
      label: 'Bandcamp',
      secondaryLabel: 'Buy CD / Vinyl',
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
  galleryPath: '/imgs/heresy/album-gallery',
  openGraphImg: '/imgs/heresy/opengraph-image.png',
};

export default heresy;
