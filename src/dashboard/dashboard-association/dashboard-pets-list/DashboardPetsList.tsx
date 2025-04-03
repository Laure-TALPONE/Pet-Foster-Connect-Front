'use client';

import styles from './DashboardPetsList.module.scss';
import { useEffect, useMemo, useState } from 'react';
import { associations } from '@/globals/constants/data';
import Image from 'next/image';
import { PencilSimple, Plus } from '@phosphor-icons/react';

const DashboardPetsList = () => {
   const [isDesktop, setIsDesktop] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 600);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const renderListPets = useMemo(() => {
      return associations[0].animals.map((pet: any, index: number) => {
         return (
            <li className={styles.petInfos} key={index}>
               <div className={styles.picture}>
                  <Image
                     src={'/images/home/kitty.webp'}
                     alt="pet-picture"
                     width={80}
                     height={80}
                  />
               </div>
               <p className={styles.name}>{pet.name}</p>
               <p>{pet.species}</p>
               {isDesktop ? (
                  <span>{pet.status}</span>
               ) : (
                  <span className={styles.status}></span>
               )}
               {isDesktop ? (
                  <button type="button" className="m-button--square">
                     Modifier
                  </button>
               ) : (
                  <button type="button" className={styles.edit}>
                     <PencilSimple />
                  </button>
               )}
            </li>
         );
      });
   }, [associations, isDesktop]);

   return (
      <section className={styles.petsList}>
         <div className={styles.content}>
            <section className={styles.search}>
               <div className="m-input m-input__background">
                  <input type="text" placeholder="Rechercher un animal" />
               </div>
               {isDesktop ? (
                  <button type="button" className="m-button">
                     Ajouter un nouvel animal
                  </button>
               ) : (
                  <button type="button" className="m-button">
                     Ajouter
                  </button>
               )}
            </section>
            <ul className={styles.list}>{renderListPets}</ul>
         </div>
      </section>
   );
};

export default DashboardPetsList;
