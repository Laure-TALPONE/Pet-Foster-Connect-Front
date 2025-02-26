'use client';
import Image from 'next/image';
import styles from './SectionAssociation.module.scss';

const SectionAssociation = () => {
   return (
      <div className={styles.asso}>
         <div className={styles.content}>
            <Image
               src={'/images/DOG-VECTO.webp'}
               alt="dog"
               width={97}
               height={123}
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
            <button type="button" className="m-button">
               Découvrir nos organisations
            </button>
         </div>
      </div>
   );
};

export default SectionAssociation;
