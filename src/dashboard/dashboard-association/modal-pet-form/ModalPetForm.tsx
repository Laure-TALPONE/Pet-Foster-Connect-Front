'use client';

import { Form } from 'react-hook-form';
import styles from './ModalPetForm.module.scss';
import { CaretDown } from '@phosphor-icons/react';
import { useEffect, useMemo, useState } from 'react';
import DropdownComponent from '@/globals/components/dropdown/DropdownComponent';
import { animals, genders } from '@/globals/constants/animals';
import useOutsideClick from '@/globals/hooks/useOutsideClick';

type Props = {
   onClose: any;
};

const ModalPetForm = ({ onClose }: Props) => {
   const [selectOpen, setSelectOpen] = useState<string | null>('');

   const responses = ['Oui', 'Non'];

   const selectRef = useOutsideClick(() => setSelectOpen(null));

   const handleOpenSelect = (item: string) => {
      setSelectOpen((prev) => (prev === item ? null : item));
   };

   const handleCloseModal = () => {
      onClose(false);
   };

   const renderTypesAnimal = useMemo(() => {
      return (
         <ul>
            {animals.map((type: string, index: number) => (
               <li key={index}>{type}</li>
            ))}
         </ul>
      );
   }, [animals]);

   const renderGenderAnimal = useMemo(() => {
      return (
         <ul>
            {genders.map((gender: string, index: number) => (
               <li key={index}>{gender}</li>
            ))}
         </ul>
      );
   }, [genders]);

   const renderResponses = useMemo(() => {
      return (
         <ul>
            {responses.map((response: string, index: number) => (
               <li key={index}>{response}</li>
            ))}
         </ul>
      );
   }, [responses]);

   const renderSelect = useMemo(() => {
      if (selectOpen === 'type') {
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
            <div className="m-input m-input__background m-input__label">
               <label>Nom de l'animal* :</label>
               <input type="text" />
            </div>
            <section className={styles.type}>
               <div
                  className="m-select m-select__background m-select__label"
                  ref={selectOpen === 'type' ? selectRef : null}
               >
                  <label>Espèce de l’animal* :</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('type')}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'type' && renderSelect}
            </section>
            <div className="m-input m-input__background m-input__label">
               <label>Race de l'animal* :</label>
               <input type="text" />
            </div>
            <div className="m-input m-input__background m-input__label">
               <label>Date de naissance de l’animal* :</label>
               <input type="date" />
            </div>
            <section className={styles.gender}>
               <div
                  className="m-select m-select__background m-select__label"
                  ref={selectOpen === 'gender' ? selectRef : null}
               >
                  <label>Genre de l’animal* :</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('gender')}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'gender' && renderSelect}
            </section>
            <section className={styles.available}>
               <div
                  className="m-select m-select__background m-select__label"
                  ref={selectOpen === 'available' ? selectRef : null}
               >
                  <label>Est-il disponible ?*</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('available')}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'available' && renderSelect}
            </section>
            <section className={styles.vaccinated}>
               <div
                  className="m-select m-select__background m-select__label"
                  ref={selectOpen === 'vaccinated' ? selectRef : null}
               >
                  <label>Est-il vacciné ?*</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('vaccinated')}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'vaccinated' && renderSelect}
            </section>
            <section className={styles.weaned}>
               <div
                  className="m-select m-select__background m-select__label"
                  ref={selectOpen === 'weaned' ? selectRef : null}
               >
                  <label>Est-il sevré ?*</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('weaned')}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'weaned' && renderSelect}
            </section>
            <section className={styles.sterilized}>
               <div
                  className="m-select m-select__background m-select__label"
                  ref={selectOpen === 'sterilized' ? selectRef : null}
               >
                  <label>Est-il stérilisé ?*</label>
                  <input
                     type="text"
                     readOnly
                     onClick={() => handleOpenSelect('sterilized')}
                  />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               {selectOpen === 'sterilized' && renderSelect}
            </section>
            <div className="m-input m-input__background m-input__label">
               <label>Description de l’animal* :</label>
               <textarea></textarea>
            </div>

            <div className={styles.buttons}>
               <button type="submit" className="m-button">
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
