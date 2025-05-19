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
               src={family.image}
               alt="family-picture"
               width={335}
               height={239}
            />
         </div>
         <div className={styles.informations}>
            <div className={styles.names}>
               <span className={styles.available}>Disponible</span>
               <p className={styles.familyName}>{family.lastname}</p>
               <p className={styles.city}>
                  {family.city} ({family.postcode})
               </p>
            </div>
         </div>
      </div>
   );
};

export default CardFosterFamily;
