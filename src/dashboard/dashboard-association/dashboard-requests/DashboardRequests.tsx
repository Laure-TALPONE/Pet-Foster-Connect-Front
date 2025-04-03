'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './DashboardRequests.module.scss';
import Image from 'next/image';
import { User } from '@phosphor-icons/react';
import { foster_families } from '@/globals/constants/data';

const DashboardRequests = () => {
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
      return foster_families.map((family: any, index: number) => {
         return (
            <li className={styles.item} key={index}>
               <div className={styles.infos}>
                  <div className={styles.picture}>
                     <User />
                  </div>
                  <p className={styles.name}>{family.name}</p>
               </div>
               <div className={styles.infosRequest}>
                  <p>
                     <span>Nom :</span> <span>Bobby</span>
                  </p>
                  <p>
                     <span>Espèce :</span> <span>Chien</span>
                  </p>
               </div>
               <button type="button" className="m-button">
                  Voir la demande
               </button>
            </li>
         );
      });
   }, [foster_families, isDesktop]);

   return (
      <section className={styles.request}>
         <div className={styles.content}>
            <section className={styles.search}>
               <div className="m-input m-input__background">
                  <input type="text" placeholder="Rechercher une famille" />
               </div>
            </section>
            <ul className={styles.list}>{renderListPets}</ul>
         </div>
      </section>
   );
};

export default DashboardRequests;
