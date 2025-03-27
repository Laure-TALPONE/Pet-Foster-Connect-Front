'use client';

import { useForm } from 'react-hook-form';
import styles from './HomeRequestComponent.module.scss';
import { CaretDown } from '@phosphor-icons/react';
import { useCallback, useMemo, useState } from 'react';
import { civilities } from '@/globals/constants/civility';
import useOutsideClick from '@/globals/hooks/useOutsideClick';
import Image from 'next/image';
import { BeaconSvg } from '../../public/svg/Beacon';

const HomeRequestComponent = () => {
   const { register, setValue, handleSubmit, watch } = useForm();
   const [civilityDisplay, setCivilityDisplay] = useState(false);

   const refCivility = useOutsideClick(() => setCivilityDisplay(false));

   const handleOpenDropdown = () => {
      setCivilityDisplay(!civilityDisplay);
   };

   const handleSelectItem = useCallback(() => {}, []);

   const renderSelectCivility = useMemo(() => {
      if (!civilityDisplay) return;

      if (civilityDisplay) {
         return (
            <ul className={styles.select}>
               {civilities.map((civility: string, index: number) => {
                  return (
                     <li key={index} onClick={handleSelectItem}>
                        {civility}
                     </li>
                  );
               })}
            </ul>
         );
      }
   }, [civilityDisplay, handleSelectItem]);

   return (
      <section className="container">
         <div className={styles.request}>
            <h2 className={styles.title}>Demande d’accueil</h2>
            <form>
               <section className={styles.informations}>
                  <div
                     className="m-select"
                     onClick={handleOpenDropdown}
                     ref={refCivility}
                  >
                     <input type="text" readOnly placeholder="Civilité" />
                     <span className="m-select__suffix">
                        <CaretDown weight="bold" />
                     </span>
                     {renderSelectCivility}
                  </div>
                  <div className="m-input">
                     <input type="text" placeholder="Prénom*" />
                  </div>
                  <div className="m-input">
                     <input type="text" placeholder="Nom*" />
                  </div>
                  <div className="m-input">
                     <input type="text" placeholder="E-mail*" />
                  </div>
                  <div className="m-input">
                     <input type="text" placeholder="Numéro et nom de voie*" />
                  </div>
                  <div className="m-input">
                     <input type="text" placeholder="Code Postal*" />
                  </div>
                  <div className="m-input">
                     <input type="text" placeholder="Ville*" />
                  </div>
                  <div className="m-input">
                     <input type="text" placeholder="Téléphone*" />
                  </div>
               </section>

               <section className={styles.lifestyle}>
                  <div className={styles.picture}>
                     <Image
                        src={'/images/animal-page/Milo1.webp'}
                        alt="pet-picture"
                        width={425}
                        height={248}
                     />
                  </div>
                  <div className={styles.infos}>
                     <div className={styles.childs}>
                        <h3>Avez vous des enfants* :</h3>
                        <div className={styles.radios}>
                           <div className="m-radio">
                              <input type="radio" />
                              <span></span>
                              <label>Oui</label>
                           </div>
                           <div className="m-radio">
                              <input type="radio" />
                              <span></span>
                              <label>Non</label>
                           </div>
                        </div>
                     </div>
                     <div className={styles.family}>
                        <h3>Votre Famille*</h3>
                        <p>
                           Parlez-nous de votre personnalité et de votre style
                           de vie en sélectionnant les options qui vous
                           décrivent le mieux
                        </p>
                        <ul className={styles.choices}>
                           <li>
                              <div className="m-checkbox m-checkbox--label">
                                 <input type="checkbox" />
                                 <span></span>
                                 <label>Calme</label>
                              </div>
                           </li>
                           <li>
                              <div className="m-checkbox m-checkbox--label">
                                 <input type="checkbox" />
                                 <span></span>
                                 <label>Casanier</label>
                              </div>
                           </li>
                           <li>
                              <div className="m-checkbox m-checkbox--label">
                                 <input type="checkbox" />
                                 <span></span>
                                 <label>Dynamique</label>
                              </div>
                           </li>
                           <li>
                              <div className="m-checkbox m-checkbox--label">
                                 <input type="checkbox" />
                                 <span></span>
                                 <label>Aventureux</label>
                              </div>
                           </li>
                           <li>
                              <div className="m-checkbox m-checkbox--label">
                                 <input type="checkbox" />
                                 <span></span>
                                 <label>Sportif</label>
                              </div>
                           </li>
                           <li>
                              <div className="m-checkbox m-checkbox--label">
                                 <input type="checkbox" />
                                 <span></span>
                                 <label>Urbain</label>
                              </div>
                           </li>
                           <li>
                              <div className="m-checkbox m-checkbox--label">
                                 <input type="checkbox" />
                                 <span></span>
                                 <label>Outdoor</label>
                              </div>
                           </li>
                           <li>
                              <div className="m-checkbox m-checkbox--label">
                                 <input type="checkbox" />
                                 <span></span>
                                 <label>Voyageur</label>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </section>

               <section className={styles.motivations}>
                  <h3>Vos motivations*</h3>
                  <p>Pourquoi souhaitez-vous accueillir Milo ?</p>
                  <div className={`m-input ${styles.textarea}`}>
                     <textarea></textarea>
                  </div>
                  <div className={styles.consent}>
                     <div className="m-checkbox">
                        <input type="checkbox" />
                        <span></span>
                     </div>
                     <p>
                        J’accepte que les informations personnelles fournies
                        dans ce formulaire soient partagées avec
                        <span> L’association Pattes Solidaires</span> afin de
                        traiter ma demande d’adoption.
                     </p>
                  </div>
               </section>

               <section className={styles.adoption}>
                  <BeaconSvg />
                  <p>
                     Adopter un animal via Pet Foster Connect, c’est bien plus
                     qu’offrir un foyer : c’est transformer une vie, la leur et
                     la vôtre. Chaque adoption permet à un animal abandonné de
                     retrouver l’amour, la sécurité et la chaleur d’un foyer
                     bienveillant. Avec Pet Foster Connect, vous bénéficiez d’un
                     accompagnement personnalisé pour trouver le compagnon qui
                     correspond parfaitement à votre mode de vie. Offrez-leur
                     une seconde chance et découvrez un amour inconditionnel qui
                     changera votre quotidien.
                  </p>
               </section>

               <button type="button" className="m-button">
                  Faire ma demande
               </button>
            </form>
         </div>
      </section>
   );
};

export default HomeRequestComponent;
