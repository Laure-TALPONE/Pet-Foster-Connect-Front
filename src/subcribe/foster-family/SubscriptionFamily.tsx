'use client';

import Image from 'next/image';
import styles from './SubscriptionFamily.module.scss';

const SubcriptionFamily = () => {
   return (
      <section className="container">
         <div className={styles.content}>
            <section className={styles.informations}>
               <div className={styles.infos}>
                  <h2 className={styles.title}>
                     Inscrivez-vous comme famille d’accueil
                  </h2>
                  <p className={styles.text}>
                     Vous souhaitez offrir un refuge temporaire à un animal dans
                     le besoin ? Rejoignez notre réseau de familles d’accueil et
                     participez activement à la protection animale. En vous
                     inscrivant, vous pourrez créer votre profil, indiquer vos
                     disponibilités et préciser vos préférences d’accueil. Les
                     associations pourront ainsi vous proposer des animaux
                     correspondant à votre environnement et à votre mode de vie.
                     Accueillir, c’est offrir une seconde chance !
                     Inscrivez-vous dès maintenant et faites la différence pour
                     un animal en attente d’une adoption définitive.
                  </p>
               </div>
               <div className={styles.picture}>
                  <Image
                     className={styles.picture}
                     src={'/images/home/pet-home.webp'}
                     alt="pets"
                     width={504}
                     height={393}
                  />
               </div>
            </section>

            <section className={styles.form}>
               <h2>Devenez famille d’accueil et offrez un refuge temporaire</h2>
               <div className={styles.inputs}>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="Nom" />
                  </div>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="Prénom" />
                  </div>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="Adresse" />
                  </div>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="Code postal" />
                  </div>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="Ville" />
                  </div>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="E-mail" />
                  </div>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="Téléphone" />
                  </div>
                  <div className="m-input m-input__background">
                     <textarea placeholder="Description" />
                  </div>
               </div>
               <button type="button" className="m-button">
                  Valider l’inscription
               </button>
            </section>

            <section className={styles.register}>
               <div className={styles.left}>
                  <h2>Vous êtes une association ?</h2>
                  <p>
                     Inscrivez-vous dès maintenant pour trouver facilement des
                     familles d’accueil et offrir un refuge temporaire aux
                     animaux dans le besoin !
                  </p>
               </div>
               <button type="button" className="m-button">
                  M’inscrire ici
               </button>
            </section>
         </div>
      </section>
   );
};

export default SubcriptionFamily;
