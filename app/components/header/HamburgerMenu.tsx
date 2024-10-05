import React, { useCallback, useEffect, useState } from 'react';
import { HamburgerCross } from './HamburgerButtons';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import Link from 'next/link';
import Logo from '../Logo';

export interface NavLink {
  href: string;
  title: string;
}

interface HamburgerMenuProps {
  navLinks: NavLink[];
  closeMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ navLinks, closeMenu }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const setIsBodyScrollLocked = useLockBodyScroll();

  const onClose = useCallback(() => {
    setIsShowing(false);
    setIsBodyScrollLocked(false);
  }, [setIsBodyScrollLocked]);

  useEffect(() => {
    setIsShowing(true);
    setIsMounted(true);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    setIsBodyScrollLocked(true);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose, setIsBodyScrollLocked]);

  useEffect(() => {
    if (isMounted && !isShowing) setTimeout(closeMenu, 500);
  }, [isShowing, closeMenu, isMounted]);

  return (
    <>
      {isShowing && (
        <div className={`fixed inset-0 z-30 bg-black bg-opacity-30`} onClick={onClose}></div>
      )}
      <div
        className={`flex fixed bg-white inset-y-0 right-0 max-w-md w-10/12 sm:w-1/2 z-40 flex-col justify-start p-4 transition-transform duration-500 shadow-xl ${
          isShowing ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='flex justify-between mb-8'>
          <Link
            href='#home'
            className='w-full max-w-40 sm:max-w-48 relative filter drop-shadow-[0px_3px_3px_rgba(0,0,0,0.25)] hover:scale-105 transition-all'
            onClick={onClose}>
            <Logo />
          </Link>
          <button
            aria-label='Close menu'
            onClick={onClose}
            className='flex justify-center items-center focus:outline-none w-14 h-14 sm:w-16 sm:h-16 rounded-full hover:bg-primary_yellow transition'>
            <HamburgerCross />
          </button>
        </div>
        <nav>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((link, index) => (
              <li key={index} onClick={onClose}>
                <Link
                  type='nav'
                  className={`flex items-center p-4 text-2xl text-black rounded-md font-bold w-full h-10 transition duration-200 ease-in-out hover:bg-primary_yellow`}
                  href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
