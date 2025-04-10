'use client';

import { PawPrint } from '@phosphor-icons/react';
import styles from './NotFoundComponent.module.scss';

const NotFoundComponent = () => {
   return (
      <section className="container">
         <div className={styles.content}>
            <span className={styles.textError}>
               4<PawPrint size={50} weight="fill" />4
            </span>
            <h2 className={styles.title}> Oups, une truffe s’est perdue !</h2>
            <p className={styles.text}>
               Cette page n’existe pas (ou plus)...
               <br />
               Chez Pet Foster Connect, on fait tout pour que chaque animal
               trouve sa famille d’accueil idéale. <br />
               Mais parfois, même les meilleures truffes peuvent se perdre en
               chemin.
            </p>
            <button type="button" className="m-button">
               Retour à l’accueil
            </button>
         </div>
      </section>
   );
};

export default NotFoundComponent;
