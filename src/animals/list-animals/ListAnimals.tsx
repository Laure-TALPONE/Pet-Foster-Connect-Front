'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CardAnimal from '../card-animal/CardAnimal';
import styles from './ListAnimals.module.scss';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
   listAnimals?: any;
   association?: any;
};

const ListAnimals = ({ listAnimals, association }: Props) => {
   // console.log(listAnimals);
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
      if (listAnimals && listAnimals.length === 9) {
         return (
            <div className={styles.viewMore}>
               <button
                  type="button"
                  className="m-button"
                  onClick={handleViewMore}
               >
                  Voire Plus
               </button>
            </div>
         );
      }
   }, [listAnimals, handleViewMore]);

   const renderAnimalsList = useMemo(() => {
      if (!listAnimals || listAnimals.length === 0) return;

      return listAnimals?.map((pet: any, index: number) => {
         return (
            <li key={index} className={styles.item}>
               <Link href={`/nos-animaux/${pet.uuid}`}>
                  <CardAnimal pet={pet} association={association} />
               </Link>
            </li>
         );
      });
   }, [listAnimals, association]);

   return (
      <section className={styles.content}>
         <ul className={styles.list}>{renderAnimalsList}</ul>
         {renderButtonViewMore}
      </section>
   );
};

export default ListAnimals;
