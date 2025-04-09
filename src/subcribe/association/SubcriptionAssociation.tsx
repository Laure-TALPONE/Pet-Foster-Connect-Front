'use client';

import Image from 'next/image';
import styles from './SubcriptionAssociation.module.scss';
import { UploadSimple } from '@phosphor-icons/react';
import Link from 'next/link';

const SubcriptionAssociation = () => {
   return (
      <section className="container">
         <div className={styles.content}>
            <section className={styles.informations}>
               <div className={styles.infos}>
                  <h2 className={styles.title}>Inscrivez votre association</h2>
                  <p className={styles.text}>
                     Vous êtes une association de protection animale et vous
                     souhaitez trouver des familles d’accueil pour vos animaux
                     en attente d’adoption ? Inscrivez votre organisation sur
                     notre plateforme et accédez à un réseau de familles prêtes
                     à offrir un foyer temporaire. En quelques étapes simples,
                     créez votre profil, précisez vos besoins et commencez à
                     recevoir des propositions d’accueil adaptées aux animaux
                     que vous prenez en charge. Rejoignez-nous et offrez à vos
                     protégés une chance d’être hébergés dans un environnement
                     sécurisé et bienveillant.
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
               <h2>
                  Inscrivez votre association ici pour accéder à un réseau de
                  familles d’accueil
               </h2>
               <div className={styles.inputs}>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="E-mail de connexion" />
                  </div>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="Mot de passe" />
                  </div>
                  <div className="m-input m-input__background">
                     <input
                        type="text"
                        placeholder="Confirmer le mot de passe"
                     />
                  </div>
                  <div className="m-input m-input__background">
                     <input type="text" placeholder="Nom de l'association" />
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
                     <input type="text" placeholder="Téléphone" />
                  </div>
                  <div className="m-input m-input__background">
                     <input
                        type="text"
                        readOnly
                        placeholder="Ajouter des fichiers"
                     />
                     <button type="button" className="m-input__suffix">
                        <UploadSimple weight="bold" />
                     </button>
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
                  <h2>Vous êtes famille d’accueil ?</h2>
                  <p>
                     Offrez un refuge temporaire à un animal dans le besoin.
                     Inscrivez-vous ici et faites la différence !
                  </p>
               </div>
               <Link
                  href={'/inscription/famille-daccueil'}
                  className="m-button"
               >
                  M’inscrire ici
               </Link>
            </section>
         </div>
      </section>
   );
};

export default SubcriptionAssociation;
