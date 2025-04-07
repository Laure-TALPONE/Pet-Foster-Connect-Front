'use client';
import { associations } from '@/globals/constants/data';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import CardAnimal from '../card-association/CardAssociation';
import styles from './ListAssociations.module.scss';

const ListAnimals = () => {
   const [organizations, setOrganizations] = useState(associations);

   const animals = useMemo(() => {
      return organizations.flatMap((asso: any) => {
         return asso.animals;
      });
   }, []);

   const renderAnimalsList = useMemo(() => {
      return animals.map((pet: any, index: number) => {
         return (
            <li key={index} className={styles.item}>
               <Link href={'/animals/1'}>
                  <CardAnimal pet={pet} />
               </Link>
            </li>
         );
      });
   }, []);

   return <ul className={styles.list}>{renderAnimalsList}</ul>;
};

export default ListAnimals;
