import React, { useCallback, useEffect, useRef, useState } from 'react';
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

  // Ref to trap focus in the menu
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement>(null);

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

    const handleTabKey = (event: KeyboardEvent) => {
      const focusableElements = menuRef.current?.querySelectorAll(
        'a, button'
      ) as NodeListOf<HTMLElement>;
      if (!focusableElements || focusableElements.length === 0) return;

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstFocusable) {
          // If Shift + Tab and the first focusable element is focused, move focus to last
          event.preventDefault();
          lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
          // If Tab and the last focusable element is focused, move focus to first
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTabKey);
      firstFocusableRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [onClose, setIsBodyScrollLocked, isOpen]);

  useEffect(() => {
    if (isMounted && !isOpen) onClose();
  }, [isMounted, isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      aria-hidden={!isOpen}
      role='menu'
      className={`flex fixed bg-black inset-y-0 top-0 left-0 w-screen h-screen z-30 flex-col justify-between items-center p-4 transition-all duration-200 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
      <nav className='flex-grow flex items-center justify-center'>
        <ul className='flex flex-col gap-4'>
          {navLinks.map((link, index) => (
            <li key={index} onClick={onClose}>
              <Link
                ref={
                  index === 0
                    ? firstFocusableRef
                    : index === navLinks.length - 1
                    ? lastFocusableRef
                    : null
                }
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
