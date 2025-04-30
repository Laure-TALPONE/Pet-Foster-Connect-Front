'use client';

import { FormProvider, useForm } from 'react-hook-form';
import styles from './HomeRequestComponent.module.scss';
import SectionInformations from './section-informations/SectionInformations';
import SectionLifestyle from './section-lifestyle/SectionLifestyle';
import SectionMotivations from './section-motivations/SectionMotivations';
import SectionAdoption from './section-info-adoption/SectionAdoption';
import { useState } from 'react';

type Props = {
   pet: any;
};

const HomeRequestComponent = ({ pet }: Props) => {
   console.log(pet);
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

      // try {
      //    const response = await fetch('/api/home-request', {
      //       method: 'POST',
      //       headers: {
      //          'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify(newData),
      //    });

      //    const result = await response.json();

      //    if (!response.ok) {
      //       throw new Error(result.message || 'Une erreur est survenue.');
      //    }

      //    if (response.ok) {
      //       console.log('Demande d'accueil réussie :', result);
      //    }
      // } catch (error) {
      //    console.error('Erreur API :', error);
      // }
   };

   return (
      <section className="container">
         <div className={styles.request}>
            <h2 className={styles.title}>Demande d’accueil</h2>
            <FormProvider {...methods}>
               <form>
                  <SectionInformations />
                  <SectionLifestyle />
                  <SectionMotivations onSendConsent={setConsent} pet={pet} />
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
