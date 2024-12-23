import { EmbedLinks, ListenLink, Theme } from '@/app/types';
import React from 'react';
import ButtonLink from '../ui/ButtonLink';

interface ListenBlockProps {
  className?: string;
  embedLinks: EmbedLinks;
  listenLinks: ListenLink[];
  theme: Theme;
}

const ListenBlock = ({ className = '', listenLinks, embedLinks, theme }: ListenBlockProps) => {
  return (
    <div className={`${className} my-6 sm:my-0`}>
      <h2
        className={`text-xl ${theme === Theme.Red ? 'text-red_bright' : 'text-green_bright'} mb-2`}>
        Listen | Purchase
      </h2>
      <div className='hidden sm:block w-full h-[120px]'>
        <iframe className='border-0 w-full h-full' src={embedLinks.large} seamless></iframe>
      </div>
      <div className='sm:hidden w-full h-[42px]'>
        <iframe className='border-0 w-full h-full' src={embedLinks.small} seamless></iframe>
      </div>
      <div className='flex flex-col space-y-3 mt-4'>
        {listenLinks.map((link, i) => (
          <ButtonLink
            key={i}
            isExternal
            href={link.href}
            ariaLabel={link.ariaLabel}
            theme={theme}
            icon={link.icon}
            className={`w-full`}>
            {link.label}
          </ButtonLink>
        ))}
      </div>
    </div>
  );
};

export default ListenBlock;
