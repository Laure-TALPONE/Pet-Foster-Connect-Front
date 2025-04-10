import Link from 'next/link';
import styles from './ModalLoginComponent.module.scss';

type Props = {
   onClose: any;
};

const ModalLoginComponent = ({ onClose }: Props) => {
   const handleCloseModal = () => {
      onClose(false);
   };

   return (
      <section className={styles.loginForm}>
         <form>
            <h2 className={styles.title}>Formulaire de connexion</h2>
            <div className={styles.form}>
               <div className="m-input m-input__background m-input__label">
                  <label>Adresse e-mail* :</label>
                  <input type="text" />
               </div>
               <div className="m-input m-input__background m-input__label">
                  <label>Mot de passe* :</label>
                  <input type="password" />
               </div>
            </div>
            <p>Mot de passe oublié ?</p>
            <div className={styles.buttons}>
               <button type="submit" className="m-button">
                  Me connecter
               </button>
            </div>
         </form>
         <section className={styles.register}>
            <h2 className={styles.title}>Pas encore inscrit ?</h2>
            <p className={styles.text}>Inscrivez vous ici :</p>
            <div className={styles.links}>
               <Link
                  href="/inscription/association"
                  className={styles.link}
                  onClick={handleCloseModal}
               >
                  M'inscrire comme Association
               </Link>
               <Link
                  href="/inscription/famille-daccueil"
                  className={styles.link}
                  onClick={handleCloseModal}
               >
                  M'inscrire comme Famille d'accueil
               </Link>
            </div>
         </section>
      </section>
   );
};

export default ModalLoginComponent;
