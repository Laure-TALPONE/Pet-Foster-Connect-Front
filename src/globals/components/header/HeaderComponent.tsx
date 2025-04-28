'use client';
import useOutsideClick from '@/globals/hooks/useOutsideClick';
import ModalLoginComponent from '@/login/ModalLoginComponent';
import {
   Cat,
   HandHeart,
   House,
   List,
   User,
   Users,
} from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ModalComponent from '../modal/ModalComponent';
import styles from './HeaderComponent.module.scss';

const HeaderComponent = () => {
   const [isDesktop, setIsDesktop] = useState(false);
   const [menuIsOpen, setMenuIsOpen] = useState(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const menuRef = useOutsideClick(() => setMenuIsOpen(false));
   const pathname = usePathname();

   const handleOpenModal = useCallback(() => {
      setModalIsOpen(true);
   }, []);

   const handleCloseModal = useCallback(() => {
      setModalIsOpen(false);
   }, []);

   const handleOpenMenuBurger = useCallback(() => {
      setMenuIsOpen(!menuIsOpen);
   }, [menuIsOpen]);

   useEffect(() => {
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 1024);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
      setMenuIsOpen(false);
   }, [pathname]);

   const renderModal = useMemo(() => {
      if (modalIsOpen) {
         return (
            <ModalComponent
               onClose={handleCloseModal}
               children={<ModalLoginComponent onClose={handleCloseModal} />}
            />
         );
      }
   }, [modalIsOpen]);

   const renderNavItems = () => {
      return (
         <ul className={styles.nav}>
            <li
               className={
                  pathname === '/accueil' ? styles.itemActive : styles.item
               }
            >
               <Link href="/accueil">
                  <House weight="bold" />
                  <span>Accueil</span>
               </Link>
            </li>
            <li
               className={
                  pathname === '/nos-animaux' ? styles.itemActive : styles.item
               }
            >
               <Link href="/nos-animaux">
                  <Cat weight="bold" />
                  <span>Nos animaux</span>
               </Link>
            </li>
            <li
               className={
                  pathname === '/associations' ? styles.itemActive : styles.item
               }
            >
               <Link href="/associations">
                  <HandHeart weight="bold" />
                  <span>Nos associations</span>
               </Link>
            </li>
            <li
               className={
                  pathname === '/familles-daccueil'
                     ? styles.itemActive
                     : styles.item
               }
            >
               <Link href="/familles-daccueil">
                  <Users weight="bold" />
                  <span>Nos familles d'accueil</span>
               </Link>
            </li>
         </ul>
      );
   };

   const renderNavBar = useMemo(() => {
      if (isDesktop) return renderNavItems();

      return (
         <div className={styles.bugerMenu}>
            <div className={styles.menuWrapper}>
               <button type="button" onClick={handleOpenMenuBurger} aria-label="Ouvrir le menu hamburger" >
                  <List weight="bold" />
               </button>
               {menuIsOpen && (
                  <div className={styles.menuOpen} ref={menuRef}>
                     {renderNavItems()}
                  </div>
               )}
            </div>
         </div>
      );
   }, [isDesktop, handleOpenMenuBurger, menuIsOpen, renderNavItems]);

   return (
      <>
         <div className={styles.navbar}>
            <div className={styles.content}>
               <Link href={'/accueil'} className={styles.logo}>
                  <Image
                     src={"/images/globals/logo.webp"}
                     alt="Logo"
                     width={120}
                     height={120}
                  />
               </Link>
               <div className={styles.container}>
                  {renderNavBar}
                  <button
                     type="button"
                     className={styles.user}
                     onClick={handleOpenModal}
                     aria-label="Ouvrir le modal de connexion"
                  >
                     <User weight="bold" />
                     <span>Mon espace</span>
                  </button>
               </div>
            </div>
         </div>
         {renderModal}
      </>
   );
};

export default HeaderComponent;
