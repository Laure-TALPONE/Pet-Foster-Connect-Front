'use client';

import styles from './DashboardSettings.module.scss';

const DashboardSettings = () => {
   return (
      <section className={styles.settings}>
         <button type="button" className="m-button">
            Supprimer mon compte
         </button>
      </section>
   );
};

export default DashboardSettings;
