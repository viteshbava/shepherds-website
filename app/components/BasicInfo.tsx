import React from 'react';
import { FaFacebook, FaBandcamp, FaSpotify, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { SiItunes } from 'react-icons/si';

const iconSize = 'size-9';
const emailAddress = 'shepherdsofcassini@gmail.com';

const BasicInfo = () => {
  return (
    <div className='flex flex-col items-center text-center'>
      <p>
        Shepherds Of Cassini is
        <br />
        Omar Al-Hashimi – Drums, Vitesh Bava – Bass, Felix Lun – Violin, Brendan Zwaan – Guitar,
        Vocals, Keys
      </p>
      <div className='text-primary_green_light flex gap-9'>
        <FaFacebook className={iconSize} />
        <FaInstagramSquare className={iconSize} />
        <FaBandcamp className={iconSize} />
        <FaSpotify className={iconSize} />
        <SiItunes className={iconSize} />
        <FaYoutube className={iconSize} />
      </div>
      <a className='hover:underline' href={`mailto:${emailAddress}`}>
        {emailAddress}
      </a>
    </div>
  );
};

export default BasicInfo;
