'use client';

import Image from 'next/image';
import styles from './LandingAssociation.module.scss';

const LandingAssociation = () => {
   return (
      <section className={styles.landing}>
         <div className={styles.content}>
            <h1 className={styles.name}>L’association Pattes Solidaires</h1>
            <div className={styles.logo}>
               <Image
                  src={'/images/logo-asso.webp'}
                  alt="logo-association"
                  width={200}
                  height={200}
               />
            </div>
         </div>
      </section>
   );
};

export default LandingAssociation;
