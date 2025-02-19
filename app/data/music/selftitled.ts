import { IconNames, MusicData, Theme } from '@/app/types';

const selfTitled: MusicData = {
  name: 'Shepherds of Cassini',
  slug: 'shepherdsofcassini',
  releaseDate: new Date('2013-08-24'),
  theme: Theme.Green,
  trackListing: [
    'Zuhal',
    'Eyelid',
    'Asomatous Pendula I',
    'Asomatous Pendula II',
    "Who Are We To Say You're Welcome Here?",
    'The Silent Cartographer',
    'Nefarious',
  ],
  credits: [
    { part_1: 'Produced by', part_2: 'Shepherds of Cassini & Dave Rhodes' },
    {
      part_1: 'Recorded & mixed by',
      part_2: 'Dave Rhodes at Depot Sound Recording Studio, Auckland, NZ',
    },
    { part_1: 'Mastered by', part_2: 'Chris Chetland at Kog Studio, Auckland, NZ' },
    { part_1: 'Album art by', part_2: 'Chris Lewis' },
    { part_1: 'Hand drawn text by', part_2: 'Omar Al-Hashimi & Marie Pfister' },
    { part_1: 'All music written by', part_2: 'Shepherds of Cassini' },
  ],
  bandCampId: '3887076866',
  frontCover: {
    url: '/imgs/selftitled/selftitled-front-cover.jpg',
    altText: 'Shepherds of Cassini, self titled album cover, artwork by Chris Lewis',
  },
  backgroundImage: {
    url: '/imgs/selftitled/selftitled-background.webp',
    altText:
      'Shepherds of Cassini, self titled artwork, layout by Chris Lewis, hand drawn text by Omar Al-Hashimi and Marie Pfister',
  },
  listenLinks: [
    {
      icon: IconNames.Bandcamp,
      label: 'Bandcamp',
      ariaLabel: 'Listen / buy on Bandcamp',
      href: 'https://shepherdsofcassini.bandcamp.com/album/shepherds-of-cassini',
    },
    {
      icon: IconNames.ShoppingCart,
      label: 'Buy CD',
      ariaLabel: 'Listen / buy on Bandcamp',
      href: '/purchase',
    },
    {
      icon: IconNames.Spotify,
      label: 'Spotify',
      ariaLabel: 'Listen on Spotify',
      href: 'https://open.spotify.com/album/2fIbm8ODcYrHnDksx2XCJn?si=QQFkegX3QtSB-Fl3_3MARA',
    },
    {
      icon: IconNames.AppleMusic,
      label: 'Apple',
      ariaLabel: 'Listen on Apple Music',
      href: 'https://music.apple.com/us/album/shepherds-of-cassini/1693849616',
    },
    {
      icon: IconNames.YouTube,
      label: 'YouTube',
      ariaLabel: 'Listen on YouTube Music',
      href: 'https://youtu.be/HWRvoNl8kY8?si=BIesfmwgD5WrDrwp',
    },
    {
      icon: IconNames.Amazon,
      label: 'Amazon',
      ariaLabel: 'Listen on Amazon Music',
      href: 'https://amazon.com/music/player/albums/B0DNDMQTC9?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_U7I8JZpOt7C7ZDfw13xOJyXFZ',
    },
  ],
  galleryPath: '/imgs/selftitled/album-gallery',
  openGraphImg: '/imgs/selftitled/opengraph-image.png',
};

export default selfTitled;
