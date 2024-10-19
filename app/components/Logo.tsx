import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Image
      priority
      className={className}
      src='/imgs/soc-logo.png'
      alt='Shepherds of Cassini logo'
      width={300}
      height={60}
    />
  );
};

export default Logo;
