'use client';

import styles from './DashboardPetsList.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { associations } from '@/globals/constants/data';
import Image from 'next/image';
import { PencilSimple, Plus } from '@phosphor-icons/react';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import ModalPetForm from '../modal-pet-form/ModalPetForm';

type Props = {
   animals: any;
};

const DashboardPetsList = ({ animals }: Props) => {
   const [isDesktop, setIsDesktop] = useState<boolean>(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const [isUpdating, setIsUpdating] = useState<boolean>(false);
   const [petId, setPetId] = useState<string>('');
   const [animalsList, setAnimalsList] = useState(animals);

   useEffect(() => {
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 600);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const handleOpenModal = useCallback((update: boolean, petId: string) => {
      setIsUpdating(update);
      setModalIsOpen(true);
      setPetId(petId);
   }, []);

   const handleCloseModal = useCallback(() => {
      setModalIsOpen(false);
   }, []);

   const handleUpdateListAnimals = useCallback(
      (animal: any, action: string) => {
         if (animal && action === 'update') {
            // met à jour la liste des animaux en ajoutant le nouvel animal
            setAnimalsList([...animalsList, animal]);
         } else if (animal && action === 'delete') {
            // supprime l'animal via son uuid de la liste
            const updatedAnimalsList = animalsList.filter(
               (item: any) => item.uuid !== animal.uuid
            );
            setAnimalsList(updatedAnimalsList);
         }
      },
      [animalsList]
   );

   const renderListPets = useMemo(() => {
      return animalsList.map((pet: any, index: number) => {
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
               <p>{pet.species.name}</p>
               {isDesktop ? (
                  <span>{pet.is_available ? 'en attente' : ''}</span>
               ) : (
                  <span className={styles.status}></span>
               )}
               {isDesktop ? (
                  <button
                     type="button"
                     className="m-button--square"
                     onClick={() => handleOpenModal(true, pet.uuid)}
                  >
                     Modifier
                  </button>
               ) : (
                  <button
                     type="button"
                     className={styles.edit}
                     onClick={() => handleOpenModal(true, pet.uuid)}
                  >
                     <PencilSimple />
                  </button>
               )}
            </li>
         );
      });
   }, [associations, isDesktop, handleOpenModal, animalsList]);

   const renderButtons = useMemo(() => {
      if (!isDesktop) {
         return (
            <button
               type="button"
               className="m-button"
               onClick={() => handleOpenModal(false)}
            >
               Ajouter
            </button>
         );
      }

      return (
         <button
            type="button"
            className="m-button"
            onClick={() => handleOpenModal(false)}
         >
            Ajouter un nouvel animal
         </button>
      );
   }, [isDesktop, handleOpenModal]);

   const renderModal = useMemo(() => {
      if (modalIsOpen) {
         return (
            <ModalComponent
               onClose={handleCloseModal}
               children={
                  <ModalPetForm
                     onClose={handleCloseModal}
                     onSuccess={handleUpdateListAnimals}
                     update={isUpdating}
                     petId={petId}
                  />
               }
            />
         );
      }
   }, [
      modalIsOpen,
      handleUpdateListAnimals,
      handleCloseModal,
      isUpdating,
      petId,
   ]);

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
