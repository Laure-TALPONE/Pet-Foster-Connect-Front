'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import styles from './DropdownComponent.module.scss';
import { useMemo } from 'react';

type Props = {
   children: any;
   search?: boolean;
};

const DropdownComponent = ({ children, search }: Props) => {
   const renderSearchBar = useMemo(() => {
      if (!search) return;

      if (search) {
         return (
            <section className={styles.search}>
               <div className="m-input">
                  <input type="text" placeholder="Rechercher ..." />
                  <span className="m-input__suffix">
                     <MagnifyingGlass />
                  </span>
               </div>
            </section>
         );
      }
   }, [search]);

   return (
      <div className={styles.dropdown}>
         {renderSearchBar}
         {children}
      </div>
   );
};

export default DropdownComponent;
