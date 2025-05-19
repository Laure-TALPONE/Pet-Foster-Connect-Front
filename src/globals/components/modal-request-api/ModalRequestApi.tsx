'use client';

import styles from './ModalRequestApi.module.scss';

type Props = {
   text: string;
   color?: string;
};

const ModalRequestApi = ({ text, color }: Props) => {
   return (
      <div className={styles.contentModal}>
         <p style={{ color: color }}>{text}</p>
      </div>
   );
};

export default ModalRequestApi;
