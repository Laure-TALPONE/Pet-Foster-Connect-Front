'use client';
import Image from 'next/image';
import styles from './BannerComponent.module.scss';
import { CaretDown } from '@phosphor-icons/react';
import { departments } from '@/globals/constants/departments';
import { useCallback, useMemo, useState } from 'react';
import useOutsideClick from '@/globals/hooks/useOutsideClick';

type Props = {
   species: any;
};

const BannerComponent = ({ species }: Props) => {
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

   const handleSelectItem = useCallback((type: string, item: string | any) => {
      if (type === 'specie') {
         setAnimalsDisplay(false);
         setAnimalValue(item.name);
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
      if (!species || species.length === 0) return;

      return (
         <ul className={styles.dropdown}>
            {species.map((specie: any, index: number) => {
               return (
                  <li
                     key={index}
                     onClick={() => {
                        handleSelectItem('specie', specie);
                     }}
                  >
                     {specie.name}
                  </li>
               );
            })}
         </ul>
      );
   }, [animalsDisplay, handleSelectItem, species]);

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
               Offrez un foyer temporaire, sauvez une vie<span>&nbsp;:</span>
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
                  <input type="text" readOnly value={animalValue} />
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
                  <input type="text" readOnly value={localeValue} />
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
