'use client';

import styles from './DashboardSidebar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { PawPrint, Siren, UserCircle } from '@phosphor-icons/react';

const DashboardSidebar = () => {
   return (
      <div className={styles.main}>
         <section className={styles.infosAsso}>
            <div className={styles.logo}>
               <Image
                  src={'/images/logo-asso.webp'}
                  alt="logo-association"
                  width={200}
                  height={200}
               />
            </div>
            <h3 className={styles.name}>L’association Pattes Solidaires</h3>
         </section>
         <section className={styles.sidebar}>
            <ul className={styles.sidebarList}>
               <li>
                  <Link href={'/dashboard/nos-animaux'}>
                     <PawPrint weight="bold" />
                     Nos animaux
                  </Link>
               </li>
               <li>
                  <Link href={'/dashboard/nos-demandes'}>
                     <Siren weight="bold" />
                     Nos demandes
                  </Link>
               </li>
               <li>
                  <Link href={'/dashboard/profil'}>
                     <UserCircle weight="bold" />
                     Profil
                  </Link>
               </li>
            </ul>
         </section>
      </div>
   );
};

export default DashboardSidebar;
