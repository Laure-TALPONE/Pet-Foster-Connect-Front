'use client';

import DashboardSidebar from './sidebar/DashboardSidebar';
import DashboardContent from './dashboard-content/DashboardContent';
import styles from './DashboardAssociation.module.scss';

const DashboardAssociation = () => {
   return (
      <section className="container">
         <div className={styles.dashboard}>
            <DashboardSidebar />
            <DashboardContent />
         </div>
      </section>
   );
};

export default DashboardAssociation;
