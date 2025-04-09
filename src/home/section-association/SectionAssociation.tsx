'use client';
import Image from 'next/image';
import styles from './SectionAssociation.module.scss';
import Link from 'next/link';

const SectionAssociation = () => {
   return (
      <section className="container">
         <div className={styles.asso}>
            <div className={styles.content}>
               <Image
                  src={'/images/DOG-VECTO.webp'}
                  alt="dog"
                  width={120}
                  height={130}
               />
               <div className={styles.text}>
                  <h2 className={styles.title}>
                     Les associations, au cœur de la protection animale
                  </h2>
                  <p className={styles.paragraph}>
                     Les associations de protection animale jouent un rôle
                     essentiel dans le sauvetage et le bien-être des animaux en
                     détresse. Grâce à leur engagement, des milliers d’animaux
                     trouvent refuge chaque année avant d’être adoptés
                     définitivement.
                  </p>
               </div>
               <Link href={'/associations'} className="m-button">
                  Découvrir nos associations
               </Link>
            </div>
         </div>
      </section>
   );
};

export default SectionAssociation;
