'use client';

import Image from 'next/image';
import styles from './SubcriptionAssociation.module.scss';
import {
   DownloadSimple,
   Eye,
   EyeClosed,
   FileArrowDown,
   UploadSimple,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useCallback, useMemo, useState } from 'react';

const SubcriptionAssociation = () => {
   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
   const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
   const [fileUpload, setFileUpload] = useState();

   const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

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

   const onSubmit = (data: any) => {
      const newData = {
         email: data.email,
         password: data.password,
         name: data.name,
         address: data.address,
         city: data.city,
         postcode: data.postcode,
         phone: data.phone,
         description: data.description,
         rna_code: data.rna_code,
      };

      console.log(newData, 'ici les datas');
   };

   const handleUploadFile = (e: any) => {
      const file = e.target.value;
      setFileUpload(file);
      console.log(file);
   };

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

            <form className={styles.form}>
               <h2>
                  Inscrivez votre association ici pour accéder à un réseau de
                  familles d’accueil
               </h2>
               <div className={styles.inputs}>
                  <div className="m-input m-input__background">
                     <input
                        type="text"
                        placeholder="E-mail de connexion"
                        {...register('email')}
                     />
                  </div>
                  <div className="m-input m-input__background">
                     <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Mot de passe"
                        {...register('password')}
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
                  <div className="m-input m-input__background">
                     <input
                        type={confirmVisible ? 'text' : 'password'}
                        placeholder="Confirmer le mot de passe"
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
                  <div className="m-input m-input__background">
                     <input
                        type="text"
                        placeholder="Nom de l'association"
                        {...register('name')}
                     />
                  </div>
                  <div className="m-input m-input__background">
                     <input
                        type="text"
                        placeholder="Adresse"
                        {...register('address')}
                     />
                  </div>
                  <div className="m-input m-input__background">
                     <input
                        type="text"
                        placeholder="Code postal"
                        {...register('postcode')}
                     />
                  </div>
                  <div className="m-input m-input__background">
                     <input
                        type="text"
                        placeholder="Ville"
                        {...register('city')}
                     />
                  </div>
                  <div className="m-input m-input__background">
                     <input
                        type="text"
                        placeholder="Téléphone"
                        {...register('phone')}
                     />
                  </div>
                  <div className="m-input m-input__background">
                     <input
                        type="text"
                        placeholder="Code RNA Ex: W123456789"
                        {...register('rna_code')}
                     />
                  </div>
                  <div className="m-input m-input__background">
                     <input
                        type="file"
                        readOnly
                        onChange={handleUploadFile}
                        style={{ opacity: fileUpload ? 1 : 0 }}
                     />
                     <button type="button" className="m-input__suffix">
                        <FileArrowDown weight="bold" />
                     </button>
                     {fileUpload ? null : (
                        <span className={styles.textFile}>
                           Importez votre récépissé de déclaration
                        </span>
                     )}
                  </div>
                  <div className="m-input m-input__background">
                     <textarea
                        placeholder="Description"
                        {...register('description')}
                     />
                  </div>
               </div>
               <button
                  type="button"
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
