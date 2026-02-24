import { MusicData } from '../types';

const MAX_LENGTH = 155;

export const formatMetaDescr = (musicData: MusicData): string => {
  const { name, releaseDate, trackListing } = musicData;

  const releaseDateString = releaseDate
    ? releaseDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '(date TBC)';

  const base = `'${name}' by Shepherds of Cassini, released ${releaseDateString}.`;

  // Try to fit as many track names as possible within the limit
  const tracksPrefix = ' Tracks: ';
  const ellipsis = '...';
  const available = MAX_LENGTH - base.length - tracksPrefix.length - ellipsis.length;

  if (available > 0) {
    let tracks = '';
    for (let i = 0; i < trackListing.length; i++) {
      const separator = i === 0 ? '' : ', ';
      const next = separator + trackListing[i];
      if (tracks.length + next.length > available) {
        return base + tracksPrefix + tracks + ellipsis;
      }
      tracks += next;
    }
    // All tracks fit
    return (base + tracksPrefix + tracks).slice(0, MAX_LENGTH);
  }

  return base.slice(0, MAX_LENGTH);
};
