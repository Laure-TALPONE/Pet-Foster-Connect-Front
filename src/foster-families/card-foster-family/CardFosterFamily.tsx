'use client';
import Image from 'next/image';
import styles from './CardFosterFamily.module.scss';

type Props = {
   family: any;
};

const CardFosterFamily = ({ family }: Props) => {
   return (
      <div className={styles.card}>
         <div className={styles.top}>
            <Image
               src={'/images/home/foster-family.webp'}
               alt="family-picture"
               width={335}
               height={239}
            />
         </div>
         <div className={styles.informations}>
            <div className={styles.names}>
               <p className={styles.familyName}>{family.name}</p>
               <p className={styles.city}>{family.location}</p>
            </div>
         </div>
      </div>
   );
};

export default CardFosterFamily;
