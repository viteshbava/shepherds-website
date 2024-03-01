import React from 'react';
import styles from './styles.module.css';

const Clouds = () => {
  return (
    <div className='fixed -z-10'>
      <div className={styles['cloud-left']}></div>
      <div className={styles['cloud-right']}></div>
    </div>
  );
};

export default Clouds;
