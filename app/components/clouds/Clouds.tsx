import React from 'react';
import styles from './styles.module.css';
import { Theme } from '@/app/types';

const Clouds = ({ theme }: { theme: Theme }) => {
  // Define background styles based on theme
  const cloudLeftBackground =
    theme === Theme.Green
      ? 'radial-gradient(circle closest-side, #4dccd3, rgba(77, 204, 211, 0))'
      : 'radial-gradient(circle closest-side, #d34d4d, rgba(211, 77, 77, 0))';

  const cloudRightBackground =
    theme === Theme.Green
      ? 'radial-gradient(circle closest-side, #5fa7f4, rgba(77, 204, 211, 0))'
      : 'radial-gradient(circle closest-side, #f45f5f, rgba(211, 77, 77, 0))';

  return (
    <div className='fixed -z-10'>
      {/* Left cloud */}
      <div className={styles['cloud-left']} style={{ background: cloudLeftBackground }}></div>
      {/* Right cloud */}
      <div className={styles['cloud-right']} style={{ background: cloudRightBackground }}></div>
    </div>
  );
};

export default Clouds;
