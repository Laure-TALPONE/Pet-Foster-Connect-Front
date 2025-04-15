'use client';

import Image from 'next/image';
import styles from './SectionLifestyle.module.scss';

const SectionLifestyle = () => {
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
            <section className={styles.house}>
               <p>Quel est le type de votre habitation ?*</p>
               <ul className={styles.choices}>
                  <li className="m-checkbox m-checkbox--label">
                     <input type="checkbox" />
                     <span></span>
                     <label>Maison</label>
                  </li>
                  <li className="m-checkbox m-checkbox--label">
                     <input type="checkbox" />
                     <span></span>
                     <label>Appartement</label>
                  </li>
                  <span>avec</span>
                  <li className="m-checkbox m-checkbox--label">
                     <input type="checkbox" />
                     <span></span>
                     <label>Jardin</label>
                  </li>
                  <li className="m-checkbox m-checkbox--label">
                     <input type="checkbox" />
                     <span></span>
                     <label>Balcon</label>
                  </li>
               </ul>
            </section>
            <section className={styles.child}>
               <p>Avez vous des enfants sous votre toit ?* :</p>
               <ul className={styles.choices}>
                  <li className="m-radio">
                     <input type="radio" name="child" />
                     <span></span>
                     <label>Oui</label>
                  </li>
                  <li className="m-radio">
                     <input type="radio" name="child" />
                     <span></span>
                     <label>Non</label>
                  </li>
               </ul>
            </section>
            <section className={styles.childAge}>
               <p>Si oui, merci d’indiquer leurs âges</p>
               <div className="m-input m-input__background">
                  <input type="text" />
               </div>
            </section>
            <section className={styles.animals}>
               <p>Avez vous déjà des animaux sous votre toit ?* :</p>
               <ul className={styles.choices}>
                  <li className="m-radio">
                     <input type="radio" name="pets" />
                     <span></span>
                     <label>Oui</label>
                  </li>
                  <li className="m-radio">
                     <input type="radio" name="pets" />
                     <span></span>
                     <label>Non</label>
                  </li>
               </ul>
            </section>
            <section className={styles.animalsInfos}>
               <p>
                  Si oui, merci d’indiquer l’espèce, l’âge, le sexe, sterilisé
                  ou non
               </p>
               <div className="m-input m-input__background">
                  <input type="text" />
               </div>
            </section>
         </div>
      </section>
   );
};

export default SectionLifestyle;
