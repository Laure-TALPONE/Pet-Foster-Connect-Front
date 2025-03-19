'use client';
import Image from 'next/image';
import styles from './AnimalsAdopted.module.scss';

const AnimalsAdopted = () => {
   return (
      <div className="container">
         <div className={styles.adopted}>
            <div className={styles.content}>
               <Image
                  src={'/images/CAT-VECTO2.webp'}
                  alt="cat-vecto"
                  width={125}
                  height={123}
               />
               <div className={styles.text}>
                  <h2 className={styles.title}>
                     Nos derniers animaux recueillis en famille d’accueil
                  </h2>
                  <p className={styles.paragraph}>
                     Grâce à l’engagement des familles d’accueil, de nombreux
                     animaux en détresse trouvent un refuge temporaire avant
                     leur adoption définitive. Chaque nouvel accueil leur permet
                     de se reconstruire dans un environnement sécurisé et
                     chaleureux, loin du stress et de l’abandon. Découvrez les
                     derniers animaux pris en charge par nos familles d’accueil.
                     Chacun d’eux bénéficie de soins, d’amour et de
                     l’accompagnement nécessaire pour préparer leur future
                     adoption. En ouvrant votre foyer, vous offrez à ces animaux
                     une précieuse étape vers une nouvelle vie. Rejoignez notre
                     réseau et participez à cette belle mission solidaire !
                  </p>
               </div>
               <div className={styles.pictures}>
                  <div className={styles.animal}>
                     <Image
                        src={'/images/home/Milo.webp'}
                        alt="adopted"
                        width={150}
                        height={150}
                     />
                     <span className={styles.name}>Milo</span>
                  </div>
                  <div className={styles.animal}>
                     <Image
                        src={'/images/home/Nala.webp'}
                        alt="adopted"
                        width={150}
                        height={150}
                     />
                     <span className={styles.name}>Nala</span>
                  </div>
                  <div className={styles.animal}>
                     <Image
                        src={'/images/home/Cannelle.webp'}
                        alt="adopted"
                        width={150}
                        height={150}
                     />
                     <span className={styles.name}>Cannelle</span>
                  </div>
                  <div className={styles.animal}>
                     <Image
                        src={'/images/home/Rocky.webp'}
                        alt="adopted"
                        width={150}
                        height={150}
                     />
                     <span className={styles.name}>Rocky</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AnimalsAdopted;
