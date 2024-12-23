import { IconNames } from '@/app/types';
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaAmazon,
  FaBandcamp,
} from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

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
  [IconNames.Amazon]: FaAmazon,
};
const Icons = ({ name, className }: IconProps) => {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} />;
};

export default Icons;
