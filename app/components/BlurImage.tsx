'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

const BlurImage = ({ onLoad, className, ...rest }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text -- alt is passed through via ...rest
    <Image
      {...rest}
      className={`${className ?? ''} transition-[filter] duration-700 ${loaded ? 'blur-0' : 'blur-xl'}`}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
};

export default BlurImage;
