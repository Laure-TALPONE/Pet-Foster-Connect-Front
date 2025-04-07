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
               src={'/images/logo-association.webp'}
               alt="association-picture"
               width={335}
               height={239}
            />
         </div>
         <div className={styles.informations}>
            <div className={styles.names}>
               <p className={styles.assoName}>{asso.name}</p>
               <p className={styles.city}>{asso.location} ({asso.postalcode.slice(0, 2)})</p>
            </div>
         </div>
      </div>
   );
};

export default CardAssociation;
