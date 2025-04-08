'use client';
import Link from 'next/link';
import styles from './FooterComponent.module.scss';

const FooterComponent = () => {
   return (
      <div className={styles.footer}>
         <p>
            <Link href={'/mentions-legales'}>Mentions légales</Link> | Pet
            Foster Connect  © 2025
         </p>
      </div>
   );
};

export default FooterComponent;
