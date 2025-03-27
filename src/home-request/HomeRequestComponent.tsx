'use client';

import { useForm } from 'react-hook-form';
import styles from './HomeRequestComponent.module.scss';
import SectionInformations from './section-informations/SectionInformations';
import SectionLifestyle from './section-lifestyle/SectionLifestyle';
import SectionMotivations from './section-motivations/SectionMotivations';
import SectionAdoption from './section-info-adoption/SectionAdoption';

const HomeRequestComponent = () => {
   const { register, setValue, handleSubmit, watch } = useForm();

   return (
      <section className="container">
         <div className={styles.request}>
            <h2 className={styles.title}>Demande d’accueil</h2>
            <form>
               <SectionInformations />
               <SectionLifestyle />
               <SectionMotivations />
               <SectionAdoption />
               <button type="submit" className="m-button">
                  Faire ma demande
               </button>
            </form>
         </div>
      </section>
   );
};

export default HomeRequestComponent;
