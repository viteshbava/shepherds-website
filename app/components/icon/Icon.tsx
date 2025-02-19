import { IconNames } from '@/app/types';
import {
  FaSpotify,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaBandcamp,
  FaShoppingCart,
} from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';

import React from 'react';

interface IconProps {
  name: IconNames;
  className?: string;
}

const iconMap: Record<IconNames, React.FC<{ className?: string }>> = {
  [IconNames.Bandcamp]: FaBandcamp,
  [IconNames.Spotify]: FaSpotify,
  [IconNames.AppleMusic]: SiApplemusic,
  [IconNames.YouTube]: FaYoutube,
  [IconNames.Facebook]: FaFacebook,
  [IconNames.Instagram]: FaInstagram,
  [IconNames.Amazon]: AiFillAmazonCircle,
  [IconNames.Email]: MdOutlineEmail,
  [IconNames.ShoppingCart]: FaShoppingCart,
};
const Icon = ({ name, className }: IconProps) => {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} />;
};

export default Icon;
