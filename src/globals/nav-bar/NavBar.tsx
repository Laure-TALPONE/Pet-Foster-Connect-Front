'use client';
import Image from 'next/image';
import styles from './NavBar.module.scss';
import Link from 'next/link';
import { Cat, HandHeart, House, User, Users } from '@phosphor-icons/react';

const NavBar = () => {
   return (
      <div className={styles.navbar}>
         <div className={styles.content}>
            <Link href={'/home'} className={styles.logo}>
               <Image
                  src={'/images/logo.webp'}
                  alt="logo"
                  width={120}
                  height={120}
               />
            </Link>
            <div className={styles.container}>
               <ul className={styles.nav}>
                  <li className={styles.item}>
                     <Link href={'/home'}>
                        <House weight="bold" />
                        <span>Accueil</span>
                     </Link>
                  </li>
                  <li className={styles.item}>
                     <Link href={'/associations'}>
                        <HandHeart weight="bold" />
                        <span>Nos associations</span>
                     </Link>
                  </li>
                  <li className={styles.item}>
                     <Link href={'/foster-families'}>
                        <Users weight="bold" />
                        <span> Nos familles d'accueil</span>
                     </Link>
                  </li>
                  <li className={styles.item}>
                     <Link href={'/pets'}>
                        <Cat weight="bold" />
                        <span>Nos animaux</span>
                     </Link>
                  </li>
               </ul>
               <button type="button" className={styles.user}>
                  <User weight="bold" />
                  <span>Mon espace</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default NavBar;
