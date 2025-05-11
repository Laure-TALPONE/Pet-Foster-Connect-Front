'use client';

import Image from 'next/image';
import styles from './SectionLifestyle.module.scss';
import { useFormContext } from 'react-hook-form';

const SectionLifestyle = () => {
   const {
      register,
      setValue,
      watch,
      formState: { errors },
   } = useFormContext();

   return (
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
            {/* Habitation */}
            <section className={styles.house}>
               <p>Quel est le type de votre habitation ?*</p>
               <ul className={styles.choices}>
                  <li className="m-checkbox m-checkbox--label">
                     <input
                        type="checkbox"
                        value="maison"
                        {...register('house')}
                     />
                     <span></span>
                     <label>Maison</label>
                  </li>
                  <li className="m-checkbox m-checkbox--label">
                     <input
                        type="checkbox"
                        value="appartement"
                        {...register('house')}
                     />
                     <span></span>
                     <label>Appartement</label>
                  </li>
                  <span>avec</span>
                  <li className="m-checkbox m-checkbox--label">
                     <input
                        type="checkbox"
                        value="jardin"
                        {...register('house')}
                     />
                     <span></span>
                     <label>Jardin</label>
                  </li>
                  <li className="m-checkbox m-checkbox--label">
                     <input
                        type="checkbox"
                        value="balcon"
                        {...register('house')}
                     />
                     <span></span>
                     <label>Balcon</label>
                  </li>
               </ul>
            </section>

            {/* Enfants */}
            <section className={styles.child}>
               <p>Avez-vous des enfants sous votre toit ?* :</p>
               <ul className={styles.choices}>
                  <li className="m-radio">
                     <input
                        type="radio"
                        value="Oui"
                        {...register('has_children', { required: true })}
                     />
                     <span></span>
                     <label>Oui</label>
                  </li>
                  <li className="m-radio">
                     <input
                        type="radio"
                        value="Non"
                        {...register('has_children', { required: true })}
                     />
                     <span></span>
                     <label>Non</label>
                  </li>
               </ul>
               {errors.has_children && (
                  <p className="error">Ce champ est requis</p>
               )}
            </section>

            {/* Âge des enfants */}
            <section className={styles.childAge}>
               <p>Si oui, merci d’indiquer leurs âges</p>
               <div className="m-input m-input__background">
                  <input type="text" {...register('children_age')} />
               </div>
            </section>

            {/* Animaux */}
            <section className={styles.animals}>
               <p>Avez-vous déjà des animaux sous votre toit ?* :</p>
               <ul className={styles.choices}>
                  <li className="m-radio">
                     <input
                        type="radio"
                        value="Oui"
                        {...register('has_animal', { required: true })}
                     />
                     <span></span>
                     <label>Oui</label>
                  </li>
                  <li className="m-radio">
                     <input
                        type="radio"
                        value="Non"
                        {...register('has_animal', { required: true })}
                     />
                     <span></span>
                     <label>Non</label>
                  </li>
               </ul>
               {errors.has_animal && (
                  <p className="error">Ce champ est requis</p>
               )}
            </section>

            {/* Infos animaux */}
            <section className={styles.animalsInfos}>
               <p>
                  Si oui, merci d’indiquer l’espèce, l’âge, le sexe, stérilisé
                  ou non
               </p>
               <div className="m-input m-input__background">
                  <input type="text" {...register('animals_infos')} />
               </div>
            </section>
         </div>
      </section>
   );
};

export default SectionLifestyle;
