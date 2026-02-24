import React, { useCallback, useEffect, useRef, useState } from 'react';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from './Header';
import Copyright from '../Copyright';
import SocialIcons from '../SocialIcons';

interface HamburgerMenuProps {
  navLinks: NavLink[];
  isOpen: boolean;
  closeMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ navLinks, isOpen, closeMenu }) => {
  const pathname = usePathname();
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
    // Function to update the menu height dynamically
    const updateMenuHeight = () => {
      if (menuRef.current) {
        // Set height of the menu to match the innerHeight of the window
        menuRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    // Update height on mount and resize
    if (isOpen) {
      updateMenuHeight();
      window.addEventListener('resize', updateMenuHeight);
    }

    return () => {
      window.removeEventListener('resize', updateMenuHeight);
    };
  }, [isOpen]);

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
      {...(!isOpen && { inert: true as any })}
      role='dialog'
      aria-modal={isOpen}
      aria-label='Navigation menu'
      className={`flex fixed bg-black inset-y-0 top-0 left-0 w-screen h-svh z-30 flex-col justify-between items-center px-6 transition-all duration-200 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
      <div className='w-full min-h-[40px] h-[18svh] max-h-[4.5rem] sm:max-h-24'></div>
      <nav className='flex-grow flex flex-col justify-center'>
        <ul className='flex flex-col justify-between max-h-[50svh] h-[250px]'>
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
                className={`flex justify-center items-center p-4 text-xl gold-heading rounded-md w-full h-10 transition duration-200 ease-in-out hover:opacity-70`}
                href={link.href}
                {...(link.href === pathname && { 'aria-current': 'page' as const })}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex flex-col justify-center items-center w-full pb-4'>
        <SocialIcons />
        <Copyright className='text-xs' />
      </div>
    </div>
  );
};

export default HamburgerMenu;
