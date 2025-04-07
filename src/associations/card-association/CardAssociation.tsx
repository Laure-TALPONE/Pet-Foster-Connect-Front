'use client';
import { GenderFemale, GenderMale } from '@phosphor-icons/react';
import Image from 'next/image';
import { useMemo } from 'react';
import styles from './CardAssociation.module.scss';

type Props = {
   pet: any;
};

const CardAnimal = ({ pet }: Props) => {
   const renderGenger = useMemo(() => {
      if (pet?.gender) {
         return <GenderMale weight="bold" />;
      }

      if (!pet?.gender) {
         return <GenderFemale weight="bold" />;
      }
   }, [pet]);

   return (
      <div className={styles.card}>
         <div className={styles.top}>
            <Image
               src={'/images/logo-association.webp'}
               alt="animal-picture"
               width={335}
               height={239}
            />
         </div>
         <div className={styles.informations}>
            <div className={styles.names}>
               <p className={styles.assoName}>Nom de l'Association</p>
               <p className={styles.city}>Ville (33)</p>
            </div>
         </div>
      </div>
   );
};

export default CardAnimal;
