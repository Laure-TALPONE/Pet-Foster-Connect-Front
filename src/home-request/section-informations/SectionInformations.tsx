'use client';

import { useCallback, useMemo, useState } from 'react';
import styles from './SectionInformations.module.scss';
import useOutsideClick from '@/globals/hooks/useOutsideClick';
import { civilities } from '@/globals/constants/civility';
import { CaretDown } from '@phosphor-icons/react';
import { useFormContext } from 'react-hook-form';

const SectionInformations = () => {
   const [civilityDisplay, setCivilityDisplay] = useState(false);
   const {
      register,
      setValue,
      formState: { errors },
   } = useFormContext();

   const refCivility = useOutsideClick(() => setCivilityDisplay(false));

   const handleOpenDropdown = () => {
      setCivilityDisplay(!civilityDisplay);
   };

   const handleSelectItem = useCallback((civility: string) => {
      setValue('civility', civility);
   }, []);

   const renderSelectCivility = useMemo(() => {
      if (!civilityDisplay) return;

      if (civilityDisplay) {
         return (
            <ul className={styles.select}>
               {civilities.map((civility: string, index: number) => {
                  return (
                     <li key={index} onClick={() => handleSelectItem(civility)}>
                        {civility}
                     </li>
                  );
               })}
            </ul>
         );
      }
   }, [civilityDisplay, handleSelectItem]);

   return (
      <section className={styles.informations}>
         <div
            className={
               errors.civility ? 'm-select m-select__error' : 'm-select'
            }
            onClick={handleOpenDropdown}
            ref={refCivility}
         >
            <input
               type="text"
               readOnly
               placeholder="Civilité"
               {...register('civility', { required: true })}
            />
            <span className="m-select__suffix">
               <CaretDown weight="bold" />
            </span>
            {renderSelectCivility}
         </div>
         <div
            className={errors.firstname ? 'm-input m-input__error' : 'm-input'}
         >
            <input
               type="text"
               placeholder="Prénom*"
               {...register('firstname', { required: true })}
            />
         </div>
         <div
            className={errors.lastname ? 'm-input m-input__error' : 'm-input'}
         >
            <input
               type="text"
               placeholder="Nom*"
               {...register('lastname', { required: true })}
            />
         </div>
         <div className={errors.email ? 'm-input m-input__error' : 'm-input'}>
            <input
               type="email"
               placeholder="E-mail*"
               {...register('email', { required: true })}
            />
         </div>
         <div className={errors.phone ? 'm-input m-input__error' : 'm-input'}>
            <input
               type="text"
               placeholder="Téléphone*"
               {...register('phone', { required: true })}
            />
         </div>
         <div className={errors.address ? 'm-input m-input__error' : 'm-input'}>
            <input
               type="text"
               placeholder="Numéro et nom de voie*"
               {...register('address', { required: true })}
            />
         </div>
         <div
            className={errors.postcode ? 'm-input m-input__error' : 'm-input'}
         >
            <input
               type="text"
               placeholder="Code postal*"
               {...register('postcode', { required: true })}
            />
         </div>
         <div className={errors.city ? 'm-input m-input__error' : 'm-input'}>
            <input
               type="text"
               placeholder="Ville*"
               {...register('city', { required: true })}
            />
         </div>
      </section>
   );
};

export default SectionInformations;
