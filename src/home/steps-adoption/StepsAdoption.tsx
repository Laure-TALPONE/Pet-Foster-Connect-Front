'use client';
import Image from 'next/image';
import styles from './StepsAdoption.module.scss';

const StepsAdoption = () => {
   return (
      <section className="container">
         <div className={styles.main}>
            <div className={styles.content}>
               <div className={styles.picture}>
                  <Image
                     src={'/images/home/foster-family.webp'}
                     alt="adoption"
                     width={470}
                     height={382}
                  />
               </div>
               <div className={styles.infos}>
                  <h2 className={styles.title}>
                     3 étapes pour accueillir un animal
                  </h2>
                  <ol className={styles.steps}>
                     <li className={styles.step}>
                        <h3 className={styles.setpoint}>
                           <span>1.</span> Inscrivez-vous et complétez votre
                           profil
                        </h3>
                        <p className={styles.text}>
                           Créez votre compte en précisant votre environnement,
                           vos disponibilités et vos préférences d’accueil.
                        </p>
                     </li>
                     <li className={styles.step}>
                        <h3 className={styles.setpoint}>
                           <span>2.</span> Faites une demande de recueil
                        </h3>
                        <p className={styles.text}>
                           Consultez les animaux en attente d’une famille et
                           envoyez une demande à l’association qui s’en occupe.
                           Vous pourrez échanger avec elle pour préparer
                           l’accueil.
                        </p>
                     </li>
                     <li className={styles.step}>
                        <h3 className={styles.setpoint}>
                           <span>3.</span> Offrez un refuge temporaire
                        </h3>
                        <p className={styles.text}>
                           Une fois votre demande acceptée, accueillez l’animal
                           chez vous et prenez soin de lui jusqu’à son adoption
                           définitive, avec l’accompagnement de l’association.
                        </p>
                     </li>
                  </ol>
                  <button type="button" className="m-button">
                     M’inscrire dès maintenant
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default StepsAdoption;
