import { MusicData, Theme } from '@/app/types';

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
    { part_1: 'Hand drawn text by', part_2: 'Omar Al-Hashimi and Marie Pfister' },
    { part_1: 'All music written by', part_2: 'Shepherds of Cassini' },
  ],
  embed: {
    large:
      'https://bandcamp.com/EmbeddedPlayer/album=3887076866/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=none/transparent=true/',
    small:
      'https://bandcamp.com/EmbeddedPlayer/album=3887076866/size=small/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=none/transparent=true/',
  },
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
      label: 'Bandcamp | Buy CD',
      ariaLabel: 'Listen / buy on Bandcamp',
      href: 'https://shepherdsofcassini.bandcamp.com/album/shepherds-of-cassini',
    },
    {
      label: 'Spotify',
      ariaLabel: 'Listen on Spotify',
      href: 'https://open.spotify.com/album/2fIbm8ODcYrHnDksx2XCJn?si=QQFkegX3QtSB-Fl3_3MARA',
    },
    {
      label: 'Apple Music',
      ariaLabel: 'Listen on Apple Music',
      href: 'https://music.apple.com/us/album/shepherds-of-cassini/1693849616',
    },
    {
      label: 'YouTube Music',
      ariaLabel: 'Listen on YouTube Music',
      href: 'https://www.youtube.com/watch?v=w634TRfVArU&list=OLAK5uy_kkOnINVx4z9qi5a077Upy3ab4NP_vixNY',
    },
  ],
  galleryPath: '/imgs/selftitled/album-gallery',
};

export default selfTitled;
