'use client';

/*
  Handles scroll position on page load and navigation:
  - If a hash is in the URL, scroll to that section.
  - Otherwise, force scroll to the top of the page.
  Uses both scrollTo and direct scrollTop assignment for maximum
  iOS Safari/Chrome compatibility.
*/

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const LoadSection = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return <></>;
};

export default LoadSection;
