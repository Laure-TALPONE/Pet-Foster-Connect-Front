'use client';
import CardAnimal from '@/animals/card-animal/CardAnimal';
import { associations } from '@/globals/constants/data';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import styles from './AssociationSingleComponent.module.scss';

const AssociationSingleComponent = () => {
   const [organizations, setOrganizations] = useState(associations);

   const animals = useMemo(() => {
      const firstAssociation = organizations[0];
      return firstAssociation ? firstAssociation.animals : [];
   }, [organizations]);

   const renderAnimalsList = useMemo(() => {
      return animals.map((pet: any, index: number) => {
         return (
            <li key={index} className={styles.item}>
               <Link href={'/animals/1'}>
                  <CardAnimal pet={pet} />
               </Link>
            </li>
         );
      });
   }, []);

   return (
      <section className="container">
         <div className={styles.associationPage}>
            <section className={styles.presentation}>
               <div className={styles.text}>
                  <h2 className={styles.title}>
                     Cœur de Patte <br /> Association de Protection Animale
                  </h2>
                  <p className={styles.info}>
                     Cœur de Patte est une association bordelaise dédiée à la
                     protection des animaux abandonnés ou maltraités. Nous
                     œuvrons chaque jour pour leur offrir une seconde chance
                     grâce à un réseau de familles d’accueil bienveillantes.
                     Chats, chiens et petits animaux trouvent ainsi un foyer
                     temporaire en attendant une adoption définitive.
                     L'association fonctionne exclusivement grâce aux dons et à
                     l'engagement de ses bénévoles. Rejoindre Cœur de Patte en
                     tant que famille d'accueil, c'est offrir du réconfort, du
                     temps, et beaucoup d’amour à ceux qui en ont le plus
                     besoin.
                  </p>
               </div>
               <div className={styles.picture}>
                  <Image
                     src={'/images/logo-association.webp'}
                     alt="association-logo"
                     width={504}
                     height={393}
                  />
               </div>
            </section>

            <section className={styles.informations}>
               <div className={styles.details}>
                  <div className={styles.content}>
                     <ol className={styles.left}>
                        <li>Adresse : 25 rue des Lilas 33000 Bordeaux</li>
                        <li>E-mail : contact@coeurdepatte.org</li>
                        <li>Téléphone : 05 56 90 12 34</li>
                     </ol>
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
                  Nos animaux à accueillir en famille d’accueil
               </h2>
               <p className={styles.info}>
                  Tous ces compagnons attendent une famille aimante. Si vous
                  êtes prêt à offrir un foyer à un animal, explorez nos profils
                  et contactez-nous pour plus d’informations. Chaque adoption
                  est une nouvelle chance de leur offrir une vie pleine de
                  bonheur.
               </p>
               <ul className={styles.list}>{renderAnimalsList}</ul>
            </section>
         </div>
      </section>
   );
};

export default AssociationSingleComponent;
