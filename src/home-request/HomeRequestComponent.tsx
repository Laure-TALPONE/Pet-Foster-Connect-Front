'use client';

import { FormProvider, useForm } from 'react-hook-form';
import styles from './HomeRequestComponent.module.scss';
import SectionInformations from './section-informations/SectionInformations';
import SectionLifestyle from './section-lifestyle/SectionLifestyle';
import SectionMotivations from './section-motivations/SectionMotivations';
import SectionAdoption from './section-info-adoption/SectionAdoption';
import { useState } from 'react';

const HomeRequestComponent = () => {
   const methods = useForm();
   const { handleSubmit } = methods;
   const [consent, setConsent] = useState<boolean>(false);

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
         has_children: data.has_children,
         children_age: data.children_age,
         has_animal: data.has_animal,
         animals_infos: data.animals_infos,
         motivation: data.motivation,
         consent: data.consent,
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
                  <SectionMotivations onSendConsent={setConsent} />
                  <SectionAdoption />
                  <button
                     type="submit"
                     className="m-button"
                     onClick={handleSubmit(onSubmit)}
                     disabled={!consent}
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
