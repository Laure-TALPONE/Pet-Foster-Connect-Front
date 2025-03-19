'use client';
import Image from 'next/image';
import styles from './SectionFosterFamily.module.scss';

const SectionFosterFamily = () => {
   return (
      <div className="container">
         <div className={styles.sectionFF}>
            <div className={styles.content}>
               <Image
                  src={'/images/RABBIT-VECTO.webp'}
                  alt="rabbit"
                  width={100}
                  height={125}
               />
               <div className={styles.text}>
                  <h2 className={styles.title}>
                     Vous êtes une organisation et vous cherchez une famille
                     d’accueil ?
                  </h2>
                  <p className={styles.paragraph}>
                     Vous êtes une association de protection animale ou une
                     organisation engagée et vous recherchez des familles
                     d’accueil pour héberger temporairement des animaux en
                     attente d’adoption ? Notre plateforme vous aide à trouver
                     rapidement des foyers disponibles, en fonction des besoins
                     spécifiques de chaque animal. Grâce à un réseau de familles
                     bienveillantes et engagées, offrez à vos protégés un
                     environnement sécurisé et chaleureux avant leur adoption
                     définitive. Simplifiez la gestion des hébergements,
                     optimisez vos sauvetages et donnez une seconde chance à
                     chaque animal.
                     <br />
                     <span>
                        Inscrivez votre association et trouvez dès aujourd’hui
                        des familles d’accueil prêtes à ouvrir leur porte !
                     </span>
                  </p>
               </div>
               <button type="button" className="m-button">
                  Découvrir nos familles d’accueil
               </button>
            </div>
         </div>
      </div>
   );
};

export default SectionFosterFamily;
