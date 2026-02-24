export interface ListenLink {
  icon?: IconNames;
  label: string;
  secondaryLabel?: string;
  href: string;
  ariaLabel: string;
}

export interface Credit {
  part_1?: string;
  part_2?: string;
}

export interface Image {
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
  ShoppingCart = 'shoppingCart',
}

export interface MusicData {
  name: string;
  slug: string;
  releaseDate?: Date;
  trackListing: string[];
  bandCampId: string;
  frontCover: Image;
  backgroundImage?: Image;
  listenLinks: ListenLink[];
  credits: Credit[];
  theme: Theme;
  galleryImages: Image[];
  openGraphImg: string;
}

export interface HeroLinks {
  listenLinks: ListenLink[];
  bandCampId: string;
  trackId?: string;
}

export interface Product {
  thumbSrc: string;
  gallery?: string[];
  thumbAltText: string;
  productName?: string;
  productType?: string;
  price?: string;
  priceInfo?: string;
  details?: string[];
  description?: string;
}
