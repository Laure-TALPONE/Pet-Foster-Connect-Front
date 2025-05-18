'use client';
import { useForm } from 'react-hook-form';
import styles from './DashboardProfil.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import sendRequest from '@/globals/hooks/sendRequest';
import { useUser } from '@/globals/utils/UserContext';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import ModalRequestApi from '@/globals/components/modal-request-api/ModalRequestApi';

const DashboardProfil = () => {
   const [errorMessage, setErrorMessage] = useState('');
   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
   const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
   const user = useUser().user;
   const organization = user.organizations[0];
   const fosterCares = user.fosterCares[0];
   const [openModalResponse, setOpenModalResponse] = useState<boolean>(false);
   const [textResponseModal, setTextResponseModal] = useState<string>('');
   const [color, setColor] = useState('');
   const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm({
      defaultValues: {
         email: user.email,
         address: organization ? organization.address : fosterCares.address,
         postcode: organization ? organization.postcode : fosterCares.postcode,
         city: organization ? organization.city : fosterCares.city,
         phone: organization ? organization.phone : fosterCares.phone,
         description: organization
            ? organization.description
            : fosterCares.description,
      },
   });
   const watchPassword: any = watch('password');
   const watchConfirm: any = watch('confirm');

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

   const handleCloseModaleResponse = useCallback(() => {
      setOpenModalResponse(false);
   }, []);

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
      const newDataUser = {
         email: data.email,
         password: watchPassword === watchConfirm && data.password,
      };

      const newDatas = {
         address: data.address,
         city: data.city,
         postcode: data.postcode,
         phone: data.phone,
         description: data.description,
      };

      console.log(newDataUser, newDatas, 'ici les datas');

      const resultUser = await sendRequest(
         'PATCH',
         `/api/user/update/${user.uuid}`,
         newDataUser
      );

      let resultRole;

      if (user.role === 'foster') {
         resultRole = await sendRequest(
            'PATCH',
            `/api/foster-family/update/${fosterCares.uuid}`,
            newDatas
         );
      } else if (user.role === 'organization') {
         resultRole = await sendRequest(
            'PATCH',
            `/api/associations/update/${organization.uuid}`,
            newDatas
         );
      }

      setOpenModalResponse(true);

      if (resultUser && resultRole) {
         setTextResponseModal('Modification du profil réussie.');
         setColor('#55B048');
      }

      if (!resultUser && !resultRole) {
         setTextResponseModal('Erreur lors de la modification du profil.');
         setColor('#DD4F3A');
      }
   };

   const renderModalResponse = useMemo(() => {
      if (openModalResponse) {
         return (
            <ModalComponent
               onClose={handleCloseModaleResponse}
               children={
                  <ModalRequestApi color={color} text={textResponseModal} />
               }
            />
         );
      }
   }, [openModalResponse, handleCloseModaleResponse]);

   return (
      <section className={styles.profil}>
         {renderModalResponse}
         <form className={styles.form}>
            <div className={styles.inputs}>
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
                        placeholder="Nouveau mot de passe"
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
                     <p className={styles.passwordError}>{errorMessage}</p>
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
                     placeholder="Confirmer le nouveau mot de passe"
                     {...register('confirm', { required: true })}
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
                        ? 'm-input m-input__background m-input__label m-input__error'
                        : 'm-input m-input__background m-input__label'
                  }
               >
                  <label>Description: </label>
                  <textarea {...register('description', { required: true })} />
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
                  onClick={handleSubmit(onSubmit)}
               >
                  Enregistrer les modifications
               </button>
            </div>
         </form>
      </section>
   );
};

export default DashboardProfil;
