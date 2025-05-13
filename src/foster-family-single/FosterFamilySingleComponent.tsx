'use client';
import CardAnimal from '@/animals/card-animal/CardAnimal';
import { associations } from '@/globals/constants/data';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import styles from './FosterFamilySingleComponent.module.scss';
import ListAnimals from '@/animals/list-animals/ListAnimals';

type Props = {
   family: any;
};

const FosterFamilySingleComponent = ({ family }: Props) => {
   console.log(family);

   return (
      <section className="container">
         <div className={styles.familyPage}>
            <section className={styles.presentation}>
               <div className={styles.text}>
                  <h2 className={styles.title}>Famille {family.name}</h2>
                  <h3 className={styles.subtitle}>Mes infos</h3>
                  <p className={styles.info}>
                     Accueillir un animal en attente d’adoption, c’est lui
                     offrir une pause douce et rassurante entre deux étapes de
                     vie. Chez moi, j’ai déjà eu le bonheur d’héberger 6 chats
                     et 2 chiens, tous avec des histoires différentes. Certains
                     étaient craintifs, d’autres débordants d’énergie, mais tous
                     m’ont apporté énormément d’amour. Être famille d’accueil,
                     c’est un engagement du cœur. Ce n’est pas toujours facile
                     de les laisser partir, mais savoir qu’on a contribué à leur
                     bonheur, ça n’a pas de prix. <br />
                     {family.description}
                  </p>
               </div>
               <div className={styles.picture}>
                  <Image
                     src={family.image}
                     alt="foster-family-picture"
                     width={504}
                     height={393}
                  />
               </div>
            </section>

            <section className={styles.informations}>
               <div className={styles.details}>
                  <span>Disponible</span>
                  <div className={styles.content}>
                     <p>
                        Ville : {family.city} ( {family.postcode} )
                     </p>
                     <p>Places disponibles : {family.slots}</p>
                  </div>
               </div>
               <Image
                  src={'/images/CAT-VECTO2.webp'}
                  alt="cat-vecto"
                  width={125}
                  height={123}
               />
            </section>

            <section className={styles.listingAnimals}>
               <h2 className={styles.title}>
                  Les protégés de la Famille {family.name} en ce moment 🐾
               </h2>
               <p className={styles.info}>
                  Voici les compagnons actuellement en famille d’accueil,
                  entourés de soin, d’attention et de bienveillance. Ils
                  attendent avec impatience de trouver un foyer définitif où ils
                  pourront s’épanouir pleinement.
               </p>
               <ListAnimals />
            </section>
         </div>
      </section>
   );
};

export default FosterFamilySingleComponent;
