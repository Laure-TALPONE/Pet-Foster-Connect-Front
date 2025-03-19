'use client';
import { PawPrint } from '@phosphor-icons/react';
import styles from './BannerHomePage.module.scss';

const BannerHomePage = () => {
   return (
      <section className="container">
         <div className={styles.banner}>
            <ul className={styles.content}>
               <li className={styles.item}>
                  <PawPrint />
                  <span>95%</span>
                  <p>
                     Des familles d’accueil déclarent une expérience positive et
                     enrichissante.
                  </p>
               </li>
               <li className={styles.item}>
                  <PawPrint />
                  <span>48h</span>
                  <p>
                     En moyenne pour trouver une famille d’accueil disponible.
                  </p>
               </li>
               <li className={styles.item}>
                  <PawPrint />
                  <span>10 000+</span>
                  <p>
                     Animaux sauvés grâce à l’accueil temporaire chaque année.
                  </p>
               </li>
               <li className={styles.item}>
                  <PawPrint />
                  <span>500+</span>
                  <p>
                     Associations partenaires engagées pour la protection
                     animale.
                  </p>
               </li>
            </ul>
         </div>
      </section>
   );
};

export default BannerHomePage;
