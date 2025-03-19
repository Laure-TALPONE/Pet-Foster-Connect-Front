'use client';
import styles from './LandingComponent.module.scss';
import BannerComponent from './banner/BannerComponent';

const LandingComponent = () => {
   return (
      <section className={styles.main}>
         <BannerComponent />
      </section>
   );
};

export default LandingComponent;
