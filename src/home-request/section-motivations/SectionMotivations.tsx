'use client';

import { useFormContext } from 'react-hook-form';
import styles from './SectionMotivations.module.scss';
import { useEffect } from 'react';

type Props = {
   onSendConsent: any;
};

const SectionMotivations = ({ onSendConsent }: Props) => {
   const {
      register,
      setValue,
      watch,
      formState: { errors },
   } = useFormContext();

   const watchConsent = watch('consent');

   useEffect(() => {
      onSendConsent(watchConsent);
   }, [watchConsent, onSendConsent]);

   return (
      <section className={styles.motivations}>
         <h3>Vos motivations*</h3>
         <p>
            Pourquoi souhaitez-vous accueillir <span>Milo</span> ?
         </p>
         <div
            className={`m-input ${errors.motivation ? 'm-input__error' : ''} ${styles.textarea}`}
         >
            <textarea {...register('motivation', { required: true })} />
         </div>
         <div className={styles.consent}>
            <div className="m-checkbox">
               <input
                  type="checkbox"
                  {...register('consent', { required: true })}
               />
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
