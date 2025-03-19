'use client';
import Image from 'next/image';
import styles from './SectionPartners.module.scss';

const SectionPartners = () => {
   return (
      <section className={styles.partners}>
         <div className={styles.content}>
            <h2 className={styles.title}>Ils nous font confiance ...</h2>
            <ul className={styles.list}>
               <li>
                  <Image
                     src={'/images/spa-logo.webp'}
                     alt="logo SPA"
                     width={80}
                     height={80}
                  />
               </li>
               <li>
                  <Image
                     src={'/images/spa-logo.webp'}
                     alt="logo SPA"
                     width={80}
                     height={80}
                  />
               </li>
               <li>
                  <Image
                     src={'/images/spa-logo.webp'}
                     alt="logo SPA"
                     width={80}
                     height={80}
                  />
               </li>
               <li>
                  <Image
                     src={'/images/spa-logo.webp'}
                     alt="logo SPA"
                     width={80}
                     height={80}
                  />
               </li>
               <li>
                  <Image
                     src={'/images/spa-logo.webp'}
                     alt="logo SPA"
                     width={80}
                     height={80}
                  />
               </li>
               <li>
                  <Image
                     src={'/images/spa-logo.webp'}
                     alt="logo SPA"
                     width={80}
                     height={80}
                  />
               </li>
            </ul>
         </div>
      </section>
   );
};

export default SectionPartners;
