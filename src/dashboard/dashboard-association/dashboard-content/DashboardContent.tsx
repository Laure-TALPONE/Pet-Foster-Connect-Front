'use client';

import { useMemo, useState } from 'react';
import styles from './DashboardContent.module.scss';

const DashboardContent = () => {
   const [buttonSelected, setButtonSelected] = useState<string>('pets');

   const handleSelectButton = (item: string) => {
      setButtonSelected(item);
   };

   const renderContent = useMemo(() => {
      if (buttonSelected === 'pets') {
         return <p>Liste de nos animaux</p>;
      }

      if (buttonSelected === 'requests') {
         return <p>Liste de nos demandes</p>;
      }
   }, [buttonSelected]);

   return (
      <section className="container">
         <div className={styles.top}>
            <h2 className={styles.title}>Tableau de Bord</h2>
            <div className={styles.toggle}>
               <button
                  type="button"
                  className={buttonSelected === 'pets' ? styles.selected : ''}
                  onClick={() => handleSelectButton('pets')}
               >
                  Nos animaux
               </button>
               <button
                  type="button"
                  className={
                     buttonSelected === 'requests' ? styles.selected : ''
                  }
                  onClick={() => handleSelectButton('requests')}
               >
                  Les demandes
               </button>
            </div>
         </div>
         {renderContent}
      </section>
   );
};

export default DashboardContent;
