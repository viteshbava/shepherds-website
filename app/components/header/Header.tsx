import React from 'react';
import Navbar from './Navbar';
import Logo from '../Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-full py-6 px-10 flex justify-between items-center	'>
      <Link className='transition duration-200 ease-in-out hover:opacity-50' href={'#/home'}>
        <Logo />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
