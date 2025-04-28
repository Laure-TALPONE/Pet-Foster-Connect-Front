'use client';

import styles from './DashboardPetsList.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { associations } from '@/globals/constants/data';
import Image from 'next/image';
import { PencilSimple, Plus } from '@phosphor-icons/react';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import ModalPetForm from '../modal-pet-form/ModalPetForm';
import sendRequest from '@/globals/hooks/sendRequest';
import { useUser } from '@/globals/utils/UserContext';

const DashboardPetsList = () => {
   const [isDesktop, setIsDesktop] = useState<boolean>(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const [petsList, setPetsList] = useState();
   const user = useUser().user;
   const organizationId = user?.organizations[0].uuid;

   useEffect(() => {
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 600);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const handleOpenModal = useCallback(() => {
      setModalIsOpen(true);
   }, []);

   const handleCloseModal = useCallback(() => {
      setModalIsOpen(false);
   }, []);

   useEffect(() => {
      const fetchAnimals = async () => {
         const animalsResult = await sendRequest(
            'GET',
            `/api/animals/getByAssociation/?uuid=${organizationId}`
         );
         setPetsList(animalsResult);
         console.log(animalsResult, 'ici la liste des animaux');
         return animalsResult;
      };

      fetchAnimals();
   }, [organizationId]);

   const renderListPets = useMemo(() => {
      return associations[0].animals.map((pet: any, index: number) => {
         return (
            <li className={styles.petInfos} key={index}>
               <div className={styles.picture}>
                  <Image
                     src={'/images/home/kitty.webp'}
                     alt="pet-picture"
                     width={80}
                     height={80}
                  />
               </div>
               <p className={styles.name}>{pet.name}</p>
               <p>{pet.species}</p>
               {isDesktop ? (
                  <span>{pet.status}</span>
               ) : (
                  <span className={styles.status}></span>
               )}
               {isDesktop ? (
                  <button
                     type="button"
                     className="m-button--square"
                     onClick={handleOpenModal}
                  >
                     Modifier
                  </button>
               ) : (
                  <button
                     type="button"
                     className={styles.edit}
                     onClick={handleOpenModal}
                  >
                     <PencilSimple />
                  </button>
               )}
            </li>
         );
      });
   }, [associations, isDesktop, handleOpenModal]);

   const renderButtons = useMemo(() => {
      if (!isDesktop) {
         return (
            <button
               type="button"
               className="m-button"
               onClick={handleOpenModal}
            >
               Ajouter
            </button>
         );
      }

      return (
         <button type="button" className="m-button" onClick={handleOpenModal}>
            Ajouter un nouvel animal
         </button>
      );
   }, [isDesktop, handleOpenModal]);

   const renderModal = useMemo(() => {
      if (modalIsOpen) {
         return (
            <ModalComponent
               onClose={handleCloseModal}
               children={<ModalPetForm onClose={handleCloseModal} />}
            />
         );
      }
   }, [modalIsOpen]);

   return (
      <section className={styles.petsList}>
         <div className={styles.content}>
            <section className={styles.search}>
               <div className="m-input m-input__background">
                  <input type="text" placeholder="Rechercher un animal" />
               </div>
               {renderButtons}
            </section>
            <ul className={styles.list}>{renderListPets}</ul>
         </div>
         {renderModal}
      </section>
   );
};

export default DashboardPetsList;
