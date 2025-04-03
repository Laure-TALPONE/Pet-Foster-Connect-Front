'use client';

import styles from './DashboardPetsList.module.scss';
import { useMemo } from 'react';
import { associations } from '@/globals/constants/data';
import Image from 'next/image';

const DashboardPetsList = () => {
   const renderListPets = useMemo(() => {
      return associations[0].animals.map((pet: any, index: number) => {
         return (
            <li className={styles.petInfos} key={index}>
               <Image
                  src={'/images/home/kitty.webp'}
                  alt="pet-picture"
                  width={60}
                  height={60}
               />
               <p className={styles.name}>{pet.name}</p>
               <p>{pet.species}</p>
               <span>{pet.status}</span>
               <button type="button" className="m-button--square">
                  Modifier
               </button>
            </li>
         );
      });
   }, [associations]);

   return (
      <section className={styles.petsList}>
         <div className={styles.content}>
            <section className={styles.search}>
               <div className="m-input m-input__background">
                  <input type="text" placeholder="Rechercher un animal" />
               </div>
               <button type="button" className="m-button">
                  Ajouter un nouvel animal
               </button>
            </section>
            <ul className={styles.list}>{renderListPets}</ul>
         </div>
      </section>
   );
};

export default DashboardPetsList;
