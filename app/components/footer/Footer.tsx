import React from 'react';
import Copyright from '../Copyright';
import SocialIcons from '../SocialIcons';

const Footer = () => {
  return (
    <footer className='relative flex flex-col justify-center items-center py-6 max-w-screen-xl w-[80%]'>
      <SocialIcons />
      <Copyright className='text-xs' />
    </footer>
  );
};

export default Footer;
