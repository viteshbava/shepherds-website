import { IconNames } from '@/app/types';
import {
  FaSpotify,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaBandcamp,
  FaShoppingCart,
  FaItunesNote,
  FaAmazon,
  FaRegEnvelope,
} from 'react-icons/fa';

import React from 'react';

interface IconProps {
  name: IconNames;
  className?: string;
}

const iconMap: Record<IconNames, React.FC<{ className?: string }>> = {
  [IconNames.Bandcamp]: FaBandcamp,
  [IconNames.Spotify]: FaSpotify,
  [IconNames.AppleMusic]: FaItunesNote,
  [IconNames.YouTube]: FaYoutube,
  [IconNames.Facebook]: FaFacebook,
  [IconNames.Instagram]: FaInstagram,
  [IconNames.Amazon]: FaAmazon,
  [IconNames.Email]: FaRegEnvelope,
  [IconNames.ShoppingCart]: FaShoppingCart,
};
const Icon = ({ name, className }: IconProps) => {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} />;
};

export default Icon;
