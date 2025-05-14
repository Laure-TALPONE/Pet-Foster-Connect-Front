'use client';

import styles from './ModaleAdoptionRequest.module.scss';

type Props = {
   adoption: any;
};

const ModaleAdoptionRequest = ({ adoption }: Props) => {
   console.log(adoption);
   return (
      <div className={styles.content}>
         <p>Coming soon</p>
      </div>
   );
};

export default ModaleAdoptionRequest;
