import React from 'react';
import Navbar from './Navbar';
import Logo from '../Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='fixed z-40 w-full h-[4.5rem] sm:h-24 px-4 sm:px-10 flex justify-between items-center'>
      <Link
        className='transition duration-200 ease-in-out hover:opacity-50 flex-1 flex justify-center lg:justify-start'
        href={'#/home'}>
        <Logo className='w-56	sm:w-auto' />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
