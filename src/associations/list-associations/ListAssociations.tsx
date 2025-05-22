'use client';
import { associations } from '@/globals/constants/data';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import CardAssociation from '../card-association/CardAssociation';
import styles from './ListAssociations.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
   associations?: any;
};

const ListAssociations = ({ associations }: Props) => {
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
      if (associations && associations.length === 9) {
         return (
            <div className={styles.viewMore}>
               <button
                  type="button"
                  className="m-button"
                  onClick={handleViewMore}
               >
                  Voir Plus
               </button>
            </div>
         );
      }
   }, [associations, handleViewMore]);

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
