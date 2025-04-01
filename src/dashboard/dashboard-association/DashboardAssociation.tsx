'use client';

import styles from './DashboardAssociation.module.scss';
import LandingAssociation from './landing-association/LandingAssociation';

const DashboardAssociation = () => {
   return (
      <section className={styles.dashboard}>
         <LandingAssociation />
         <p>POUET</p>
      </section>
   );
};

export default DashboardAssociation;
