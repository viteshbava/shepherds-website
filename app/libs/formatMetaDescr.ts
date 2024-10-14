import { MusicData } from '../types';

export const formatMetaDescr = (musicData: MusicData): string => {
  const { name, releaseDate, trackListing, credits } = musicData;

  // Format the release date
  const releaseDateString = releaseDate
    ? releaseDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '(date TBC)';

  // Format track listing
  const tracks = trackListing.join(', ');

  // Format credits
  const creditsString = credits.map((credit) => `${credit.part_1} ${credit.part_2}`).join(', ');

  return `Shepherds of Cassini's '${name}' was released on ${releaseDateString}. The album includes tracks ${tracks}. ${creditsString}.`;
};
