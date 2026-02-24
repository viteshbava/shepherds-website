'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  { title: 'Home', href: '/' },
  { title: 'News', href: '/#news' },
  { title: 'Music', href: '/#music' },
  { title: 'Purchase', href: '/purchase' },
  { title: 'About', href: '/#about' },
  { title: 'Contact', href: '/#contact' },
];

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const mediaQuery = window.matchMedia('(min-width: 640px)'); // Media query for non-mobile screens

    const handleScroll = () => {
      if (header && mediaQuery.matches) {
        const scrollY = window.scrollY;

        // Animate height
        gsap.to(header, {
          height: scrollY > 0 ? '6rem' : '10rem',
          duration: 0.1,
          ease: 'power1.out',
        });

        // Animate logo scaling
        gsap.to(logo, {
          scale: scrollY > 0 ? 0.6 : 1,
          duration: 0.1,
          ease: 'power1.out',
        });
      }
      if (header) {
        // Animate background blur and darkness
        gsap.to(header, {
          backdropFilter: scrollY > 0 ? 'blur(10px)' : 'blur(0px)',
          backgroundColor: scrollY > 0 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0)',
          duration: 0.1,
          ease: 'power1.out',
        });
      }
    };

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className='fixed z-40 w-full min-h-[6rem] h-[6rem] sm:h-[10rem] px-4 sm:px-10 flex justify-between items-center transition-all duration-300'>
        {/* Background Layer */}
        <div className='absolute inset-0 transition-all duration-500 ease-in-out' />
        {/* Content Layer */}
        <div className='relative flex justify-center items-center w-full h-full'>
          {/* Logo in Center */}
          <Navbar navLinks={navLinks} half='left' />
          <div ref={logoRef} className='flex justify-center mx-12'>
            <Link
              onClick={() => setIsHamburgerOpen(false)}
              className='transition duration-200 ease-in-out hover:scale-105'
              href={'/'}>
              <Logo className='w-48 sm:w-80 transition-transform' />
            </Link>
          </div>
          <Navbar navLinks={navLinks} half='right' />
        </div>
        {/* Hamburger button/cross */}
        <div className='absolute top-0 right-0 pr-2 h-full xl:hidden flex flex-col justify-center'>
          <button
            aria-label='Open menu'
            onClick={toggleMenu}
            className='flex justify-center items-center focus:outline-none pointer-fine:focus-visible:ring-2 pointer-fine:focus-visible:ring-white/60 w-14 h-14 sm:w-16 sm:h-16 rounded-full active:bg-primary_yellow sm:hover:bg-primary_yellow transition'>
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
