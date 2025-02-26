'use client';
import Image from 'next/image';
import styles from './SectionPartners.module.scss';

const SectionPartners = () => {
   return (
      <div className={styles.partners}>
         <div className={styles.content}>
            <h2 className={styles.title}>Ils nous font confiance ...</h2>
            <div className={styles.list}>
               <Image
                  src={'/images/spa-logo.webp'}
                  alt="laspa-logo"
                  width={80}
                  height={80}
               />
               <Image
                  src={'/images/spa-logo.webp'}
                  alt="laspa-logo"
                  width={80}
                  height={80}
               />
               <Image
                  src={'/images/spa-logo.webp'}
                  alt="laspa-logo"
                  width={80}
                  height={80}
               />
               <Image
                  src={'/images/spa-logo.webp'}
                  alt="laspa-logo"
                  width={80}
                  height={80}
               />
               <Image
                  src={'/images/spa-logo.webp'}
                  alt="laspa-logo"
                  width={80}
                  height={80}
               />
               <Image
                  src={'/images/spa-logo.webp'}
                  alt="laspa-logo"
                  width={80}
                  height={80}
               />
            </div>
         </div>
      </div>
   );
};

export default SectionPartners;
