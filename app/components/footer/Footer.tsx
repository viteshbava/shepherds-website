import React from 'react';
import Copyright from '../Copyright';
import SocialIcons from '../SocialIcons';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center pt-6 pb-2 max-w-screen-xl w-[75%]'>
      <SocialIcons />
      <Copyright className='text-xs' />
    </footer>
  );
};

export default Footer;
