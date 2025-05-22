'use client';

import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import styles from './ListFosterFamilies.module.scss';
import CardFosterFamily from '../card-foster-family/CardFosterFamily';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
   fosterFamilies?: any;
};

const ListFosterFamilies = ({ fosterFamilies }: Props) => {
   const searchParams = useSearchParams();
   const skip = searchParams.get('skip');
   const take = searchParams.get('take');
   const router = useRouter();

   const handleViewMore = useCallback(() => {
      if (skip) {
         const nextSkip = parseInt(skip) + 9;
         router.push(`?skip=${nextSkip}&take=${take}`);
      }
   }, []);

   const renderButtonViewMore = useMemo(() => {
      if (fosterFamilies && fosterFamilies.length > 9) {
         return (
            <div className={styles.viewMore}>
               <button
                  type="button"
                  className="m-button"
                  onClick={handleViewMore}
               >
                  Voir Plus
               </button>
            </div>
         );
      }
   }, [fosterFamilies, handleViewMore]);

   const renderFamiliesList = useMemo(() => {
      if (!fosterFamilies || fosterFamilies.length === 0) return;

      return fosterFamilies.map((family: any, index: number) => {
         return (
            <li key={index} className={styles.item}>
               <Link href={`/familles-daccueil/${family.uuid}`}>
                  <CardFosterFamily family={family} />
               </Link>
            </li>
         );
      });
   }, [fosterFamilies]);

   return (
      <section className={styles.content}>
         <ul className={styles.list}>{renderFamiliesList}</ul>
         {renderButtonViewMore}
      </section>
   );
};

export default ListFosterFamilies;
