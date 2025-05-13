'use client';
import Image from 'next/image';
import styles from './CardAssociation.module.scss';

type Props = {
   asso: any;
};

const CardAssociation = ({ asso }: Props) => {
   return (
      <div className={styles.card}>
         <div className={styles.top}>
            <Image
               src={asso.logo}
               alt="association-picture"
               width={335}
               height={239}
            />
         </div>
         <div className={styles.informations}>
            <div className={styles.names}>
               <p className={styles.assoName}>{asso.name}</p>
               <p className={styles.city}>
                  {asso.city} ({asso.postcode})
               </p>
            </div>
         </div>
      </div>
   );
};

export default CardAssociation;
