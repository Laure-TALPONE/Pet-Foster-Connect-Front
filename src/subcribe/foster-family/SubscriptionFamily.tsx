'use client';

import Image from 'next/image';
import styles from './SubscriptionFamily.module.scss';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import Link from 'next/link';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import ModalLoginComponent from '@/login/ModalLoginComponent';
import sendRequest from '@/globals/hooks/sendRequest';

const SubcriptionFamily = () => {
   const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const [errorMessage, setErrorMessage] = useState('');
   const [errorEmailMessage, setErrorEmailMessage] = useState('');
   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
   const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
   const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);
   const watchPassword = watch('password');
   const watchConfirm = watch('confirm');

   const handleCloseModaleLogin = useCallback(() => {
      setOpenModalLogin(false);
   }, []);

   const handleDisplayPassword = useCallback(
      (item: string) => {
         if (item === 'password') {
            setPasswordVisible(!passwordVisible);
         }

         if (item === 'confirm') {
            setConfirmVisible(!confirmVisible);
         }
      },
      [passwordVisible, confirmVisible]
   );

   useEffect(() => {
      if (watchPassword && watchPassword.length >= 2) {
         const lowerCaseRegex = /[a-z]/;
         const uppercaseRegex = /[A-Z]/;
         const digitRegex = /[0-9]/;
         const specialCharRegex = /[^A-Za-z0-9.,]/;

         if (watchPassword.length < 7) {
            setErrorMessage('Votre mot de passe est trop court !');
         } else if (!watchPassword.match(lowerCaseRegex)) {
            setErrorMessage('Votre mot de passe doit contenir une minuscule !');
         } else if (!watchPassword.match(uppercaseRegex)) {
            setErrorMessage('Votre mot de passe doit contenir une majuscule !');
         } else if (!watchPassword.match(digitRegex)) {
            setErrorMessage('Votre mot de passe doit contenir un chiffre !');
         } else if (!watchPassword.match(specialCharRegex)) {
            setErrorMessage(
               'Votre mot de passe doit contenir un caratère spécial : @#! !'
            );
         } else {
            setErrorMessage('');
         }
      }
   }, [watchPassword]);

   const onSubmit = async (data: any) => {
      const newData = {
         user: {
            email: data.email,
            password: watchPassword === watchConfirm && data.password,
         },
         foster: {
            name: data.lastname,
            // firstname: data.firstname,
            slots: 2,
            address: data.address,
            city: data.city,
            postcode: data.postcode,
            phone: data.phone,
            description: data.description,
            image: 'https://www.solidarite-peuple-animal.com/data/document/1/22.800.jpg?1744636663',
         },
      };

      console.log(newData, 'ici les datas');

      const result = await sendRequest(
         'POST',
         '/api/auth/register/foster-family',
         newData
      );

      if (result) {
         setOpenModalLogin(true);
      }

      if (!result) {
         setErrorEmailMessage('E-mail déjà existant.');
      }
   };

   const renderModalLogin = useMemo(() => {
      if (openModalLogin) {
         return (
            <ModalComponent
               onClose={handleCloseModaleLogin}
               children={
                  <ModalLoginComponent onClose={handleCloseModaleLogin} />
               }
            />
         );
      }
   }, [openModalLogin]);

   return (
      <section className="container">
         <div className={styles.content}>
            {renderModalLogin}
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

            <form className={styles.form}>
               <h2>Devenez famille d’accueil et offrez un refuge temporaire</h2>
               <div className={styles.inputs}>
                  <section className={styles.contacts}>
                     <section className={styles.email}>
                        <div
                           className={
                              errors.email
                                 ? 'm-input m-input__background m-input__error'
                                 : 'm-input m-input__background'
                           }
                        >
                           <input
                              type="email"
                              placeholder="E-mail de connexion"
                              {...register('email', { required: true })}
                           />
                        </div>
                     </section>
                     <section className={errorMessage ? styles.password : ''}>
                        <div
                           className={
                              errors.password
                                 ? 'm-input m-input__background m-input__error'
                                 : 'm-input m-input__background'
                           }
                        >
                           <input
                              type={passwordVisible ? 'text' : 'password'}
                              placeholder="Mot de passe"
                              {...register('password', { required: true })}
                           />
                           <button
                              type="button"
                              className="m-input__suffix"
                              onClick={() => handleDisplayPassword('password')}
                           >
                              {passwordVisible ? (
                                 <EyeClosed weight="bold" />
                              ) : (
                                 <Eye weight="bold" />
                              )}
                           </button>
                        </div>
                        {errorMessage && (
                           <p className={styles.passwordError}>
                              {errorMessage}
                           </p>
                        )}
                     </section>
                     <div
                        className={
                           watchPassword !== watchConfirm
                              ? 'm-input m-input__background m-input__error'
                              : 'm-input m-input__background'
                        }
                     >
                        <input
                           type={confirmVisible ? 'text' : 'password'}
                           placeholder="Confirmer le mot de passe"
                           {...register('confirm')}
                        />
                        <button
                           type="button"
                           className="m-input__suffix"
                           onClick={() => handleDisplayPassword('confirm')}
                        >
                           {confirmVisible ? (
                              <EyeClosed weight="bold" />
                           ) : (
                              <Eye weight="bold" />
                           )}
                        </button>
                     </div>
                  </section>
                  <section className={styles.family}>
                     <div
                        className={
                           errors.lastname
                              ? 'm-input m-input__background m-input__error'
                              : 'm-input m-input__background'
                        }
                     >
                        <input
                           type="text"
                           placeholder="Nom"
                           {...register('lastname', { required: true })}
                        />
                     </div>
                     <div
                        className={
                           errors.firstname
                              ? 'm-input m-input__background m-input__error'
                              : 'm-input m-input__background'
                        }
                     >
                        <input
                           type="text"
                           placeholder="Prénom"
                           {...register('firstname', { required: true })}
                        />
                     </div>
                     <div
                        className={
                           errors.address
                              ? 'm-input m-input__background m-input__error'
                              : 'm-input m-input__background'
                        }
                     >
                        <input
                           type="text"
                           placeholder="Adresse"
                           {...register('address', { required: true })}
                        />
                     </div>
                     <div
                        className={
                           errors.postcode
                              ? 'm-input m-input__background m-input__error'
                              : 'm-input m-input__background'
                        }
                     >
                        <input
                           type="text"
                           placeholder="Code postal"
                           {...register('postcode', { required: true })}
                        />
                     </div>
                     <div
                        className={
                           errors.city
                              ? 'm-input m-input__background m-input__error'
                              : 'm-input m-input__background'
                        }
                     >
                        <input
                           type="text"
                           placeholder="Ville"
                           {...register('city', { required: true })}
                        />
                     </div>
                     <div
                        className={
                           errors.phone
                              ? 'm-input m-input__background m-input__error'
                              : 'm-input m-input__background'
                        }
                     >
                        <input
                           type="text"
                           placeholder="Téléphone"
                           {...register('phone', { required: true })}
                        />
                     </div>
                     <div
                        className={
                           errors.description
                              ? 'm-input m-input__background m-input__error'
                              : 'm-input m-input__background'
                        }
                     >
                        <textarea
                           placeholder="Description"
                           {...register('description', { required: true })}
                        />
                     </div>
                  </section>
               </div>
               <button
                  type="submit"
                  className="m-button"
                  onClick={handleSubmit(onSubmit)}
               >
                  Valider l’inscription
               </button>
            </form>

            <section className={styles.register}>
               <div className={styles.left}>
                  <h2>Vous êtes une association ?</h2>
                  <p>
                     Inscrivez-vous dès maintenant pour trouver facilement des
                     familles d’accueil et offrir un refuge temporaire aux
                     animaux dans le besoin !
                  </p>
               </div>
               <Link href={'/inscription/association'} className="m-button">
                  M’inscrire ici
               </Link>
            </section>
         </div>
      </section>
   );
};

export default SubcriptionFamily;
