'use client';
import { associations } from '@/globals/constants/data';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import CardAssociation from '../card-association/CardAssociation';
import styles from './ListAssociations.module.scss';

const ListAssociations = () => {
   const [organizations, setOrganizations] = useState(associations);

   const association = useMemo(() => {
      return organizations.flatMap((asso: any) => {
         return asso;
      });
   }, []);

   const renderAssociationList = useMemo(() => {
      return association.map((asso: any, index: number) => {
         return (
            <li key={index} className={styles.item}>
               <Link href={'/association/1'}>
                  <CardAssociation asso={asso} />
               </Link>
            </li>
         );
      });
   }, []);

   return <ul className={styles.list}>{renderAssociationList}</ul>;
};

export default ListAssociations;
