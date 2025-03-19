'use client';
import styles from './AnimalsComponent.module.scss';
import ListAnimals from './list-animals/ListAnimals';

const AnimalsComponent = () => {
   return (
      <section className="container">
         <div className={styles.animals}>
            <div className={styles.top}>
               <h2 className={styles.title}>
                  Nos animaux à accueillir en famille d’accueil
               </h2>
               <p className={styles.text}>
                  Voici les animaux proposés par nos associations partenaires,
                  prêts à être accueillis temporairement. Chaque animal a besoin
                  d’un foyer chaleureux et sécurisant pour l’aider à traverser
                  cette étape avant son adoption définitive. Parcourez notre
                  liste et choisissez l’animal qui pourrait rejoindre votre
                  foyer. Offrez-leur une seconde chance !
               </p>
            </div>
            <ListAnimals />
         </div>
      </section>
   );
};

export default AnimalsComponent;
