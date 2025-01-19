import { IconNames, ListenLink } from '../types';

const defaultData: { listenLinks: ListenLink[]; bandCampId: string } = {
  listenLinks: [
    {
      icon: IconNames.Bandcamp,
      label: 'Bandcamp',
      secondaryLabel: 'Buy physical albums',
      ariaLabel: 'Listen / buy on Bandcamp',
      href: 'https://shepherdsofcassini.bandcamp.com/',
    },
    {
      icon: IconNames.Spotify,
      label: 'Spotify',
      ariaLabel: 'Listen on Spotify',
      href: 'https://open.spotify.com/artist/7znkRbIN9sOYccThMoIHqM',
    },
    {
      icon: IconNames.AppleMusic,
      label: 'Apple',
      ariaLabel: 'Listen on Apple Music',
      href: 'https://music.apple.com/us/artist/shepherds-of-cassini/738917354',
    },
    {
      icon: IconNames.YouTube,
      label: 'YouTube',
      ariaLabel: 'Listen on YouTube',
      href: 'https://www.youtube.com/shepherdsofcassini',
    },
    {
      icon: IconNames.Amazon,
      label: 'Amazon',
      ariaLabel: 'Listen on Amazon Music',
      href: 'https://www.amazon.com/music/player/artists/B00GHA5UKW',
    },
  ],
  bandCampId: '1464114074',
};

export { defaultData };
