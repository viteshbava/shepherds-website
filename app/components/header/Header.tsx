import React from 'react';
import Navbar from './Navbar';
import Logo from '../Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-full py-6 px-4 sm:px-10 flex justify-between items-center'>
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
