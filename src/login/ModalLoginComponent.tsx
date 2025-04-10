import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styles from './ModalLoginComponent.module.scss';
import { useState } from 'react';
import { Eye, EyeClosed } from '@phosphor-icons/react';

type Props = {
   onClose: any;
};

const ModalLoginComponent = ({ onClose }: Props) => {
   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
   const [errorMessage, setErrorMessage] = useState('');
   const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const handleCloseModal = () => {
      onClose(false);
   };

   const handleDisplayPassword = () => {
      setPasswordVisible(!passwordVisible);
   };

   const onSubmit = async (data: any) => {
      const newData = {
         email: data.email,
         password: data.password,
      };

      console.log(newData, 'ici les datas');

      try {
         const response = await fetch('/api/auth/register/association', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
         });

         const result = await response.json();

         if (!response.ok) {
            setErrorMessage(result.message);
            throw new Error(result.message || 'Une erreur est survenue.');
         }

         console.log('Connexion réussie :', result);
      } catch (error) {
         console.error('Erreur API :', error);
      }
   };

   return (
      <section className={styles.loginForm}>
         <form>
            <h2 className={styles.title}>Formulaire de connexion</h2>
            <div className={styles.form}>
               <section className={styles.email}>
                  <div
                     className={
                        errors.email
                           ? 'm-input m-input__background m-input__label m-input__error'
                           : 'm-input m-input__background m-input__label'
                     }
                  >
                     <label>Adresse e-mail* :</label>
                     <input
                        type="email"
                        {...register('email', { required: true })}
                     />
                  </div>
                  {errorMessage && (
                     <p className={styles.passwordError}>{errorMessage}</p>
                  )}
               </section>
               <section className={styles.password}>
                  <div
                     className={
                        errors.password
                           ? 'm-input m-input__background m-input__label m-input__error'
                           : 'm-input m-input__background m-input__label'
                     }
                  >
                     <label>Mot de passe* :</label>
                     <input
                        type={passwordVisible ? 'text' : 'password'}
                        {...register('password', { required: true })}
                     />
                     <button
                        type="button"
                        className="m-input__suffix"
                        onClick={handleDisplayPassword}
                     >
                        {passwordVisible ? (
                           <EyeClosed weight="bold" />
                        ) : (
                           <Eye weight="bold" />
                        )}
                     </button>
                  </div>
                  {errorMessage && (
                     <p className={styles.passwordError}>{errorMessage}</p>
                  )}
               </section>
            </div>
            <Link href={'#'} className={styles.forgotten}>
               Mot de passe oublié ?
            </Link>
            <div className={styles.buttons}>
               <button type="submit" className="m-button" onClick={onSubmit}>
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
