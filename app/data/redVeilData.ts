import { HeroLinks, IconNames } from '../types';

const redVeilData: HeroLinks = {
  listenLinks: [
    {
      icon: IconNames.Bandcamp,
      label: 'Bandcamp',
      secondaryLabel: 'Pre-order album',
      ariaLabel: 'Listen on Bandcamp',
      href: 'https://shepherdsofcassini.bandcamp.com/track/mauerfall',
    },
    {
      icon: IconNames.Spotify,
      label: 'Spotify',
      ariaLabel: 'Listen on Spotify',
      href: 'https://open.spotify.com/track/4tiZDMwJ1aZB8ZGJjHQRQK?si=5e4af16544794ff0',
    },
    {
      icon: IconNames.AppleMusic,
      label: 'Apple',
      ariaLabel: 'Listen on Apple Music',
      href: 'https://music.apple.com/us/album/mauerfall/1774850297?i=1774850603',
    },
    {
      icon: IconNames.YouTube,
      label: 'YouTube',
      ariaLabel: 'Listen on YouTube',
      href: 'https://youtu.be/_TFftELaN8Y?si=a55-bsuZNzrO7rBE',
    },
    {
      icon: IconNames.Amazon,
      label: 'Amazon',
      ariaLabel: 'Listen on Amazon Music',
      href: 'https://amazon.com/music/player/tracks/B0DKBFT4KT?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_RYHFpBUGYvEHFtYG5AU4I9VIZ',
    },
  ],
  bandCampId: '1464114074',
  trackId: '1499913624',
};

export { redVeilData };
