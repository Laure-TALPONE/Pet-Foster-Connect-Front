'use client';
import Image from 'next/image';
import styles from './ArticleFoster.module.scss';

const ArticleFoster = () => {
   return (
      <section className="container">
         <div className={styles.article}>
            <div className={styles.text}>
               <h2 className={styles.title}>
                  Un foyer temporaire pour chaque animal
               </h2>
               <div className={styles.details}>
                  <p>
                     Offrez un refuge temporaire aux animaux dans le besoin.
                     <br />
                     Notre plateforme facilite la mise en relation entre
                     familles d'accueil et associations de protection animale
                     pour assurer le bien-être des animaux en attente
                     d’adoption.
                     <br />
                     Pourquoi nous rejoindre ?
                  </p>
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
                  <p>Ensemble, offrons à chaque animal une seconde chance.</p>
               </div>
            </div>
            <div className={styles.picture}>
               <Image
                  className={styles.picture}
                  src={'/images/home/pet-home.webp'}
                  alt="pets"
                  width={504}
                  height={393}
               />
            </div>
         </div>
      </section>
   );
};

export default ArticleFoster;
