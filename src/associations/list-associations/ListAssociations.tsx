'use client';
import { associations } from '@/globals/constants/data';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import CardAssociation from '../card-association/CardAssociation';
import styles from './ListAssociations.module.scss';

type Props = {
   associations?: any;
};

const ListAssociations = ({ associations }: Props) => {
   const renderButtonViewMore = useMemo(() => {
      if (associations && associations.length > 9) {
         return (
            <div className={styles.viewMore}>
               <button type="button" className="m-button">
                  Voire Plus
               </button>
            </div>
         );
      }
   }, [associations]);

   const renderAssociationList = useMemo(() => {
      if (!associations || associations.length === 0) return;

      return associations.map((asso: any, index: number) => {
         return (
            <li key={index} className={styles.item}>
               <Link href={`/associations/${asso.uuid}`}>
                  <CardAssociation asso={asso} />
               </Link>
            </li>
         );
      });
   }, [associations]);

   return (
      <section className={styles.content}>
         <ul className={styles.list}>{renderAssociationList}</ul>
         {renderButtonViewMore}
      </section>
   );
};

export default ListAssociations;
