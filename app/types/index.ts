interface ListenLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface MusicData {
  name: string;
  trackListing: string[];
  embedLarge: string;
  embedSmall: string;
  frontCover: string;
  listenLinks: ListenLink[];
}
