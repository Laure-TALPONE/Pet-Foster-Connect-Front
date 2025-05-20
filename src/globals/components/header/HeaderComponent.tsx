'use client';
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
import { useCallback, useEffect, useMemo, useState } from 'react';
import ModalComponent from '../modal/ModalComponent';
import styles from './HeaderComponent.module.scss';
import useOutsideClick from '@/globals/hooks/useOutsideClick';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
   token: any;
};

const HeaderComponent = ({ token }: Props) => {
   const [isDesktop, setIsDesktop] = useState(false);
   const [menuIsOpen, setMenuIsOpen] = useState(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const menuRef = useOutsideClick(() => setMenuIsOpen(false));
   const pathname = usePathname();
   const router = useRouter();

   const handleOpenModal = useCallback(() => {
      if (!token) {
         setModalIsOpen(true);
      } else {
         router.push('/dashboard');
      }
   }, [token]);

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
                  pathname === '/nos-animaux?skip=0&take=9'
                     ? styles.itemActive
                     : styles.item
               }
            >
               <Link href="/nos-animaux?skip=0&take=9">
                  <Cat weight="bold" />
                  <span>Nos animaux</span>
               </Link>
            </li>
            <li
               className={
                  pathname === '/associations?skip=0&take=9'
                     ? styles.itemActive
                     : styles.item
               }
            >
               <Link href="/associations?skip=0&take=9">
                  <HandHeart weight="bold" />
                  <span>Nos associations</span>
               </Link>
            </li>
            <li
               className={
                  pathname === '/familles-daccueil?skip=0&take=9'
                     ? styles.itemActive
                     : styles.item
               }
            >
               <Link href="/familles-daccueil?skip=0&take=9">
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
               <button type="button" onClick={handleOpenMenuBurger}>
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
                     src={'/images/globals/logo.webp'}
                     alt="logo"
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
