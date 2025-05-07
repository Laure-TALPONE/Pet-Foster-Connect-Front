'use client';

import Image from 'next/image';
import styles from './AnimalSingleComponent.module.scss';
import Slider from 'react-slick';
import Link from 'next/link';
import dayjs from 'dayjs';
import { useMemo } from 'react';

type Props = {
   pet?: any;
};

const AnimalSingleComponent = ({ pet }: Props) => {
   // console.log(pet);

   const settings = {
      responsive: [
         {
            breakpoint: 9999,
            settings: 'unslick',
         },
         {
            breakpoint: 1024,
            settings: {
               dots: true,
               arrows: false,
               infinite: false,
               speed: 500,
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
         {
            breakpoint: 768,
            settings: {
               dots: true,
               arrows: false,
               infinite: false,
               speed: 500,
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   const renderBoolean = (value: boolean) => {
      return value ? 'Oui' : 'Non';
   };

   const renderStatus = useMemo(() => {
      if (pet.is_available) {
         return (
            <span style={{ background: '#F77748', color: '#FFF' }}>
               Disponible
            </span>
         );
      }

      return (
         <span style={{ background: '#82CCD5', color: 'rgb(0, 0, 0)' }}>
            En famille d’accueil !
         </span>
      );
   }, [pet.is_available]);

   return (
      <section className="container">
         <div className={styles.animalPage}>
            <section className={styles.presentation}>
               <div className={styles.text}>
                  <h2 className={styles.title}>
                     Prêt à accueillir {pet.name} ? <br /> Contactez-nous dès
                     maintenant !
                  </h2>
                  <p className={styles.info}>
                     Milo est un jeune Border Collie plein d’énergie et très
                     affectueux. Intelligent et joueur, il adore apprendre de
                     nouveaux tours et se dépenser en extérieur. Sociable avec
                     les humains et les autres chiens, il conviendrait
                     parfaitement à une famille active prête à lui offrir du
                     temps et de l’attention. Actuellement en attente d’une
                     famille d’accueil, Milo cherche un foyer temporaire où il
                     pourra s’épanouir en toute sécurité. <br />
                     {pet.description}
                  </p>
               </div>
               <div className={styles.picture}>
                  <Image
                     src={'/images/animal-page/Milo1.webp'}
                     alt="pet-picture"
                     width={788}
                     height={459}
                  />
               </div>
            </section>

            <section className={styles.informations}>
               <div className={styles.details}>
                  {renderStatus}
                  <div className={styles.content}>
                     <ol className={styles.left}>
                        <li>Nom : {pet.name}</li>
                        <li>Espèce : {pet.species.name}</li>
                        <li>Race : {pet.breed}</li>
                        <li>Vacciné : {renderBoolean(pet.is_vaccinated)}</li>
                        <li>Stérilisé : {renderBoolean(pet.is_sterilized)}</li>
                     </ol>
                     <ol className={styles.right}>
                        <li>
                           Date de naissance :{' '}
                           {dayjs(pet.birthdate).format('DD-MM-YYYY')}
                        </li>
                        <li>Genre : {pet.gender ? 'Mâle' : 'Femelle'}</li>
                        <li>Localisation : {pet.organization.city}</li>
                        <li>Sevré : {renderBoolean(pet.is_weaned)}</li>
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

            <section className={styles.slider}>
               <Slider {...settings}>
                  <div className={styles.picture}>
                     <Image
                        src={'/images/animal-page/Milo1.webp'}
                        alt="pet-picture"
                        width={425}
                        height={248}
                     />
                  </div>
                  <div className={styles.picture}>
                     <Image
                        src={'/images/animal-page/Milo2.webp'}
                        alt="pet-picture"
                        width={425}
                        height={248}
                     />
                  </div>
                  <div className={styles.picture}>
                     <Image
                        src={'/images/animal-page/Milo3.webp'}
                        alt="pet-picture"
                        width={425}
                        height={248}
                     />
                  </div>
                  <div className={styles.picture}>
                     <Image
                        src={'/images/animal-page/Milo1.webp'}
                        alt="pet-picture"
                        width={425}
                        height={248}
                     />
                  </div>
               </Slider>
            </section>

            <section className={styles.assoInformations}>
               <div className={styles.infos}>
                  <h2 className={styles.title}>
                     L’association {pet.organization.name}
                  </h2>
                  <p className={styles.text}>
                     L’association {pet.organization.name} œuvre depuis{' '}
                     {dayjs(pet.organization.registration_date).format('YYYY ')}
                     pour la protection et le bien-être des animaux en détresse.
                     Spécialisée dans le sauvetage, le placement en famille
                     d’accueil et l’adoption responsable, elle collabore avec un
                     large réseau de bénévoles et de foyers d’accueil pour
                     offrir une seconde chance aux animaux abandonnés ou
                     maltraités.
                  </p>
                  <Link
                     href={`/associations/${pet.organization_id}`}
                     className="m-button--square"
                  >
                     Voir la page de l’association
                  </Link>
               </div>
               <div className={styles.adopte}>
                  <h2 className={styles.title}>
                     Souhaitez-vous l’accueillir ?
                  </h2>
                  <Link
                     href={`/nos-animaux/${pet.uuid}/demande-daccueil`}
                     className="m-button"
                  >
                     Faire une demande
                  </Link>
               </div>
            </section>
         </div>
      </section>
   );
};

export default AnimalSingleComponent;
