interface ListenLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface MusicData {
  name: string;
  releaseDate?: Date;
  trackListing: string[];
  embedLarge: string;
  embedSmall: string;
  frontCover: string;
  listenLinks: ListenLink[];
}
