'use client';

import { FormProvider, useForm } from 'react-hook-form';
import styles from './HomeRequestComponent.module.scss';
import SectionInformations from './section-informations/SectionInformations';
import SectionLifestyle from './section-lifestyle/SectionLifestyle';
import SectionMotivations from './section-motivations/SectionMotivations';
import SectionAdoption from './section-info-adoption/SectionAdoption';
import { useState } from 'react';
import sendRequest from '@/globals/hooks/sendRequest';

type Props = {
   pet: any;
};

const HomeRequestComponent = ({ pet }: Props) => {
   // console.log(pet);
   const methods = useForm();
   const { handleSubmit } = methods;
   const [consent, setConsent] = useState<boolean>(false);

   const onSubmit = async (data: any) => {
      const newData = {
         animalId: pet.uuid,
         // civility: data.civility,
         // firstname: data.firstname,
         // lastname: data.lastname,
         // email: data.email,
         // phone: data.phone,
         // address: data.address,
         // postcode: data.postcode,
         // city: data.city,
         // house: data.house,
         // has_children: data.has_children,
         childs: data.has_children === 'true' ? true : false,
         // children_age: data.children_age,
         has_animals: data.has_animal === 'true' ? true : false,
         animals: data.animals_infos,
         motivation: data.motivation,
         family_type: 'dynamic',
         // consent: data.consent,
      };

      console.log(newData, 'ici les datas');

      const result = await sendRequest(
         'POST',
         '/api/home-request/create',
         newData
      );

      if (result) {
         console.log("Création d'une demande d'adoption réussie.");
      }

      if (!result) {
         console.log("Création d'une demande d'adoption échouée.");
      }
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
