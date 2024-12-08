import React from 'react';
import styles from './styles.module.css';
import { Theme } from '@/app/types';

interface CloudsProps {
  theme: Theme;
  behindBackgroundImg?: boolean;
}

const CLOUD_BACKGROUNDS = {
  [Theme.Green]: {
    left: 'radial-gradient(circle closest-side, #4dccd3, rgba(77, 204, 211, 0))',
    right: 'radial-gradient(circle closest-side, #5fa7f4, rgba(77, 204, 211, 0))',
  },
  [Theme.Red]: {
    left: 'radial-gradient(circle closest-side, #d34d4d, rgba(211, 77, 77, 0))',
    right: 'radial-gradient(circle closest-side, #f45f5f, rgba(211, 77, 77, 0))',
  },
  [Theme.Grey]: {
    left: 'radial-gradient(circle closest-side, #545454, rgba(160, 160, 160, 0))',
    right: 'radial-gradient(circle closest-side, #616161, rgba(192, 192, 192, 0))',
  },
  // Add more themes as needed
};

const Clouds = ({ theme, behindBackgroundImg = true }: CloudsProps) => {
  const cloudStyles = CLOUD_BACKGROUNDS[theme] || CLOUD_BACKGROUNDS[Theme.Green];
  const zIndex = behindBackgroundImg ? '-z-30' : '-z-10';

  return (
    <div className={`fixed ${zIndex}`}>
      {/* Left cloud */}
      <div className={styles['cloud-left']} style={{ background: cloudStyles.left }}></div>
      {/* Right cloud */}
      <div className={styles['cloud-right']} style={{ background: cloudStyles.right }}></div>
    </div>
  );
};

export default Clouds;
