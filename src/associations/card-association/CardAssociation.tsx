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

export default CardAssociation;
