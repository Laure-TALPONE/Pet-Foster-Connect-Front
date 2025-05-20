'use client';
import { useEffect, useMemo, useState } from 'react';
import CardAnimal from '../card-animal/CardAnimal';
import styles from './ListAnimals.module.scss';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import fetchGetAnimalsByFilters from '@/api/animals/getBySearchFilter/route';

type Props = {
   listAnimals?: any;
   association?: any;
};

const ListAnimals = ({ listAnimals, association }: Props) => {
   // https://nextjs.org/docs/app/api-reference/functions/use-search-params
   const searchParams = useSearchParams();
   const specie = searchParams.get('specie');
   const department = searchParams.get('department');
   const [animalsFiltered, setAnimalsFiltered] = useState();

   useEffect(() => {
      const fetchData = async () => {
         if (specie && department) {
            const animalsWithFilters = await fetchGetAnimalsByFilters(
               specie,
               department
            );
            setAnimalsFiltered(animalsWithFilters);
         }
      };

      fetchData();
   }, [specie, department]);

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

      return listAnimalsToDisplay?.map((pet: any, index: number) => {
         return (
            <li key={index} className={styles.item}>
               <Link href={`/nos-animaux/${pet.uuid}`}>
                  <CardAnimal pet={pet} association={association} />
               </Link>
            </li>
         );
      });
   }, [listAnimals, association, animalsFiltered]);

   return (
      <section className={styles.content}>
         <ul className={styles.list}>{renderAnimalsList}</ul>
         {renderButtonViewMore}
      </section>
   );
};

export default ListAnimals;
