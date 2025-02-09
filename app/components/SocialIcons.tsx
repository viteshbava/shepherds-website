import Link from 'next/link';
import React from 'react';
import Icons from './icon/Icon';
import { IconNames } from '../types';

const iconClasses = 'size-8 hover:opacity-90';

const SocialIcons = () => {
  return (
    <div className='w-full text-red_dim flex sm:flex-wrap justify-between sm:justify-center sm:gap-9 my-8 sm:my-4 flex-wrap'>
      <Link target='_blank' href={'https://shepherdsofcassini.bandcamp.com/'}>
        <Icons name={IconNames.Bandcamp} className={iconClasses} />
      </Link>
      <Link target='_blank' href={'https://open.spotify.com/artist/7znkRbIN9sOYccThMoIHqM'}>
        <Icons name={IconNames.Spotify} className={iconClasses} />
      </Link>
      <Link
        target='_blank'
        href={'https://music.apple.com/us/artist/shepherds-of-cassini/738917354'}>
        <Icons name={IconNames.AppleMusic} className={iconClasses} />
      </Link>
      <Link
        target='_blank'
        href={'https://www.amazon.com/music/player/artists/B00GHA5UKW/shepherds-of-cassini'}>
        <Icons name={IconNames.Amazon} className={iconClasses} />
      </Link>
      <Link target='_blank' href={'https://www.youtube.com/shepherdsofcassini'}>
        <Icons name={IconNames.YouTube} className={iconClasses} />
      </Link>
      <Link target='_blank' href={'https://www.facebook.com/shepherdsofcassiniband/'}>
        <Icons name={IconNames.Facebook} className={iconClasses} />
      </Link>
      <Link target='_blank' href={'https://www.instagram.com/shepherdsofcassini/'}>
        <Icons name={IconNames.Instagram} className={iconClasses} />
      </Link>
    </div>
  );
};

export default SocialIcons;
