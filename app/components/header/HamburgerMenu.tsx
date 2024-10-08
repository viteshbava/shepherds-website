import React, { useCallback, useEffect, useState } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import Link from 'next/link';
import { NavLink } from './Header';
import Copyright from '../Copyright';

interface HamburgerMenuProps {
  navLinks: NavLink[];
  isOpen: boolean;
  closeMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ navLinks, isOpen, closeMenu }) => {
  const [isMounted, setIsMounted] = useState(false);
  const setIsBodyScrollLocked = useLockBodyScroll();

  const onClose = useCallback(() => {
    setTimeout(closeMenu, 200);
    setIsBodyScrollLocked(false);
  }, [setIsBodyScrollLocked, closeMenu]);

  useEffect(() => {
    setIsMounted(true);
    setIsBodyScrollLocked(true);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose, setIsBodyScrollLocked]);

  useEffect(() => {
    if (isMounted && !isOpen) onClose();
  }, [isMounted, isOpen, onClose]);

  return (
    <div
      className={`flex fixed bg-black inset-y-0 top-0 left-0 w-screen h-screen z-30 flex-col justify-between items-center p-4 transition-all duration-200 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
      <nav className='flex-grow flex items-center justify-center'>
        <ul className='flex flex-col gap-4'>
          {navLinks.map((link, index) => (
            <li key={index} onClick={onClose}>
              <Link
                type='nav'
                className={`flex justify-center items-center p-4 text-xl text-white rounded-md w-full h-10 transition duration-200 ease-in-out hover:bg-primary_yellow`}
                href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Copyright className='text-xs' />
    </div>
  );
};

export default HamburgerMenu;
