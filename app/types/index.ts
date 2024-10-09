interface ListenLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface MusicData {
  name: string;
  trackListing: string[];
  embedLink: string;
  frontCover: string;
  listenLinks: ListenLink[];
}
