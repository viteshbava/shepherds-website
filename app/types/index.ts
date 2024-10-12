export interface ListenLink {
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

export interface MusicData {
  name: string;
  slug: string;
  releaseDate?: Date;
  trackListing: string[];
  embed: EmbedLinks;
  frontCover: string;
  listenLinks: ListenLink[];
  credits: Credit[];
}
