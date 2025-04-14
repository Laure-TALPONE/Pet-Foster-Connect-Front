'use client';

import { Form, useForm } from 'react-hook-form';
import styles from './ModalPetForm.module.scss';
import { CaretDown } from '@phosphor-icons/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import DropdownComponent from '@/globals/components/dropdown/DropdownComponent';
import { animals, genders } from '@/globals/constants/animals';
import useOutsideClick from '@/globals/hooks/useOutsideClick';
import dayjs from 'dayjs';

type Props = {
   onClose: any;
};

const ModalPetForm = ({ onClose }: Props) => {
   const [selectOpen, setSelectOpen] = useState<string | null>('');
   const responses = ['Oui', 'Non'];
   const selectRef = useOutsideClick(() => setSelectOpen(null));
   const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const handleOpenSelect = (item: string) => {
      setSelectOpen((prev) => (prev === item ? null : item));
   };

   const handleCloseModal = () => {
      onClose(false);
   };

   const handleSelectItem = useCallback(
      (type: string, item: string) => {
         setValue(type, item);
         setSelectOpen('');
      },
      [setValue]
   );

   const onSubmit = async (data: any) => {
      const newData = {
         name: data.name,
         species: data.species,
         breed: data.breed,
         date: dayjs(data.date).format('YYYY-MM-DD'),
         gender: data.gender,
         available: data.available,
         vaccinated: data.vaccinated,
         weaned: data.weaned,
         sterilized: data.sterilized,
         description: data.description,
      };

      console.log(newData, 'ici les datas');

      // try {
      //    const response = await fetch('/api/animals', {
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
      //       console.log('Connexion réussie :', result);
      //    }
      // } catch (error) {
      //    console.error('Erreur API :', error);
      // }
   };

   const renderTypesAnimal = useMemo(() => {
      return (
         <ul>
            {animals.map((species: string, index: number) => (
               <li
                  key={index}
                  onClick={() => {
                     handleSelectItem('species', species);
                  }}
               >
                  {species}
               </li>
            ))}
         </ul>
      );
   }, [animals, handleSelectItem]);

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
         return <DropdownComponent chrildren={renderTypesAnimal} />;
      }

      if (selectOpen === 'gender') {
         return <DropdownComponent chrildren={renderGenderAnimal} />;
      }

      if (
         selectOpen === 'available' ||
         selectOpen === 'vaccinated' ||
         selectOpen === 'weaned' ||
         selectOpen === 'sterilized'
      ) {
         return <DropdownComponent chrildren={renderResponses} />;
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
