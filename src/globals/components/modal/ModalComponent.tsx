'use client';

import { User, XCircle } from '@phosphor-icons/react';
import styles from './ModalComponent.module.scss';

type Props = {
   onClose: any;
   children: any;
};

const ModalComponent = ({ onClose, children }: Props) => {
   const handleCloseModal = () => {
      onClose(false);
   };

   return (
      <div className={styles.modal}>
         <div className={styles.wrapper}>
            <section className={styles.close}>
               <button
                  type="button"
                  className={styles.btnClose}
                  onClick={handleCloseModal}
               >
                  <XCircle />
               </button>
            </section>
            {children}
         </div>
      </div>
   );
};

export default ModalComponent;
