'use client';

import { FormProvider, useForm } from 'react-hook-form';
import styles from './HomeRequestComponent.module.scss';
import SectionInformations from './section-informations/SectionInformations';
import SectionLifestyle from './section-lifestyle/SectionLifestyle';
import SectionMotivations from './section-motivations/SectionMotivations';
import SectionAdoption from './section-info-adoption/SectionAdoption';
import { useState } from 'react';
import sendRequest from '@/globals/hooks/sendRequest';
import { useUser } from '@/globals/utils/UserContext';

type Props = {
   pet: any;
};

const HomeRequestComponent = ({ pet }: Props) => {
   const methods = useForm();
   const { handleSubmit } = methods;
   const [consent, setConsent] = useState<boolean>(false);
   const user = useUser().user;
   const fosterFamily = user.fosterCares[0];

   const onSubmit = async (data: any) => {
      const newData = {
         animalId: pet.uuid,
         fosterCareId: user.fosterCares[0].uuid,
         family_home: data.house,
         has_children: data.has_children === 'Oui' ? true : false,
         children_age: data.children_age,
         has_animals: data.has_animal === 'Oui' ? true : false,
         animals: data.animals_infos,
         motivation: data.motivation,
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
                  <SectionInformations
                     fosterFamily={fosterFamily}
                     user={user}
                  />
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
