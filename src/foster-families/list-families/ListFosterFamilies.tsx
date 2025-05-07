'use client';
import { foster_families } from '@/globals/constants/data';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import styles from './ListFosterFamilies.module.scss';
import CardFosterFamily from '../card-foster-family/CardFosterFamily';

type Props = {
   fosterFamilies?: any;
};

const ListFosterFamilies = ({ fosterFamilies }: Props) => {
   // const [families, setFamilies] = useState(foster_families);

   // const fosterFamilies = useMemo(() => {
   //    return families.flatMap((family: any) => {
   //       return family;
   //    });
   // }, []);

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

   return <ul className={styles.list}>{renderFamiliesList}</ul>;
};

export default ListFosterFamilies;
