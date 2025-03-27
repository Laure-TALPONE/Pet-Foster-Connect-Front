'use client';

import styles from './SectionMotivations.module.scss';

const SectionMotivations = () => {
   return (
      <section className={styles.motivations}>
         <h3>Vos motivations*</h3>
         <p>
            Pourquoi souhaitez-vous accueillir <span>Milo</span> ?
         </p>
         <div className={`m-input ${styles.textarea}`}>
            <textarea></textarea>
         </div>
         <div className={styles.consent}>
            <div className="m-checkbox">
               <input type="checkbox" />
               <span></span>
            </div>
            <p>
               J’accepte que les informations personnelles fournies dans ce
               formulaire soient partagées avec
               <span> L’association Pattes Solidaires</span> afin de traiter ma
               demande d’adoption.
            </p>
         </div>
      </section>
   );
};

export default SectionMotivations;
