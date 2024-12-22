'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
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
  { title: 'Home', href: '/#home' },
  { title: 'Music', href: '/#music' },
  { title: 'About', href: '/#about' },
  { title: 'Contact', href: '/#contact' },
];

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const mediaQuery = window.matchMedia('(min-width: 640px)'); // Media query for non-mobile screens

    const handleScroll = () => {
      if (header && mediaQuery.matches) {
        const scrollY = window.scrollY;

        // Animate height
        gsap.to(header, {
          height: scrollY > 0 ? '4rem' : '6rem',
          duration: 0.1,
          ease: 'power1.out',
        });

        // Animate logo scaling
        gsap.to(logo, {
          scale: scrollY > 0 ? 0.8 : 1,
          duration: 0.1,
          ease: 'power1.out',
        });

        // Animate background blur
        gsap.to(header, {
          backdropFilter: scrollY > 0 ? 'blur(10px)' : 'blur(0px)',
          duration: 0.1,
          ease: 'power1.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className='fixed z-40 w-full min-h-[4rem] h-[6rem] sm:h-[6rem] px-4 sm:px-10 flex justify-between items-center transition-all duration-300'>
        {/* Background Layer */}
        <div className='absolute inset-0 transition-all duration-500 ease-in-out' />
        {/* Content Layer */}
        <div className='relative flex justify-between items-center w-full h-full'>
          {/* Logo in Center */}
          <div className='flex-1 flex justify-center'>
            <Link
              onClick={() => setIsHamburgerOpen(false)}
              className='transition duration-200 ease-in-out hover:opacity-50'
              href={'/#home'}>
              <Logo className='logo w-72 sm:w-80 transition-transform' />
            </Link>
          </div>
          <Navbar navLinks={navLinks} />
        </div>
        {/* Hamburger button/cross */}
        <div className='absolute top-0 right-0 pr-2 h-full lg:hidden flex flex-col justify-center'>
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
