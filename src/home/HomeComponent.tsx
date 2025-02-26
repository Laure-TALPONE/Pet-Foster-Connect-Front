'use client';
import Image from 'next/image';
import styles from './HomeComponent.module.scss';

const HomeComponent = () => {
   return (
      <div className={styles.main}>
         <div className={styles.content}>
            <div className={styles.article}>
               <div className={styles.text}>
                  <h2 className={styles.title}>
                     Un foyer temporaire <br /> pour chaque animal
                  </h2>
                  <div className={styles.details}>
                     Offrez un refuge temporaire aux animaux dans le besoin.
                     <br />
                     Notre plateforme facilite la mise en relation entre
                     familles d'accueil et associations de protection animale
                     pour assurer le bien-être des animaux en attente
                     d’adoption.
                     <br />
                     Pourquoi nous rejoindre ?
                     <br />
                     <ul>
                        <li>
                           Accueillez un animal selon vos disponibilités et
                           préférences.
                        </li>
                        <li>
                           Trouvez rapidement une famille d’accueil pour vos
                           protégés.
                        </li>
                        <li>
                           Créez un réseau solidaire au service de la cause
                           animale.
                        </li>
                        <li>
                           Gérez facilement les disponibilités et les besoins
                           spécifiques.
                        </li>
                     </ul>
                     Ensemble, offrons à chaque animal une seconde chance.
                  </div>
               </div>
               <Image
                  className={styles.picture}
                  src={'/images/dog.webp'}
                  alt="pets"
                  width={504}
                  height={393}
               />
            </div>
         </div>
      </div>
   );
};

export default HomeComponent;
