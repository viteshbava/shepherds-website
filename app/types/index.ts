interface ListenLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface MusicData {
  name: string;
  slug: string;
  releaseDate?: Date;
  trackListing: string[];
  embedLarge: string;
  embedSmall: string;
  frontCover: string;
  listenLinks: ListenLink[];
}
