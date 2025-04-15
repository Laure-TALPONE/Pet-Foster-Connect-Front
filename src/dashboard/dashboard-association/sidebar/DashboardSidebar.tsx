'use client';

import styles from './DashboardSidebar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Gear, List, PawPrint, Siren, UserCircle } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

const DashboardSidebar = () => {
   const pathname = usePathname();
   const [isDesktop, setIsDesktop] = useState(false);
   const [menuIsOpen, setMenuIsOpen] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 1024);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const handleOpenMenu = useCallback(() => {
      setMenuIsOpen(!menuIsOpen);
   }, [menuIsOpen]);

   useEffect(() => {
      setMenuIsOpen(false);
   }, [pathname]);

   const renderPageName = useMemo(() => {
      if (!isDesktop) {
         if (pathname === '/dashboard/nos-animaux') {
            return <h3 className={styles.pageName}>Nos animaux</h3>;
         }

         if (pathname === '/dashboard/nos-demandes') {
            return <h3 className={styles.pageName}>Nos demandes</h3>;
         }

         if (pathname === '/dashboard/profil') {
            return <h3 className={styles.pageName}>Profil</h3>;
         }
      }
   }, [pathname, isDesktop]);

   const renderSidebarItems = () => {
      return (
         <ul className={styles.sidebarList}>
            <li>
               <Link
                  href={'/dashboard/nos-animaux'}
                  className={
                     pathname === '/dashboard/nos-animaux' ? styles.actif : ''
                  }
               >
                  <PawPrint weight="bold" />
                  Nos animaux
               </Link>
            </li>
            <li>
               <Link
                  href={'/dashboard/nos-demandes'}
                  className={
                     pathname === '/dashboard/nos-demandes' ? styles.actif : ''
                  }
               >
                  <Siren weight="bold" />
                  Nos demandes
               </Link>
            </li>
            <li>
               <Link
                  href={'/dashboard/profil'}
                  className={
                     pathname === '/dashboard/profil' ? styles.actif : ''
                  }
               >
                  <UserCircle weight="bold" />
                  Profil
               </Link>
            </li>
            <li>
               <Link
                  href={'/dashboard/parametres'}
                  className={
                     pathname === '/dashboard/parametres' ? styles.actif : ''
                  }
               >
                  <Gear weight="bold" />
                  Paramètres
               </Link>
            </li>
         </ul>
      );
   };

   const renderSidebar = useMemo(() => {
      if (isDesktop)
         return <div className={styles.sidebar}>{renderSidebarItems()}</div>;

      return (
         <div className={styles.sidebar}>
            {menuIsOpen && (
               <div className={styles.menuOpen}>{renderSidebarItems()}</div>
            )}
            <button type="button" onClick={handleOpenMenu}>
               <List weight="bold" />
            </button>
         </div>
      );
   }, [isDesktop, handleOpenMenu, menuIsOpen, renderSidebarItems]);

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
         {renderPageName}
         {renderSidebar}
      </div>
   );
};

export default DashboardSidebar;
