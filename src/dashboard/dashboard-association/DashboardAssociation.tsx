'use client';

import DashboardContent from './dashboard-content/DashboardContent';
import styles from './DashboardAssociation.module.scss';
import LandingAssociation from './landing-association/LandingAssociation';

const DashboardAssociation = () => {
   return (
      <section className={styles.dashboard}>
         <LandingAssociation />
         <DashboardContent />
      </section>
   );
};

export default DashboardAssociation;
