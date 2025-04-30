'use client';

import { Form, useForm } from 'react-hook-form';
import styles from './ModalPetForm.module.scss';
import { CaretDown } from '@phosphor-icons/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import DropdownComponent from '@/globals/components/dropdown/DropdownComponent';
import { genders } from '@/globals/constants/animals';
import useOutsideClick from '@/globals/hooks/useOutsideClick';
import dayjs from 'dayjs';
import sendRequest from '@/globals/hooks/sendRequest';
import { useUser } from '@/globals/utils/UserContext';

type Props = {
   onClose: any;
   onSuccess: any;
};

const ModalPetForm = ({ onClose, onSuccess }: Props) => {
   const [selectOpen, setSelectOpen] = useState<string | null | any>('');
   const responses = ['Oui', 'Non'];
   const selectRef = useOutsideClick(() => setSelectOpen(null));
   const [species, setSpecies] = useState<any>();
   const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const user = useUser().user;
   const organizationId = user?.organizations[0].uuid;
   const watchSpecies = watch('species');

   const handleOpenSelect = (item: string) => {
      setSelectOpen((prev: any) => (prev === item ? null : item));
   };

   const handleCloseModal = () => {
      onClose(false);
   };

   const handleSelectItem = useCallback(
      (type: string, item: string | boolean) => {
         setValue(type, item);
         setSelectOpen('');
      },
      [setValue]
   );

   // on récupère les species du back
   useEffect(() => {
      const fetchSpecies = async () => {
         const speciesResult = await sendRequest('GET', '/api/species');
         setSpecies(speciesResult);
         return speciesResult;
      };

      fetchSpecies();
   }, []);

   const onSubmit = async (data: any) => {
      const newData = {
         organization_id: organizationId,
         name: data.name,
         species_id: watchSpecies.uuid,
         breed: data.breed,
         birthdate: dayjs(data.date).format('YYYY-MM-DD'),
         gender: data.gender === 'Mâle' ? true : false,
         is_available: data.available === 'Oui' ? true : false,
         is_vaccinated: data.vaccinated === 'Oui' ? true : false,
         is_weaned: data.weaned === 'Oui' ? true : false,
         is_sterilized: data.sterilized === 'Oui' ? true : false,
         description: data.description,
      };

      console.log(newData, 'ici les datas');

      const result = await sendRequest('POST', '/api/animals/create', newData);

      if (result) {
         console.log("Création d'un animal réussie.");
         handleCloseModal();
         onSuccess();
      }

      if (!result) {
         console.log("Echec de la création d'un animal.");
      }
   };

   const renderTypesAnimal = useMemo(() => {
      return (
         <ul>
            {species?.map((specie: any, index: number) => (
               <li
                  key={index}
                  onClick={() => {
                     handleSelectItem('species', specie);
                  }}
               >
                  {specie.name}
               </li>
            ))}
         </ul>
      );
   }, [species, handleSelectItem]);

   const renderGenderAnimal = useMemo(() => {
      return (
         <ul>
            {genders.map((gender: string, index: number) => (
               <li
                  key={index}
                  onClick={() => {
                     handleSelectItem('gender', gender);
                  }}
               >
                  {gender}
               </li>
            ))}
         </ul>
      );
   }, [genders, handleSelectItem]);

   const renderResponses = useMemo(() => {
      return (
         <ul>
            {responses.map((response: string, index: number) => (
               <li
                  key={index}
                  onClick={() => {
                     handleSelectItem(selectOpen, response);
                  }}
               >
                  {response}
               </li>
            ))}
         </ul>
      );
   }, [responses, handleSelectItem]);

   const renderSelect = useMemo(() => {
      if (selectOpen === 'species') {
         return <DropdownComponent children={renderTypesAnimal} />;
      }

      if (selectOpen === 'gender') {
         return <DropdownComponent children={renderGenderAnimal} />;
      }

      if (
         selectOpen === 'available' ||
         selectOpen === 'vaccinated' ||
         selectOpen === 'weaned' ||
         selectOpen === 'sterilized'
      ) {
         return <DropdownComponent children={renderResponses} />;
      }

      return null;
   }, [selectOpen, renderTypesAnimal, renderGenderAnimal, renderResponses]);

   return (
      <section className={styles.petForm}>
         <h2 className={styles.title}>Formulaire de l'animal</h2>
         <form className={styles.form}>
            <div
               className={
                  errors.name
                     ? 'm-input m-input__background m-input__label m-input__error'
                     : 'm-input m-input__background m-input__label'
               }
            >
               <label>Nom de l'animal* :</label>
               <input type="text" {...register('name', { required: true })} />
            </div>
            <section
               className={styles.type}
               ref={selectOpen === 'species' ? selectRef : null}
            >
               <div
                  className={
                     errors.species
                        ? 'm-select m-select__background m-select__label m-select__error'
                        : 'm-select m-select__background m-select__label'
                  }
               >
                  <label>Espèce de l’animal* :</label>
                  <input
                     type="text"
                     readOnly
                     value={watchSpecies ? watchSpecies.name : ''}
                     onClick={() => handleOpenSelect('species')}
                     {...register('species', { required: true })}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'species' && renderSelect}
            </section>
            <div
               className={
                  errors.breed
                     ? 'm-input m-input__background m-input__label m-input__error'
                     : 'm-input m-input__background m-input__label'
               }
            >
               <label>Race de l'animal* :</label>
               <input type="text" {...register('breed', { required: true })} />
            </div>
            <div
               className={
                  errors.date
                     ? 'm-input m-input__background m-input__label m-input__error'
                     : 'm-input m-input__background m-input__label'
               }
            >
               <label>Date de naissance de l’animal* :</label>
               <input type="date" {...register('date', { required: true })} />
            </div>
            <section
               className={styles.gender}
               ref={selectOpen === 'gender' ? selectRef : null}
            >
               <div
                  className={
                     errors.gender
                        ? 'm-select m-select__background m-select__label m-select__error'
                        : 'm-select m-select__background m-select__label'
                  }
               >
                  <label>Genre de l’animal* :</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('gender')}
                     {...register('gender', { required: true })}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'gender' && renderSelect}
            </section>
            <section
               className={styles.available}
               ref={selectOpen === 'available' ? selectRef : null}
            >
               <div
                  className={
                     errors.available
                        ? 'm-select m-select__background m-select__label m-select__error'
                        : 'm-select m-select__background m-select__label'
                  }
               >
                  <label>Est-il disponible ?*</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('available')}
                     {...register('available', { required: true })}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'available' && renderSelect}
            </section>
            <section
               className={styles.vaccinated}
               ref={selectOpen === 'vaccinated' ? selectRef : null}
            >
               <div
                  className={
                     errors.vaccinated
                        ? 'm-select m-select__background m-selectt__label m-select__error'
                        : 'm-select m-select__background m-select__label'
                  }
               >
                  <label>Est-il vacciné ?*</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('vaccinated')}
                     {...register('vaccinated', { required: true })}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'vaccinated' && renderSelect}
            </section>
            <section
               className={styles.weaned}
               ref={selectOpen === 'weaned' ? selectRef : null}
            >
               <div
                  className={
                     errors.weaned
                        ? 'm-select m-select__background m-select__label m-selectt__error'
                        : 'm-select m-select__background m-select__label'
                  }
               >
                  <label>Est-il sevré ?*</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('weaned')}
                     {...register('weaned', { required: true })}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'weaned' && renderSelect}
            </section>
            <section
               className={styles.sterilized}
               ref={selectOpen === 'sterilized' ? selectRef : null}
            >
               <div
                  className={
                     errors.sterilized
                        ? 'm-select m-select__background m-select__label m-select__error'
                        : 'm-select m-select__background m-select__label'
                  }
               >
                  <label>Est-il stérilisé ?*</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('sterilized')}
                     {...register('sterilized', { required: true })}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'sterilized' && renderSelect}
            </section>
            <div
               className={
                  errors.description
                     ? 'm-input m-input__background m-input__label m-input__error'
                     : 'm-input m-input__background m-input__label'
               }
            >
               <label>Description de l’animal* :</label>
               <textarea {...register('description', { required: true })} />
            </div>

            <div className={styles.buttons}>
               <button
                  type="submit"
                  className="m-button"
                  onClick={handleSubmit(onSubmit)}
               >
                  Ajouter un animal
               </button>
               <button
                  type="button"
                  className="m-button--square"
                  onClick={handleCloseModal}
               >
                  Annuler
               </button>
            </div>
         </form>
      </section>
   );
};

export default ModalPetForm;
