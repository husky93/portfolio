import React from 'react';
import styles from '../assets/styles/Loading.module.css';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
