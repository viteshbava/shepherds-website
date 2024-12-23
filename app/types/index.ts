export interface ListenLink {
  icon?: IconNames;
  label: string;
  href: string;
  ariaLabel: string;
}

export interface Credit {
  part_1?: string;
  part_2?: string;
}

export interface EmbedLinks {
  large: string;
  small: string;
}

interface Image {
  url: string;
  altText: string;
}

export enum Theme {
  Green = 'green',
  Red = 'red',
  Grey = 'grey',
}

export enum IconNames {
  Bandcamp = 'bandcamp',
  Spotify = 'spotify',
  AppleMusic = 'appleMusic',
  YouTube = 'youtube',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Amazon = 'amazon',
  Email = 'email',
}

export interface MusicData {
  name: string;
  slug: string;
  releaseDate?: Date;
  trackListing: string[];
  embed: EmbedLinks;
  frontCover: Image;
  backgroundImage?: Image;
  listenLinks: ListenLink[];
  credits: Credit[];
  theme: Theme;
  galleryPath: string;
  openGraphImg: string;
}
