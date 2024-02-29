import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaBandcamp, FaSpotify, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiItunes } from 'react-icons/si';

const iconClasses = 'size-9 hover:opacity-90';
const emailAddress = 'shepherdsofcassini@gmail.com';

const BasicInfo = () => {
  return (
    <div className='flex flex-col items-center text-center mt-16 sm:mt-8'>
      <p>
        Shepherds Of Cassini is
        <br />
        Omar Al-Hashimi – Drums, Vitesh Bava – Bass, Felix Lun – Violin, Brendan Zwaan – Guitar,
        Vocals, Keys
      </p>
      <div className='text-primary_green_light flex flex-wrap justify-center gap-x-9 gap-y-4 my-4'>
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
      <a className='hover:underline' href={`mailto:${emailAddress}`}>
        {emailAddress}
      </a>
    </div>
  );
};

export default BasicInfo;
