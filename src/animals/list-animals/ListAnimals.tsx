'use client';
import { useMemo, useState } from 'react';
import CardAnimal from '../card-animal/CardAnimal';
import styles from './ListAnimals.module.scss';
import { associations } from '@/globals/constants/data';
import Link from 'next/link';

type Props = {
   listAnimals?: any;
   association?: any;
};

const ListAnimals = ({ listAnimals, association }: Props) => {
   // const [organizations, setOrganizations] = useState(associations);

   // const animals = useMemo(() => {
   //    return organizations.flatMap((asso: any) => {
   //       return asso.animals;
   //    });
   // }, []);

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

      return listAnimals.map((pet: any, index: number) => {
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
