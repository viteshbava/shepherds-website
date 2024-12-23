'use client';

import Link from 'next/link';
import React from 'react';
import { buttonStyles } from './Button';
import { IconNames, Theme } from '@/app/types';
import Icon from '../icon/Icon';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  ariaLabel?: string;
  icon?: IconNames;
  theme?: Theme;
}

const ButtonLink = ({
  isExternal = false,
  onClick = () => {},
  children,
  className = '',
  ariaLabel = '',
  href,
  icon,
  theme = Theme.Red,
}: ButtonLinkProps) => {
  const typeClasses = buttonStyles();

  return (
    <Link
      aria-label={ariaLabel}
      target={isExternal ? '_blank' : ''}
      href={href}
      className={`${className} ${typeClasses} flex items-center gap-2 uppercase text-sm ${
        theme === Theme.Red ? 'bg-red_dim' : 'bg-green_dim'
      }`}
      onClick={onClick}>
      {icon && (
        <Icon
          name={icon}
          className={`w-6 h-6 ${theme === Theme.Red ? 'text-red_dim' : 'text-green_dim'}`}
        />
      )}
      {children}
    </Link>
  );
};

export default ButtonLink;
