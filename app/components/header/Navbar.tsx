import React from 'react';
import Link from 'next/link';
import { NavLink } from './Header';

const Navbar = ({ navLinks }: { navLinks: NavLink[] }) => (
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
);

export default Navbar;
