import React from 'react';
import Link from 'next/link';
import { NavLink } from './Header';

interface NavBarProps {
  navLinks: NavLink[];
  half?: 'left' | 'right';
}

const Navbar = ({ navLinks, half }: NavBarProps) => {
  const totalLinks = navLinks.length;
  const midpoint = Math.floor(totalLinks / 2); // Midpoint index

  const filteredLinks =
    half === 'left'
      ? totalLinks % 2 === 0
        ? navLinks.slice(0, midpoint) // First half for even
        : navLinks.slice(0, midpoint) // Before middle for odd
      : half === 'right'
      ? totalLinks % 2 === 0
        ? navLinks.slice(midpoint) // Second half for even
        : navLinks.slice(midpoint) // Middle and after for odd
      : navLinks; // All links if `half` is undefined

  return (
    <nav className='hidden lg:block'>
      <ul className='flex'>
        {filteredLinks.map((link, index) => (
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
  );
};

export default Navbar;
