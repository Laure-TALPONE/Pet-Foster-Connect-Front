'use client';
import { useMemo, useState } from 'react';
import CardAnimal from '../card-animal/CardAnimal';
import styles from './ListAnimals.module.scss';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = {
   listAnimals?: any;
   animalsFiltered?: any;
   association?: any;
};

const ListAnimals = ({ listAnimals, association, animalsFiltered }: Props) => {
   // https://nextjs.org/docs/app/api-reference/functions/use-search-params
   const searchParams = useSearchParams();
   const specie = searchParams.get('specie');
   const department = searchParams.get('department');

   const renderButtonViewMore = useMemo(() => {
      if (listAnimals && listAnimals.length > 9) {
         return (
            <div className={styles.viewMore}>
               <button type="button" className="m-button">
                  Voire Plus
               </button>
            </div>
         );
      }
   }, [listAnimals]);

   const renderAnimalsList = useMemo(() => {
      if (!listAnimals || listAnimals.length === 0) return;

      let listAnimalsToDisplay;

      if (specie && department) {
         listAnimalsToDisplay = animalsFiltered;
      } else {
         listAnimalsToDisplay = listAnimals;
      }

      return listAnimalsToDisplay.map((pet: any, index: number) => {
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
