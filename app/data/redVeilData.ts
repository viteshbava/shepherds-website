import { HeroLinks, IconNames } from '../types';

const redVeilData: HeroLinks = {
  listenLinks: [
    {
      icon: IconNames.Bandcamp,
      label: 'Bandcamp',
      secondaryLabel: 'Pre-order album',
      ariaLabel: 'Listen on Bandcamp',
      href: 'https://shepherdsofcassini.bandcamp.com/track/red-veil',
    },
    {
      icon: IconNames.Spotify,
      label: 'Spotify',
      ariaLabel: 'Listen on Spotify',
      href: 'https://open.spotify.com/track/4P9EQLfTxyKXTotgYGgz8M?si=f5882b359c5248eb',
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
      href: 'https://youtu.be/Ca-k01X5RgQ',
    },
    {
      icon: IconNames.Amazon,
      label: 'Amazon',
      ariaLabel: 'Listen on Amazon Music',
      href: 'https://www.amazon.com/music/player/artists/B00GHA5UKW/shepherds-of-cassini',
    },
  ],
  bandCampId: '2488004756',
  trackId: '2398682215',
};

export { redVeilData };
