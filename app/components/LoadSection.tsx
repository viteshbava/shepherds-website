'use client';

/*
  This component will land the user on the correct section on page load/navigation.
  - If a hash is in the URL, scroll to that section smoothly.
  - Otherwise, scroll to the top of the page instantly (overriding the CSS scroll-smooth
    which can cause incorrect scroll positions during page transitions).
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
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return <></>;
};

export default LoadSection;
