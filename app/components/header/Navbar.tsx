'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HamburgerButton } from './HamburgerButtons';
import HamburgerMenu from './HamburgerMenu';

const navLinks = [
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

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };
  return (
    <>
      <nav className='hidden lg:block'>
        <ul className='flex'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                type='nav'
                className='flex justify-center items-center text-xl text-white rounded-full w-36 h-10 transition duration-200 ease-in-out hover:opacity-50'
                href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='absolute top-0 right-0 h-[4.5rem] sm:h-24 lg:hidden flex flex-col justify-center'>
        <button
          aria-label='Open menu'
          onClick={toggleMenu}
          className='flex justify-center items-center focus:outline-none w-14 h-14 sm:w-16 sm:h-16 rounded-full active:bg-primary_yellow sm:hover:bg-primary_yellow transition'>
          <HamburgerButton />
        </button>
        {isHamburgerOpen && (
          <HamburgerMenu navLinks={navLinks} closeMenu={() => setIsHamburgerOpen(false)} />
        )}
      </div>
    </>
  );
};

export default Navbar;
