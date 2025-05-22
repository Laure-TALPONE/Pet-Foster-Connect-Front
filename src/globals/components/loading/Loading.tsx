'use client';
import { PawPrint } from '@phosphor-icons/react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.spinner}></div>
      <div className={styles.paws}>
        <PawPrint className={styles.paw} size={32} weight="fill" color="var(--Orange)" />
        <PawPrint className={styles.paw} size={32} weight="fill" color="var(--Orange)" />
        <PawPrint className={styles.paw} size={32} weight="fill" color="var(--Orange)" />
      </div>
      <p className={styles.text}>Chargement des câlins et des ronrons...</p>
    </div>
  );
};

export default Loading;