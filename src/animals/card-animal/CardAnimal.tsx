'use client';
import Image from 'next/image';
import styles from './CardAnimal.module.scss';
import { useMemo } from 'react';
import { GenderFemale, GenderMale } from '@phosphor-icons/react';

type Props = {
   pet: any;
   association?: any;
};

const CardAnimal = ({ pet, association }: Props) => {
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
               src={'/images/kitten-3.jpg'}
               alt="animal-picture"
               width={335}
               height={239}
            />
         </div>
         <div className={styles.informations}>
            <div className={styles.infoNames}>
               <p className={styles.animalName}>{pet.name}</p>
               <p className={styles.assoName}>
                  {association?.name ? association.name : pet.organization.name}
               </p>
            </div>
            <span className={styles.gender}>{renderGenger}</span>
         </div>
      </div>
   );
};

export default CardAnimal;
