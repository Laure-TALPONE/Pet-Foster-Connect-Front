'use client';
import Image from 'next/image';
import styles from './StepsAdoption.module.scss';

const StepsAdoption = () => {
   return (
      <div className={styles.main}>
         <div className={styles.content}>
            {/* <div className={styles.picture}> */}
            <Image
               src={'/images/foster-family.webp'}
               alt="adoption"
               width={470}
               height={382}
            />
            {/* </div> */}
            <div className={styles.infos}>
               <h2 className={styles.title}>
                  3 étapes pour accueillir un animal
               </h2>
               <div className={styles.steps}>
                  <div className={styles.step}>
                     <p className={styles.setpoint}>
                        <span>1.</span> Inscrivez-vous et complétez votre profil
                     </p>
                     <p className={styles.text}>
                        Créez votre compte en précisant votre environnement, vos
                        disponibilités et vos préférences d’accueil.
                     </p>
                  </div>
                  <div className={styles.step}>
                     <p className={styles.setpoint}>
                        <span>2.</span> Faites une demande de recueil
                     </p>
                     <p className={styles.text}>
                        Consultez les animaux en attente d’une famille et
                        envoyez une demande à l’association qui s’en occupe.
                        Vous pourrez échanger avec elle pour préparer l’accueil.
                     </p>
                  </div>
                  <div className={styles.step}>
                     <p className={styles.setpoint}>
                        <span>3.</span> Offrez un refuge temporaire
                     </p>
                     <p className={styles.text}>
                        Une fois votre demande acceptée, accueillez l’animal
                        chez vous et prenez soin de lui jusqu’à son adoption
                        définitive, avec l’accompagnement de l’association.
                     </p>
                  </div>
               </div>
               <button type="button" className="m-button">
                  M’inscrire dès maintenant
               </button>
            </div>
         </div>
      </div>
   );
};

export default StepsAdoption;
