'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import styles from './LandingComponent.module.scss';
import BannerComponent from './banner/BannerComponent';

type Props = {
   banner?: boolean;
   buttons?: boolean;
};

const LandingComponent = ({ buttons }: Props) => {
   const pathName = usePathname();
   const bannerDisplay =
      pathName === '/home' ||
      pathName === '/animals' ||
      pathName === '/associations' ||
      pathName === '/foster-families';

   const renderBanner = useMemo(() => {
      if (!bannerDisplay) {
         return (
            <div className={styles.text}>
               <h1 className={styles.title}>
                  Rejoignez notre réseau et offrez un <br /> nouveau départ aux
                  animaux !
               </h1>
               {buttons && (
                  <div className={styles.buttons}>
                     <Link href={'/inscription/famille-daccueil'}>
                        Inscription en Famille d’accueil
                     </Link>
                     <span>ou</span>
                     <Link href={'/inscription/association'}>
                        Inscription Association
                     </Link>
                  </div>
               )}
            </div>
         );
      }

      if (bannerDisplay) {
         return <BannerComponent />;
      }
   }, [bannerDisplay, buttons]);

   return (
      <section className={bannerDisplay ? styles.main : styles.mainGradient}>
         <div className={styles.custom}>
            <svg
               data-name="Layer 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1200 120"
               preserveAspectRatio="none"
            >
               <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className={styles.shapeFill}
               ></path>
            </svg>
         </div>
         {renderBanner}
      </section>
   );
};

export default LandingComponent;
