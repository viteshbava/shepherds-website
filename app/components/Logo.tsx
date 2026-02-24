import React from 'react';
import BlurImage from './BlurImage';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <BlurImage
      priority
      className={className}
      src='/imgs/soc-logo.webp'
      alt='Shepherds of Cassini logo'
      width={300}
      height={60}
    />
  );
};

export default Logo;
