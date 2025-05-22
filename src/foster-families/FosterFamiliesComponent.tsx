'use client';

import Loading from '@/globals/components/loading/Loading';
import { useEffect, useState } from 'react';
import styles from './FosterFamiliesComponent.module.scss';
import ListFosterFamilies from './list-families/ListFosterFamilies';

type Props = {
   fosterFamilies: any;
};

const FosterFamiliesComponent = ({ fosterFamilies }: Props) => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
   }, []);

   return (
      <section className="container">
         <div className={styles.families}>
            <div className={styles.top}>
               <h2 className={styles.title}>
                  Nos familles d’accueil, des héros du quotidien
               </h2>
               <p className={styles.text}>
                  Derrière chaque animal sauvé se cache souvent une famille
                  d’accueil au grand cœur. Ces bénévoles offrent temporairement
                  un foyer chaleureux à nos protégés, en attendant leur adoption
                  définitive. Découvrez ici les familles engagées à nos côtés :
                  sans elles, rien ne serait possible.
               </p>
            </div>
            {loading ? (
               <Loading />
            ) : (
               <ListFosterFamilies fosterFamilies={fosterFamilies} />
            )}
         </div>
      </section>
   );
};

export default FosterFamiliesComponent;
