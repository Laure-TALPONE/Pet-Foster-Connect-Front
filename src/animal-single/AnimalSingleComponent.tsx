'use client';

import Image from 'next/image';
import styles from './AnimalSingleComponent.module.scss';

const AnimalSingleComponent = () => {
   return (
      <section className="container">
         <div className={styles.animalPage}>
            <section className={styles.presentation}>
               <div className={styles.text}>
                  <h2 className={styles.title}>
                     Prêt à accueillir Milo ? <br /> Contactez-nous dès
                     maintenant !
                  </h2>
                  <p className={styles.info}>
                     Milo est un jeune Border Collie plein d’énergie et très
                     affectueux. Intelligent et joueur, il adore apprendre de
                     nouveaux tours et se dépenser en extérieur. Sociable avec
                     les humains et les autres chiens, il conviendrait
                     parfaitement à une famille active prête à lui offrir du
                     temps et de l’attention. Actuellement en attente d’une
                     famille d’accueil, Milo cherche un foyer temporaire où il
                     pourra s’épanouir en toute sécurité.
                  </p>
               </div>
               <div className={styles.picture}>
                  <Image
                     src={'/images/animal-page/Milo1.webp'}
                     alt="pet-picture"
                     width={788}
                     height={459}
                  />
               </div>
            </section>

            <section className={styles.informations}>
               <div className={styles.details}>
                  <span>Disponible</span>
                  <div className={styles.content}>
                     <ol className={styles.left}>
                        <li>Nom : Milo</li>
                        <li>Espèce : Chien</li>
                        <li>Race : Border Collie</li>
                        <li>Vacciné : Oui</li>
                        <li>Stérilisé : Oui</li>
                     </ol>
                     <ol className={styles.right}>
                        <li>Date de naissance : 15/06/2022</li>
                        <li>Genre : Mâle</li>
                        <li>Localisation : Lyon</li>
                        <li>Sevré : Non</li>
                     </ol>
                  </div>
               </div>
               <Image
                  src={'/images/CAT-VECTO2.webp'}
                  alt="cat-vecto"
                  width={125}
                  height={123}
               />
            </section>

            <section className={styles.pictures}>
               <div className={styles.picture}>
                  <Image
                     src={'/images/animal-page/Milo1.webp'}
                     alt="pet-picture"
                     width={788}
                     height={459}
                  />
               </div>
               <div className={styles.picture}>
                  <Image
                     src={'/images/animal-page/Milo2.webp'}
                     alt="pet-picture"
                     width={788}
                     height={459}
                  />
               </div>
               <div className={styles.picture}>
                  <Image
                     src={'/images/animal-page/Milo3.webp'}
                     alt="pet-picture"
                     width={788}
                     height={459}
                  />
               </div>
               <div className={styles.picture}>
                  <Image
                     src={'/images/animal-page/Milo1.webp'}
                     alt="pet-picture"
                     width={788}
                     height={459}
                  />
               </div>
            </section>
         </div>
      </section>
   );
};

export default AnimalSingleComponent;
