import React from 'react';
import Paragraph from './typography/Paragraph';

const Footer = () => {
  return (
    <footer className='shrink-0 flex justify-center items-center pb-6'>
      <Paragraph size='sm'>&#169; 2024 Shepherds of Cassini</Paragraph>
    </footer>
  );
};

export default Footer;
