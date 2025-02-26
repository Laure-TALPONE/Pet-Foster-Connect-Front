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
         <div className={styles.custom}>
            <svg
               data-name="Layer 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1200 120"
               preserveAspectRatio="none"
            >
               <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className={styles.shapeFill}
               ></path>
            </svg>
         </div>
      </div>
   );
};

export default SectionAssociation;
