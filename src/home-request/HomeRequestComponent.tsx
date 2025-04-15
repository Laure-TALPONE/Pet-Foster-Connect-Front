'use client';

import { FormProvider, useForm } from 'react-hook-form';
import styles from './HomeRequestComponent.module.scss';
import SectionInformations from './section-informations/SectionInformations';
import SectionLifestyle from './section-lifestyle/SectionLifestyle';
import SectionMotivations from './section-motivations/SectionMotivations';
import SectionAdoption from './section-info-adoption/SectionAdoption';

const HomeRequestComponent = () => {
   const methods = useForm();
   const { handleSubmit } = methods;

   const onSubmit = async (data: any) => {
      const newData = {
         civility: data.civility,
         firstname: data.firstname,
         lastname: data.lastname,
         email: data.email,
         phone: data.phone,
         address: data.address,
         postcode: data.postcode,
         city: data.city,
         house: data.house,
         children: data.children,
         children_age: data.children_age,
         has_animal: data.has_animal,
         animals_infos: data.animals_infos,
         motivation: data.motivation,
      };

      console.log(newData, 'ici les datas');
   };

   return (
      <section className="container">
         <div className={styles.request}>
            <h2 className={styles.title}>Demande d’accueil</h2>
            <FormProvider {...methods}>
               <form>
                  <SectionInformations />
                  <SectionLifestyle />
                  <SectionMotivations />
                  <SectionAdoption />
                  <button
                     type="submit"
                     className="m-button"
                     onClick={handleSubmit(onSubmit)}
                  >
                     Faire ma demande
                  </button>
               </form>
            </FormProvider>
         </div>
      </section>
   );
};

export default HomeRequestComponent;
