interface ListenLink {
  label: string;
  href: string;
  ariaLabel: string;
}

interface Credit {
  part_1?: string;
  part_2?: string;
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
  credits: Credit[];
}
