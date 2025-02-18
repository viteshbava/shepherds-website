'use client';

import { useEffect, useState } from 'react';

const useLockBodyScroll = () => {
  const [isBodyScrollLocked, setIsBodyScrollLocked] = useState(false);

  useEffect(() => {
    console.log('YEP');
    if (isBodyScrollLocked) {
      console.log('adding overflow-hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      console.log('removing overflow-hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }, [isBodyScrollLocked]);

  return setIsBodyScrollLocked;
};

export default useLockBodyScroll;
