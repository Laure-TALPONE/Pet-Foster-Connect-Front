'use client';
import Image from 'next/image';
import styles from './CardAnimal.module.scss';
import { useMemo } from 'react';
import { GenderFemale, GenderMale } from '@phosphor-icons/react';

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
               src={'/images/kitten-3.jpg'}
               alt="animal-picture"
               width={335}
               height={239}
            />
         </div>
         <div className={styles.informations}>
            <div className={styles.infoNames}>
               <p className={styles.animalName}>{pet.name}</p>
               <p className={styles.assoName}>Nom de l'Association</p>
            </div>
            <span className={styles.gender}>{renderGenger}</span>
         </div>
      </div>
   );
};

export default CardAnimal;
