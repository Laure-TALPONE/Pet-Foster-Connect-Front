'use client';

import { useCallback, useMemo, useState } from 'react';
import styles from './SectionInformations.module.scss';
import useOutsideClick from '@/globals/hooks/useOutsideClick';
import { civilities } from '@/globals/constants/civility';
import { CaretDown } from '@phosphor-icons/react';

const SectionInformations = () => {
   const [civilityDisplay, setCivilityDisplay] = useState(false);
   const [civilityValue, setCivilityValue] = useState('');

   const refCivility = useOutsideClick(() => setCivilityDisplay(false));

   const handleOpenDropdown = () => {
      setCivilityDisplay(!civilityDisplay);
   };

   const handleSelectItem = useCallback((civility: string) => {
      setCivilityValue(civility);
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
            className="m-select"
            onClick={handleOpenDropdown}
            ref={refCivility}
         >
            <input
               type="text"
               readOnly
               placeholder="Civilité"
               value={civilityValue}
            />
            <span className="m-select__suffix">
               <CaretDown weight="bold" />
            </span>
            {renderSelectCivility}
         </div>
         <div className="m-input">
            <input type="text" placeholder="Prénom*" />
         </div>
         <div className="m-input">
            <input type="text" placeholder="Nom*" />
         </div>
         <div className="m-input">
            <input type="text" placeholder="E-mail*" />
         </div>
         <div className="m-input">
            <input type="text" placeholder="Téléphone*" />
         </div>
         <div className="m-input">
            <input type="text" placeholder="Numéro et nom de voie*" />
         </div>
         <div className="m-input">
            <input type="text" placeholder="Code Postal*" />
         </div>
         <div className="m-input">
            <input type="text" placeholder="Ville*" />
         </div>
      </section>
   );
};

export default SectionInformations;
