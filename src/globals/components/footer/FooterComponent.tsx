'use client';
import Link from 'next/link';
import styles from './FooterComponent.module.scss';

const FooterComponent = () => {
   return (
      <section className={styles.footer}>
         <div className={styles.links}>
            <Link href={'/mentions-legales'}>Mentions légales</Link>
            <Link href={'/cookies'}>Cookies</Link>
            <Link href={'/politique-confidentialite'}>
               Politique de confidentialité
            </Link>
         </div>
         <span>|</span>
         <p className={styles.copyright}>Pet Foster Connect © 2025</p>
      </section>
   );
};

export default FooterComponent;
