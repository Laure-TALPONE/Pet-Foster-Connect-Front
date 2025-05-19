'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import styles from './ListFosterFamilies.module.scss';
import CardFosterFamily from '../card-foster-family/CardFosterFamily';

type Props = {
   fosterFamilies?: any;
};

const ListFosterFamilies = ({ fosterFamilies }: Props) => {
   const renderButtonViewMore = useMemo(() => {
      if (fosterFamilies && fosterFamilies.length > 9) {
         return (
            <div className={styles.viewMore}>
               <button type="button" className="m-button">
                  Voire Plus
               </button>
            </div>
         );
      }
   }, [fosterFamilies]);

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
