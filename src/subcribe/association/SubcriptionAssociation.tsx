'use client';

import Image from 'next/image';
import styles from './SubcriptionAssociation.module.scss';
import {
   CalendarBlank,
   Eye,
   EyeClosed,
   FileArrowDown,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import ModalLoginComponent from '@/login/ModalLoginComponent';
import sendRequest from '@/globals/hooks/sendRequest';
import ModalRequestApi from '@/globals/components/modal-request-api/ModalRequestApi';

const SubcriptionAssociation = () => {
   const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
   const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
   const watchFileUpload = watch('certification_file');
   const watchPassword = watch('password');
   const watchConfirm = watch('confirm');
   const watchDateAsso = watch('registration_date');
   const [errorMessage, setErrorMessage] = useState('');
   const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);
   const [openModalResponse, setOpenModalResponse] = useState<boolean>(false);
   const [textResponseModal, setTextResponseModal] = useState<string>('');
   const [color, setColor] = useState('');

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

   const onSubmit = async (data: any) => {
      const newData = {
         user: {
            email: data.email,
            password: watchPassword === watchConfirm && data.password,
         },
         organization: {
            name: data.name,
            address: data.address,
            city: data.city,
            postcode: data.postcode,
            phone: data.phone,
            description: data.description,
            rna_code: data.rna_code,
            logo: 'https://www.la-spa.fr/app/app/uploads/2021/09/MicrosoftTeams-image-63.png',
            certification_file:
               watchFileUpload ||
               'https://res.cloudinary.com/dunuutcib/image/upload/v1744297417/eas7volldm9p6tlnfewc.pdf',
            registration_date: dayjs(data.registration_date).format(
               'YYYY-MM-DD'
            ),
         },
      };

      console.log(newData, 'ici les datas');

      const result = await sendRequest(
         'POST',
         '/api/auth/register/association',
         newData
      );

      setOpenModalResponse(true);

      if (result) {
         setTextResponseModal(
            'Votre compte a bien été créé. Un mail de confirmation vous a été envoyé dans votre boîte mail.'
         );
         setColor('#55B048');
      }

      if (!result) {
         setTextResponseModal(
            "Une erreur est survenue lors de la création de votre compte. L'email est peut-être déjà existant."
         );
         setColor('#DD4F3A');
      }
   };

   const handleUploadFile = async (e: any) => {
      const file = e.target.files[0];
      console.log(file);

      if (file) {
         const formData = new FormData();

         const cloudinaryUrl =
            'https://api.cloudinary.com/v1_1/dunuutcib/image/upload';
         const uploadPreset = 'my_secret_preset';

         formData.append('file', file);
         formData.append('upload_preset', uploadPreset);

         try {
            const response = await fetch(cloudinaryUrl, {
               method: 'POST',
               body: formData,
            });
            const data = await response.json();

            if (response.ok) {
               console.log('Fichier uploadé avec succès:', data);
               const uploadedFileUrl = data.secure_url;
               console.log(uploadedFileUrl);
               setValue('certification_file', uploadedFileUrl);
            } else {
               console.error("Erreur lors de l'upload:", data);
            }
         } catch (error) {
            console.error("Erreur lors de l'upload du fichier:", error);
         }
      }
   };

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

   const handleCloseModaleResponse = useCallback(() => {
      setOpenModalResponse(false);
      setOpenModalLogin(true);
   }, []);

   const handleCloseModaleLogin = useCallback(() => {
      setOpenModalLogin(false);
   }, []);

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

   const renderModalLogin = useMemo(() => {
      if (openModalLogin) {
         return (
            <ModalComponent onClose={handleCloseModaleLogin}>
               <ModalLoginComponent onClose={handleCloseModaleLogin} />
            </ModalComponent>
         );
      }
      return null;
   }, [openModalLogin, handleCloseModaleLogin]);

   return (
      <section className="container">
         <div className={styles.content}>
            {renderModalResponse}
            {renderModalLogin}
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

            <form className={styles.form}>
               <h2>
                  Inscrivez votre association ici pour accéder à un réseau de
                  familles d’accueil
               </h2>
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
                  <div
                     className={
                        errors.name
                           ? 'm-input m-input__background m-input__error'
                           : 'm-input m-input__background'
                     }
                  >
                     <input
                        type="text"
                        placeholder="Nom de l'association"
                        {...register('name', { required: true })}
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
                        errors.rna_code
                           ? 'm-input m-input__background m-input__error'
                           : 'm-input m-input__background'
                     }
                  >
                     <input
                        type="text"
                        placeholder="Code RNA Ex: W123456789"
                        {...register('rna_code', { required: true })}
                     />
                  </div>
                  <div
                     className={`m-input m-input__background ${errors.registration_date ? 'm-input__error' : ''} ${watchDateAsso ? styles.dateVisible : ''}`}
                  >
                     <input
                        type="date"
                        {...register('registration_date', { required: true })}
                     />
                     <span className="m-input__suffix">
                        (création de l'association)
                     </span>
                  </div>
                  <div
                     className={
                        errors.certification_file
                           ? 'm-input m-input__background m-input__error'
                           : 'm-input m-input__background'
                     }
                  >
                     <input
                        type="file"
                        accept=".pdf"
                        readOnly
                        onChange={handleUploadFile}
                        style={{ opacity: watchFileUpload ? 1 : 0 }}
                     />
                     <button type="button" className="m-input__suffix">
                        <FileArrowDown weight="bold" />
                     </button>
                     {watchFileUpload ? null : (
                        <span className={styles.textFile}>
                           Importez votre récépissé de déclaration (.pdf)
                        </span>
                     )}
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
