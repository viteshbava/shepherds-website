import React from 'react';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Home',
    href: '/#home',
  },
  {
    name: 'Music',
    href: '/#music',
  },
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Contact',
    href: '/#contact',
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className='flex'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              type='nav'
              className='flex justify-center items-center text-xl text-white rounded-full w-36 h-10 transition duration-200 ease-in-out hover:opacity-50'
              href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
