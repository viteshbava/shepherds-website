'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MusicPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/#music');
  }, [router]);

  return null;
};

export default MusicPage;
