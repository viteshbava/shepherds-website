interface ListenLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface MusicData {
  embedLink: string;
  frontCover: string;
  listenLinks: ListenLink[];
}
