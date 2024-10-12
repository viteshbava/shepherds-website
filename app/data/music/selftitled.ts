import { MusicData } from '@/app/types';

const selfTitled: MusicData = {
  name: 'Shepherds of Cassini',
  slug: 'shepherdsofcassini',
  releaseDate: new Date('2013-08-24'),
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
    { part_1: 'Hand drawn text by', part_2: 'Omar Al-Hashimi and Marie Pfister' },
    { part_1: 'All music written by', part_2: 'Shepherds of Cassini' },
  ],
  embed: {
    large: '',
    small: '',
  },
  frontCover: '/imgs/selftitled/selftitled-front-cover.jpg',
  listenLinks: [
    {
      label: 'Bandcamp | Buy CD',
      ariaLabel: 'Listen / buy on Bandcamp',
      href: '',
    },
    {
      label: 'Spotify',
      ariaLabel: 'Listen on Spotify',
      href: '',
    },
    {
      label: 'Apple Music',
      ariaLabel: 'Listen on Apple Music',
      href: '',
    },
    {
      label: 'YouTube Music',
      ariaLabel: 'Listen on YouTube Music',
      href: '',
    },
  ],
};

export default selfTitled;
