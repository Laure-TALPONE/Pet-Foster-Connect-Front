'use client';
import { PawPrint } from '@phosphor-icons/react';
import styles from './BannerHomePage.module.scss';

const BannerHomePage = () => {
   return (
      <div className={styles.banner}>
         <div className={styles.content}>
            <div className={styles.item}>
               <PawPrint />
               <span>95%</span>
               <p>
                  Des familles d’accueil déclarent une expérience positive et
                  enrichissante.
               </p>
            </div>
            <div className={styles.item}>
               <PawPrint />
               <span>48h</span>
               <p>En moyenne pour trouver une famille d’accueil disponible.</p>
            </div>
            <div className={styles.item}>
               <PawPrint />
               <span>95%</span>
               <p>Animaux sauvés grâce à l’accueil temporaire chaque année.</p>
            </div>
            <div className={styles.item}>
               <PawPrint />
               <span>95%</span>
               <p>
                  Associations partenaires engagées pour la protection animale.
               </p>
            </div>
         </div>
      </div>
   );
};

export default BannerHomePage;
