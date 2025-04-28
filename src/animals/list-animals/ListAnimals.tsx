'use client';
import { useMemo, useState } from 'react';
import CardAnimal from '../card-animal/CardAnimal';
import styles from './ListAnimals.module.scss';
import { associations } from '@/globals/constants/data';
import Link from 'next/link';

type Props = {
   listAnimals?: any;
};

const ListAnimals = ({ listAnimals }: Props) => {
   // const [organizations, setOrganizations] = useState(associations);

   // const animals = useMemo(() => {
   //    return organizations.flatMap((asso: any) => {
   //       return asso.animals;
   //    });
   // }, []);

   const renderAnimalsList = useMemo(() => {
      return listAnimals.map((pet: any, index: number) => {
         return (
            <li key={index} className={styles.item}>
               <Link href={`/nos-animaux/${pet.uuid}`}>
                  <CardAnimal pet={pet} />
               </Link>
            </li>
         );
      });
   }, []);

   return <ul className={styles.list}>{renderAnimalsList}</ul>;
};

export default ListAnimals;
