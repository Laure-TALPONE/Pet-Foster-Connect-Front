'use client';
import Image from 'next/image';
import styles from './HeaderComponent.module.scss';
import Link from 'next/link';
import {
   Cat,
   HandHeart,
   House,
   List,
   User,
   Users,
} from '@phosphor-icons/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

const HeaderComponent = () => {
   const [isDesktop, setIsDesktop] = useState(false);
   const [menuIsOpen, setMenuIsOpen] = useState(false);

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

   const renderNavItems = () => {
      return (
         <ul className={styles.nav}>
            <li className={styles.item}>
               <Link href="/accueil">
                  <House weight="bold" />
                  <span>Accueil</span>
               </Link>
            </li>
            <li className={styles.item}>
               <Link href="/nos-animaux">
                  <Cat weight="bold" />
                  <span>Nos animaux</span>
               </Link>
            </li>
            <li className={styles.item}>
               <Link href="/associations">
                  <HandHeart weight="bold" />
                  <span>Nos associations</span>
               </Link>
            </li>
            <li className={styles.item}>
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
               <button type="button" onClick={handleOpenMenuBurger}>
                  <List weight="bold" />
               </button>
               {menuIsOpen && (
                  <div className={styles.menuOpen}>{renderNavItems()}</div>
               )}
            </div>
         </div>
      );
   }, [isDesktop, handleOpenMenuBurger, menuIsOpen, renderNavItems]);

   return (
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
               <button type="button" className={styles.user}>
                  <User weight="bold" />
                  <span>Mon espace</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default HeaderComponent;
