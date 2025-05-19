'use client';

import { User } from '@phosphor-icons/react';
import styles from './ModalHomeRequest.module.scss';
import { useMemo, useState } from 'react';
import sendRequest from '@/globals/hooks/sendRequest';

type Props = {
   adoptionRequest?: any;
   onSuccess: any;
   onClose: any;
};

const ModalHomeRequest = ({ adoptionRequest, onSuccess, onClose }: Props) => {
   console.log(adoptionRequest);
   const handleUpdateStatusAdoptionRequest = async (status: string) => {
      if (status) {
         const result = await sendRequest(
            'PATCH',
            `/api/home-request/update/${adoptionRequest.uuid}`,
            { status: status }
         );

         onClose(true);

         if (result) {
            console.log(
               "Modification du status de la requête d'adoption réussie."
            );
            onSuccess('success', status);
         }

         if (!result) {
            console.log(
               "Modification du status de la requête d'adoption échouée."
            );
            onSuccess('echec');
         }
      }
   };

   const renderFamilyHome = useMemo(() => {
      return adoptionRequest.family_home.map((info: any, index: number) => {
         return <span key={index}>{info}</span>;
      });
   }, [adoptionRequest]);

   return (
      <div className={styles.content}>
         <section className={styles.top}>
            <div className={styles.name}>
               <div className={styles.picture}>
                  {adoptionRequest.fosterCare.image ? (
                     <img
                        src={adoptionRequest.fosterCare.image}
                        alt="foster-family-picture"
                        className={styles.familyPicture}
                     />
                  ) : (
                     <User />
                  )}
               </div>
               <h2>La famille {adoptionRequest.fosterCare.lastname}</h2>
            </div>
            <div className={styles.infoPet}>
               <p>
                  <span>Nom :</span> <span>{adoptionRequest.animal.name}</span>
               </p>
               <p>
                  <span>Espèce :</span>
                  <span>{adoptionRequest.animal.species.name}</span>
               </p>
            </div>
         </section>

         <section className={styles.infosRequest}>
            <h2>La demande</h2>
            <div className={styles.infosFamily}>
               <p>
                  {adoptionRequest.fosterCare.firstname}{' '}
                  {adoptionRequest.fosterCare.lastname}
               </p>
               <p>{adoptionRequest.fosterCare.user.email}</p>
               <p>
                  {adoptionRequest.fosterCare.address},{' '}
                  {adoptionRequest.fosterCare.postcode}{' '}
                  {adoptionRequest.fosterCare.city}, France
               </p>
               <p>{adoptionRequest.phone}</p>
            </div>
            <div className={styles.lifestyle}>
               <div className={styles.item}>
                  <p>Je possède un animal :</p>
                  <div className={styles.list}>
                     <span>{adoptionRequest.has_animals ? 'Oui' : 'Non'}</span>
                     <p>{adoptionRequest.animals}</p>
                  </div>
               </div>
               <div className={styles.item}>
                  <p>Avez vous des enfants :</p>
                  <div className={styles.list}>
                     <span>{adoptionRequest.has_children ? 'Oui' : 'Non'}</span>
                     <p>{adoptionRequest.children_age}</p>
                  </div>
               </div>
               <div className={styles.item}>
                  <p>Votre habitation :</p>
                  <div className={styles.list}>{renderFamilyHome}</div>
               </div>
            </div>
         </section>

         <section className={styles.motivations}>
            <h2>Motivations :</h2>
            <p className={styles.text}>
               Depuis toujours, j’ai eu un profond amour pour les animaux et
               l’envie de m’engager pour leur bien-être. Devenir famille
               d’accueil est pour moi une façon concrète d’aider ceux qui en ont
               le plus besoin, en leur offrant un foyer chaleureux et sécurisé
               le temps qu’ils trouvent une adoption définitive. Je souhaite
               apporter à un animal de la stabilité, de l’affection et de
               l’attention, tout en contribuant à la belle mission des
               associations de protection animale. Accueillir temporairement un
               compagnon est une expérience enrichissante, à la fois pour lui et
               pour moi. 💙 <br />
               {adoptionRequest.motivation}
            </p>
         </section>

         <section className={styles.response}>
            <h3>Réponse à la demande* :</h3>
            <div className="m-input m-input__background">
               <textarea />
            </div>
            <div className={styles.btnResponse}>
               <button
                  type="button"
                  className="m-button"
                  onClick={() => handleUpdateStatusAdoptionRequest('accepted')}
               >
                  Valider<span>&nbsp;la demande</span>
               </button>
               <button
                  type="button"
                  className=" m-button--square"
                  onClick={() => handleUpdateStatusAdoptionRequest('refused')}
               >
                  Refuser<span>&nbsp;la demande</span>
               </button>
            </div>
         </section>
      </div>
   );
};

export default ModalHomeRequest;
