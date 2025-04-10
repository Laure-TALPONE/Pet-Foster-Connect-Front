'use client';
import { useForm } from 'react-hook-form';
import styles from './DashboardProfil.module.scss';

const DashboardProfil = () => {
   const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   return (
      <section className={styles.profil}>
         <form className={styles.form}>
            <div className={styles.inputs}>
               <div className="m-input m-input__background">
                  <input type="email" placeholder="E-mail" />
               </div>
               <div className="m-input m-input__background">
                  <input type="password" placeholder="Nouveau mot de passe" />
               </div>
               <div className="m-input m-input__background">
                  <input
                     type="password"
                     placeholder="Confirmer le nouveau le nouveau mot de passe"
                  />
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
                  <input type="tel" placeholder="Téléphone" />
               </div>
            </div>
            <div className={styles.description}>
               <div className="m-input m-input__background m-input__label">
                  <label>Description</label>
                  <textarea />
               </div>
            </div>
            <div className={styles.buttons}>
               {/* <button
                     type="button"
                     className={`m-button--square ${styles.buttonDelete}`}
                  >
                     Supprimer mon profil
                  </button> */}
               <button
                  type="submit"
                  className={`m-button ${styles.buttonModification}`}
               >
                  Enregistrer les modifications
               </button>
            </div>
         </form>
      </section>
   );
};

export default DashboardProfil;
