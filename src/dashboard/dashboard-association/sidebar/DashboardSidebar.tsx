'use client';

import styles from './DashboardSidebar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {
   Gear,
   List,
   PawPrint,
   SignOut,
   Siren,
   UserCircle,
} from '@phosphor-icons/react';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useOutsideClick from '@/globals/hooks/useOutsideClick';
import sendRequest from '@/globals/hooks/sendRequest';
import { useUser } from '@/globals/utils/UserContext';

type Props = {
   token: any;
};

const DashboardSidebar = ({ token }: Props) => {
   const pathname = usePathname();
   const [isDesktop, setIsDesktop] = useState(false);
   const [menuIsOpen, setMenuIsOpen] = useState(false);
   const sidebarRef = useOutsideClick(() => setMenuIsOpen(false));
   const router = useRouter();
   const user = useUser().user;

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

   const handleLogOut = async () => {
      if (token) {
         const result = await sendRequest('POST', '/api/auth/logout');

         if (!result) {
            console.log('Problème lors de la déconnexion');
         }

         if (result) {
            console.log('Déconnexion réussie.');
            router.push('/accueil');
         }
      }
   };

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
            {user?.role === 'organization' && (
               <>
                  <li>
                     <Link
                        href="/dashboard/nos-animaux"
                        className={
                           pathname === '/dashboard/nos-animaux'
                              ? styles.actif
                              : ''
                        }
                     >
                        <PawPrint weight="bold" />
                        Nos animaux
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/dashboard/nos-demandes"
                        className={
                           pathname === '/dashboard/nos-demandes'
                              ? styles.actif
                              : ''
                        }
                     >
                        <Siren weight="bold" />
                        Nos demandes
                     </Link>
                  </li>
               </>
            )}
            <li>
               <Link
                  href="/dashboard/profil"
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
                  href="/dashboard/parametres"
                  className={
                     pathname === '/dashboard/parametres' ? styles.actif : ''
                  }
               >
                  <Gear weight="bold" />
                  Paramètres
               </Link>
            </li>
            <li>
               <button type="button" onClick={handleLogOut}>
                  <SignOut weight="bold" />
                  Déconnexion
               </button>
            </li>
         </ul>
      );
   };

   const renderTopSidebar = useMemo(() => {
      if (user.role === 'organization') {
         return (
            <section className={styles.infos}>
               <div className={styles.logo}>
                  <Image
                     src={user.organizations[0].logo}
                     alt="logo-association"
                     width={200}
                     height={200}
                  />
               </div>
               <h3 className={styles.name}>
                  L’association {user.organizations[0].name}
               </h3>
            </section>
         );
      }

      if (user.role === 'foster') {
         return (
            <section className={styles.infos}>
               <div className={styles.logo}>
                  <Image
                     src={user.fosterCares[0].image}
                     alt="logo-association"
                     width={200}
                     height={200}
                  />
               </div>
               <h3 className={styles.name}>
                  Famille {user.fosterCares[0].name}
               </h3>
            </section>
         );
      }
   }, [user]);

   const renderSidebar = useMemo(() => {
      if (isDesktop)
         return <div className={styles.sidebar}>{renderSidebarItems()}</div>;

      return (
         <div className={styles.sidebar}>
            {menuIsOpen && (
               <div className={styles.menuOpen} ref={sidebarRef}>
                  {renderSidebarItems()}
               </div>
            )}
            <button type="button" onClick={handleOpenMenu}>
               <List weight="bold" />
            </button>
         </div>
      );
   }, [isDesktop, handleOpenMenu, menuIsOpen, renderSidebarItems]);

   return (
      <div className={styles.main}>
         {renderTopSidebar}
         {renderPageName}
         {renderSidebar}
      </div>
   );
};

export default DashboardSidebar;
