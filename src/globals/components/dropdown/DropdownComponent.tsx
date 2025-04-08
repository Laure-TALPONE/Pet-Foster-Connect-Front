'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import styles from './DropdownComponent.module.scss';
import { useMemo } from 'react';

type Props = {
   chrildren: any;
   search?: boolean;
};

const DropdownComponent = ({ chrildren, search }: Props) => {
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
         {chrildren}
      </div>
   );
};

export default DropdownComponent;
