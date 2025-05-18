import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styles from './ModalLoginComponent.module.scss';
import { useEffect, useState } from 'react';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import sendRequest from '@/globals/hooks/sendRequest';
import { useUser } from '@/globals/utils/UserContext';

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
   const router = useRouter();

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

      const result = await sendRequest('POST', '/api/auth/login', newData);
      console.log(result);

      if (result) {
         if (result.user.role === 'foster') {
            // méthode native de js pour rediriger et recharger la page
            window.location.href = '/dashboard/mes-demandes-adoption';
         } else {
            window.location.href = '/dashboard/nos-animaux';
         }
      }

      if (!result) {
         setErrorMessage('E-mail ou mot de passe incorrecte');
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
                        errorMessage
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
                     <p className={styles.messageError}>{errorMessage}</p>
                  )}
               </section>
               <section className={styles.password}>
                  <div
                     className={
                        errorMessage
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
                     <p className={styles.messageError}>{errorMessage}</p>
                  )}
               </section>
            </div>
            <Link href={'#'} className={styles.forgotten}>
               Mot de passe oublié ?
            </Link>
            <div className={styles.buttons}>
               <button
                  type="submit"
                  className="m-button"
                  onClick={handleSubmit(onSubmit)}
               >
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
