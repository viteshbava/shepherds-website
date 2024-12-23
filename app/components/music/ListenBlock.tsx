import { EmbedLinks, ListenLink, Theme } from '@/app/types';
import React from 'react';
import ButtonLink from '../ui/ButtonLink';
import BandcampPlayer from '../BandcampPlayer';

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
      <BandcampPlayer embed={embedLinks} theme={theme} />
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
            <span className='whitespace-nowrap'>
              <span className='font-bold'>{link.label}</span>
              {link.secondaryLabel && ` | ${link.secondaryLabel}`}
            </span>{' '}
          </ButtonLink>
        ))}
      </div>
    </div>
  );
};

export default ListenBlock;
