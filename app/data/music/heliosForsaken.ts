import { MusicData } from '@/app/types';

const data: MusicData = {
  embedLink:
    'https://bandcamp.com/EmbeddedPlayer/album=1464114074/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/',
  frontCover: '/imgs/heresy/heresy-front-cover.webp',
  listenLinks: [
    {
      label: 'Bandcamp | Buy CD / Vinyl',
      ariaLabel: 'Listen / buy on Bandcamp',
      href: 'https://shepherdsofcassini.bandcamp.com/album/helios-forsaken',
    },
    {
      label: 'Spotify',
      ariaLabel: 'Listen on Spotify',
      href: 'https://open.spotify.com/album/4NbjwGD2anED3em2K3SheA?si=XL013o1jRJK74sI0ZBHbZA',
    },
    {
      label: 'Apple Music',
      ariaLabel: 'Listen on Apple Music',
      href: 'https://music.apple.com/us/album/helios-forsaken/1693857752n',
    },
    {
      label: 'YouTube Music',
      ariaLabel: 'Listen on YouTube Music',
      href: 'https://www.youtube.com/playlist?list=OLAK5uy_nQaQ8MPFcDXglLqlXSBojobn2mCUCmIyE&playnext=1&index=1',
    },
  ],
};

export default data;
