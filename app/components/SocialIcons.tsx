import Link from 'next/link';
import React from 'react';
import { FaBandcamp, FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiItunes } from 'react-icons/si';

const iconClasses = 'size-9 hover:opacity-90';

const SocialIcons = () => {
  return (
    <div className='w-full text-red_dim flex sm:flex-wrap justify-center gap-4 sm:gap-9 my-8 sm:my-4 flex-wrap'>
      <Link target='_blank' href={'https://shepherdsofcassini.bandcamp.com/'}>
        <FaBandcamp className={iconClasses} />
      </Link>
      <Link target='_blank' href={'https://open.spotify.com/artist/7znkRbIN9sOYccThMoIHqM'}>
        <FaSpotify className={iconClasses} />
      </Link>
      <Link
        target='_blank'
        href={'https://music.apple.com/us/artist/shepherds-of-cassini/738917354'}>
        <SiItunes className={iconClasses} />
      </Link>
      <Link target='_blank' href={'https://www.youtube.com/shepherdsofcassini'}>
        <FaYoutube className={iconClasses} />
      </Link>
      <Link target='_blank' href={'https://www.facebook.com/shepherdsofcassiniband/'}>
        <FaFacebook className={iconClasses} />
      </Link>
      <Link target='_blank' href={'https://www.instagram.com/shepherdsofcassini/'}>
        <FaInstagram className={iconClasses} />
      </Link>
    </div>
  );
};

export default SocialIcons;
