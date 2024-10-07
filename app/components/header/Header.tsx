'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Logo from '../Logo';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='fixed z-40 w-full h-[4.5rem] sm:h-24 px-4 sm:px-10 flex justify-between items-center'>
      {/* Background Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-to-b from-black/60 via-black/60 to-transparent ${
          isScrolled ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.7) 85%, transparent 100%)`,
        }}
      />
      {/* Content Layer */}
      <div className='relative z-10 flex justify-between items-center w-full h-full'>
        <Link
          className='transition duration-200 ease-in-out hover:opacity-50 flex-1 flex justify-center lg:justify-start'
          href={'#/home'}>
          <Logo className='w-56 px-8 sm:w-80' />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
