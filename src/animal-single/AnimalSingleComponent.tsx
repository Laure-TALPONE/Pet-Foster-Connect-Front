'use client';

import Image from 'next/image';
import styles from './AnimalSingleComponent.module.scss';
import Slider from 'react-slick';

const AnimalSingleComponent = () => {
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

   return (
      <section className="container">
         <div className={styles.animalPage}>
            <section className={styles.presentation}>
               <div className={styles.text}>
                  <h2 className={styles.title}>
                     Prêt à accueillir Milo ? <br /> Contactez-nous dès
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
                     pourra s’épanouir en toute sécurité.
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
                  <span>Disponible</span>
                  <div className={styles.content}>
                     <ol className={styles.left}>
                        <li>Nom : Milo</li>
                        <li>Espèce : Chien</li>
                        <li>Race : Border Collie</li>
                        <li>Vacciné : Oui</li>
                        <li>Stérilisé : Oui</li>
                     </ol>
                     <ol className={styles.right}>
                        <li>Date de naissance : 15/06/2022</li>
                        <li>Genre : Mâle</li>
                        <li>Localisation : Lyon</li>
                        <li>Sevré : Non</li>
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
                     L’association Pattes Solidaires
                  </h2>
                  <p className={styles.text}>
                     L’association Pattes Solidaires œuvre depuis 2015 pour la
                     protection et le bien-être des animaux en détresse.
                     Spécialisée dans le sauvetage, le placement en famille
                     d’accueil et l’adoption responsable, elle collabore avec un
                     large réseau de bénévoles et de foyers d’accueil pour
                     offrir une seconde chance aux animaux abandonnés ou
                     maltraités.
                  </p>
                  <button type="button" className={styles.viewPage}>
                     Voir la page de l’association
                  </button>
               </div>
               <div className={styles.adopte}>
                  <h2 className={styles.title}>
                     Souhaitez-vous l’accueillir ?
                  </h2>
                  <button type="button" className="m-button">
                     Faire une demande
                  </button>
               </div>
            </section>
         </div>
      </section>
   );
};

export default AnimalSingleComponent;
