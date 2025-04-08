'use client';

import { Form } from 'react-hook-form';
import styles from './ModalPetForm.module.scss';
import { CaretDown } from '@phosphor-icons/react';

const ModalPetForm = () => {
   return (
      <section className={styles.petForm}>
         <form>
            <h2 className={styles.title}>Formulaire de l'animal</h2>
            <div className={styles.form}>
               <div className="m-input m-input__label">
                  <label>Nom de l'animal* :</label>
                  <input type="text" />
               </div>
               <div className="m-select m-select__label">
                  <label>Espèce de l’animal* :</label>
                  <input type="text" readOnly />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               <div className="m-input m-input__label">
                  <label>Race de l'animal* :</label>
                  <input type="text" />
               </div>
               <div className="m-input m-input__label">
                  <label>Date de naissance de l’animal* :</label>
                  <input type="text" />
               </div>
               <div className="m-select m-select__label">
                  <label>Genre de l’animal* :</label>
                  <input type="text" readOnly />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               <div className="m-select m-select__label">
                  <label>Est-il disponible ?*</label>
                  <input type="text" readOnly />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               <div className="m-select m-select__label">
                  <label>Est-il vacciné ?*</label>
                  <input type="text" readOnly />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               <div className="m-select m-select__label">
                  <label>Est-il sevré ?*</label>
                  <input type="text" readOnly />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               <div className="m-select m-select__label">
                  <label>Est-il stérilisé ?*</label>
                  <input type="text" readOnly />
                  <span className="m-select__suffix">
                     <CaretDown />
                  </span>
               </div>
               <div className="m-input m-input__label">
                  <label>Description de l’animal* :</label>
                  <textarea></textarea>
               </div>

               <div className={styles.buttons}>
                  <button type="submit" className="m-button">
                     Ajouter un animal
                  </button>
                  <button type="button" className="m-button--square">
                     Ajouter un animal
                  </button>
               </div>
            </div>
         </form>
      </section>
   );
};

export default ModalPetForm;
