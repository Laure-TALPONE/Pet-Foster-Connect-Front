'use client';
import styles from './DashboardProfil.module.scss';

const DashboardProfil = () => {
   return (
      <section className={styles.profil}>
         <div className={styles.content}>
            <form className={styles.form}>
               <div className={styles.inputs}>
                  <div className="m-input m-input__background m-input__label">
                     <input type="email" placeholder="e-mail" />
                  </div>
                  <div className="m-input m-input__background m-input__label">
                     <input
                        type="password"
                        placeholder="Saisir le nouveau mot de passe"
                     />
                  </div>
                  <div className="m-input m-input__background m-input__label">
                     <input
                        type="password"
                        placeholder="Saisir à nouveau le nouveau mot de passe"
                     />
                  </div>
                  <div className="m-input m-input__background m-input__label">
                     <input type="text" placeholder="adresse" />
                  </div>
                  <div className="m-input m-input__background m-input__label">
                     <input type="text" placeholder="code postal" />
                  </div>
                  <div className="m-input m-input__background m-input__label">
                     <input type="text" placeholder="Ville" />
                  </div>
                  <div className="m-input m-input__background m-input__label">
                     <input type="tel" placeholder="Téléphone" />
                  </div>
               </div>
               <div className={styles.description}>
                  <h3 className={styles.titleDescription}>Description :</h3>
                  <div className="m-input m-input__background">
                     <textarea />
                  </div>
               </div>
               <div className={styles.buttons}>
                  <button type="button" className={`m-button--square ${styles.buttonDelete}`}>
                     Supprimer mon profil
                  </button>
                  <button type="submit" className={`m-button ${styles.buttonModification}`}>
                     Modifier mon profil
                  </button>
               </div>
            </form>
         </div>
      </section>
   );
};

export default DashboardProfil;
