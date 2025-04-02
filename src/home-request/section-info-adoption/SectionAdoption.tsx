'use client';

import { Siren } from '@phosphor-icons/react';
import styles from './SectionAdoption.module.scss';

const SectionAdoption = () => {
   return (
      <section className={styles.adoption}>
         <Siren />
         <p>
            Adopter un animal via Pet Foster Connect, c’est bien plus qu’offrir
            un foyer : c’est transformer une vie, la leur et la vôtre. Chaque
            adoption permet à un animal abandonné de retrouver l’amour, la
            sécurité et la chaleur d’un foyer bienveillant. Avec Pet Foster
            Connect, vous bénéficiez d’un accompagnement personnalisé pour
            trouver le compagnon qui correspond parfaitement à votre mode de
            vie. Offrez-leur une seconde chance et découvrez un amour
            inconditionnel qui changera votre quotidien.
         </p>
      </section>
   );
};

export default SectionAdoption;
