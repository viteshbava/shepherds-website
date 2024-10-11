'use client';

import Link from 'next/link';
import React from 'react';
import { buttonStyles } from './Button';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  ariaLabel?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  isExternal = false,
  onClick = () => {},
  children,
  className = '',
  ariaLabel = '',
}) => {
  const typeClasses = buttonStyles();

  return (
    <Link
      aria-label={ariaLabel}
      target={isExternal ? '_blank' : ''}
      href={href}
      className={`${className} ${typeClasses}`}
      onClick={onClick}>
      {children}
    </Link>
  );
};

export default ButtonLink;
