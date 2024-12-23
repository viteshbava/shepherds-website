'use client';

/*
  This component will land the user on the section on initial site load if a hash is in the URL and that section exists.
*/

import { useEffect } from 'react';

const LoadSection = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return <></>;
};

export default LoadSection;
