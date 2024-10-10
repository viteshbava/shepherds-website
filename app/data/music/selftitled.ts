import { MusicData } from '@/app/types';

const data: MusicData = {
  name: 'Shepherds of Cassini',
  slug: 'shepherdsofcassini',
  releaseDate: new Date('2013-08-24'),
  trackListing: [],
  embedLarge: '',
  embedSmall: '',
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

export default data;
