import { getGalleryImages } from '@/app/libs/getGalleryImages';
import { IconNames, MusicData, Theme } from '@/app/types';

const heresy: MusicData = {
  name: 'In Thrall to Heresy',
  slug: 'inthralltoheresy',
  releaseDate: new Date('2025-02-21'),
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
  bandCampId: '2488004756',
  frontCover: {
    url: '/imgs/heresy/front-cover-lettering.png',
    altText: 'Shepherds of Cassini, In Thrall to Heresy, album cover, artwork by Moonroot',
  },
  backgroundImage: {
    url: '/imgs/heresy/back-cover.png',
    altText: 'Shepherds of Cassini, In Thrall to Heresy, back cover artowrk by Moonroot',
  },
  listenLinks: [
    {
      icon: IconNames.Bandcamp,
      label: 'Bandcamp',
      ariaLabel: 'Listen / buy on Bandcamp',
      href: 'https://shepherdsofcassini.bandcamp.com/album/in-thrall-to-heresy',
    },
    {
      icon: IconNames.ShoppingCart,
      label: 'Buy CD / Vinyl',
      ariaLabel: 'Listen / buy on Bandcamp',
      href: '/purchase',
    },
    {
      icon: IconNames.Spotify,
      label: 'Spotify',
      ariaLabel: 'Listen on Spotify',
      href: 'https://open.spotify.com/album/1be3BZg0oWO5UGgKMT3H4b?si=KIcZoE3OTfmgB9OefZVCwg',
    },
    {
      icon: IconNames.AppleMusic,
      label: 'Apple',
      ariaLabel: 'Listen on Apple Music',
      href: 'https://music.apple.com/us/album/in-thrall-to-heresy/1788808288',
    },
    {
      icon: IconNames.YouTube,
      label: 'YouTube',
      ariaLabel: 'Listen on YouTube',
      href: 'https://youtu.be/mE1xsRpZFqQ',
    },
    {
      icon: IconNames.Amazon,
      label: 'Amazon',
      ariaLabel: 'Listen on Amazon Music',
      href: 'https://amazon.com/music/player/albums/B0DSB138VH?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_9j6rtLGPmZFCyBYkek8ISY6v5',
    },
  ],
  galleryImages: [
    ...getGalleryImages({ folderPath: '/imgs/heresy/album-gallery-vinyl' }),
    ...getGalleryImages({ folderPath: '/imgs/heresy/album-gallery-cd' }),
  ],
  openGraphImg: '/imgs/heresy/opengraph-image.png',
};

export default heresy;
