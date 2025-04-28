'use client';
import { animals } from '@/globals/constants/animals';
import { departments } from '@/globals/constants/departments';
import useOutsideClick from '@/globals/hooks/useOutsideClick';
import { CaretDown } from '@phosphor-icons/react';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import styles from './BannerComponent.module.scss';

const BannerComponent = () => {
   const [animalsDisplay, setAnimalsDisplay] = useState(false);
   const [departmentsDisplay, setDepartmentsDisplay] = useState(false);
   const [animalValue, setAnimalValue] = useState('');
   const [localeValue, setLocaleValue] = useState('');

   const handleOpenDropdown = (item: string) => {
      if (item === 'animals') {
         setAnimalsDisplay(!animalsDisplay);
      }

      if (item === 'departments') {
         setDepartmentsDisplay(!departmentsDisplay);
      }
   };

   const handleSelectItem = useCallback((type: string, item: string) => {
      if (type === 'animal') {
         setAnimalsDisplay(false);
         setAnimalValue(item);
      }

      if (type === 'department') {
         setDepartmentsDisplay(false);
         setLocaleValue(item);
      }
   }, []);

   const refDropdown1 = useOutsideClick(() => setAnimalsDisplay(false));
   const refDropdown2 = useOutsideClick(() => setDepartmentsDisplay(false));

   const renderDropdownAnimals = useMemo(() => {
      if (!animalsDisplay) return;

      if (animalsDisplay) {
         return (
            <ul className={styles.dropdown}>
               {animals.map((animal: string, index: number) => {
                  return (
                     <li
                        key={index}
                        onClick={() => {
                           handleSelectItem('animal', animal);
                        }}
                     >
                        {animal}
                     </li>
                  );
               })}
            </ul>
         );
      }
   }, [animalsDisplay, handleSelectItem]);

   const renderDropdownDepartments = useMemo(() => {
      if (!departmentsDisplay) return;

      if (departmentsDisplay) {
         return (
            <ul className={styles.dropdown}>
               {departments.map((department: string, index: number) => {
                  return (
                     <li
                        key={index}
                        onClick={() => {
                           handleSelectItem('department', department);
                        }}
                     >
                        {department}
                     </li>
                  );
               })}
            </ul>
         );
      }
   }, [departmentsDisplay, handleSelectItem]);

   return (
      <section className={styles.banner}>
         <div className={styles.content}>
            <h1 className={styles.title}>
               Offrez un foyer temporaire, sauvez une vie :
            </h1>
            <h2 className={styles.subtitle}>
               connectons familles d'accueil et associations pour le bien-être
               des animaux.
            </h2>
            <div className={styles.search}>
               <p>Je souhaiterais accueillir un</p>
               <div
                  className="m-select"
                  onClick={() => handleOpenDropdown('animals')}
                  ref={refDropdown1}
               >
                  <input type="text" readOnly value={animalValue} aria-label="Animal" />
                  <span className="m-select__suffix">
                     <CaretDown weight="bold" />
                  </span>
                  {renderDropdownAnimals}
               </div>
               <p>en</p>
               <div
                  className="m-select"
                  onClick={() => handleOpenDropdown('departments')}
                  ref={refDropdown2}
               >
                  <input type="text" readOnly value={localeValue} aria-label="Lieu" />
                  <span className="m-select__suffix">
                     <CaretDown weight="bold" />
                  </span>
                  {renderDropdownDepartments}
               </div>
               <button type="button" className="m-button">
                  Rechercher
               </button>
            </div>
         </div>
         <Image
            src={'/images/CAT-VECTO.webp'}
            className={styles.cat}
            alt="cat-vecto"
            width={97}
            height={123}
         />
      </section>
   );
};

export default BannerComponent;
