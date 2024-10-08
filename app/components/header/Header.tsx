'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Logo from '../Logo';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import { HamburgerButton } from './HamburgerButton';

export interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  {
    title: 'Home',
    href: '/#home',
  },
  {
    title: 'Music',
    href: '/#music',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

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
    <>
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
        <div className='relative flex justify-between items-center w-full h-full'>
          <div className='flex-1 flex justify-center lg:justify-start'>
            <Link
              onClick={() => setIsHamburgerOpen(false)}
              className='transition duration-200 ease-in-out hover:opacity-50'
              href={'#/home'}>
              <Logo className='w-56 px-8 sm:w-80' />
            </Link>
          </div>
          <Navbar navLinks={navLinks} />
        </div>
        {/* Hamburger button/cross */}
        <div className='absolute top-0 right-0 pr-2 h-[4.5rem] sm:h-24 lg:hidden flex flex-col justify-center'>
          <button
            aria-label='Open menu'
            onClick={toggleMenu}
            className='flex justify-center items-center focus:outline-none w-14 h-14 sm:w-16 sm:h-16 rounded-full active:bg-primary_yellow sm:hover:bg-primary_yellow transition'>
            <HamburgerButton closed={!isHamburgerOpen} />
          </button>
        </div>
      </header>
      <HamburgerMenu
        navLinks={navLinks}
        isOpen={isHamburgerOpen}
        closeMenu={() => setIsHamburgerOpen(false)}
      />
    </>
  );
};

export default Header;
