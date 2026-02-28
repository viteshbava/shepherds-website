import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from './Header';

const HOME_LINK: NavLink = { title: 'Home', href: '/' };

interface NavBarProps {
  navLinks: NavLink[];
  half?: 'left' | 'right';
}

const Navbar = ({ navLinks, half }: NavBarProps) => {
  const pathname = usePathname();

  // If custom links count is odd, prepend Home so both sides have equal links
  const allLinks = navLinks.length % 2 !== 0 ? [HOME_LINK, ...navLinks] : navLinks;
  const midpoint = allLinks.length / 2;

  const filteredLinks =
    half === 'left'
      ? allLinks.slice(0, midpoint)
      : half === 'right'
      ? allLinks.slice(midpoint)
      : allLinks;

  return (
    <nav className='hidden xl:block'>
      <ul className='flex'>
        {filteredLinks.map((link, index) => (
          <li key={index}>
            <Link
              className='flex justify-center items-center text-xl gold-heading font-bold rounded-full w-36 h-10 transition duration-200 ease-in-out hover:opacity-70'
              href={link.href}
              {...(link.href === pathname && { 'aria-current': 'page' as const })}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
