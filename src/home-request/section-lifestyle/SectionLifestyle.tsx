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
                  Parlez-nous de votre personnalité et de votre style de vie en
                  sélectionnant les options qui vous décrivent le mieux :
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
   );
};

export default SectionLifestyle;
