'use client';

import styles from './DashboardPetsList.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { associations } from '@/globals/constants/data';
import Image from 'next/image';
import { PencilSimple, Plus } from '@phosphor-icons/react';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import ModalPetForm from '../modal-pet-form/ModalPetForm';
import { useUser } from '@/globals/utils/UserContext';
import ModalRequestApi from '@/globals/components/modal-request-api/ModalRequestApi';

type Props = {
   animals: any;
   species: any;
};

const DashboardPetsList = ({ animals, species }: Props) => {
   const [isDesktop, setIsDesktop] = useState<boolean>(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const [isUpdating, setIsUpdating] = useState<boolean>(false);
   const [animalSelected, setAnimalSelected] = useState<any>();
   const [animalsList, setAnimalsList] = useState(animals);
   const [searchPet, setSearchPet] = useState('');
   const [openModalResponse, setOpenModalResponse] = useState<boolean>(false);
   const [textResponseModal, setTextResponseModal] = useState<string>('');
   const [color, setColor] = useState('');

   useEffect(() => {
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 600);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const handleOpenModal = useCallback((update: boolean, pet: any) => {
      setIsUpdating(update);
      setModalIsOpen(true);
      setAnimalSelected(pet);
   }, []);

   const handleCloseModal = useCallback(() => {
      setModalIsOpen(false);
   }, []);

   const handleCloseModaleResponse = useCallback(() => {
      setOpenModalResponse(false);
   }, []);

   const handleUpdateListAnimals = useCallback(
      (animal: any, action: string) => {
         setOpenModalResponse(true);
         if (animal && action === 'create') {
            // met à jour la liste des animaux en ajoutant le nouvel animal
            setAnimalsList([...animalsList, animal]);
            setTextResponseModal(`${animal.name} a bien été ajouté(e).`);
            setColor('#55B048');
         } else if (animal && action === 'update') {
            // met à jour l'animal dans la liste
            const updatedAnimalsList = animalsList.map((item: any) =>
               item.uuid === animal.uuid ? animal : item
            );
            setAnimalsList(updatedAnimalsList);
            setTextResponseModal(
               `Les informations de ${animal.name} ont bien été modifiées.`
            );
            setColor('#55B048');
         } else if (animal && action === 'delete') {
            // supprime l'animal via son uuid de la liste
            const updatedAnimalsList = animalsList.filter(
               (item: any) => item.uuid !== animal.uuid
            );
            setAnimalsList(updatedAnimalsList);
            setTextResponseModal(`${animal.name} a bien été supprimé(e).`);
            setColor('#55B048');
         } else {
            setTextResponseModal('Une erreur est survenue.');
            setColor('#DD4F3A');
         }
      },
      [animalsList, setTextResponseModal, setColor, setOpenModalResponse]
   );

   const renderStatus = (pet: any) => {
      if (pet.is_available) {
         return (
            <span
               className={styles.status}
               style={{ color: '#FFF', background: '#F77748' }}
            >
               {isDesktop ? 'en attente' : ''}
            </span>
         );
      } else {
         return (
            <span
               className={styles.status}
               style={{ color: '#000', background: '#82CCD5' }}
            >
               {isDesktop ? 'en famille' : ''}
            </span>
         );
      }
   };

   const renderListPets = useMemo(() => {
      let filteredAnimals;

      if (searchPet) {
         filteredAnimals = animalsList.filter((item: any) =>
            item?.name.toLowerCase().startsWith(searchPet.toLowerCase())
         );
      } else {
         filteredAnimals = animalsList;
      }

      return filteredAnimals.map((pet: any, index: number) => {
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
               <div className={styles.left}>
                  <p className={styles.name}>{pet.name}</p>
                  <p>{pet.species.name}</p>
               </div>
               <div className={styles.right}>
                  {renderStatus(pet)}
                  {isDesktop ? (
                     <button
                        type="button"
                        className="m-button--square"
                        onClick={() => handleOpenModal(true, pet)}
                     >
                        Modifier
                     </button>
                  ) : (
                     <button
                        type="button"
                        className={styles.edit}
                        onClick={() => handleOpenModal(true, pet)}
                     >
                        <PencilSimple />
                     </button>
                  )}
               </div>
            </li>
         );
      });
   }, [associations, isDesktop, handleOpenModal, animalsList, renderStatus]);

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
                     animal={animalSelected}
                     species={species}
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
      animalSelected,
   ]);

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
      <section className={styles.petsList}>
         <div className={styles.content}>
            <section className={styles.search}>
               <div className="m-input m-input__background">
                  <input
                     type="text"
                     placeholder="Rechercher un animal"
                     onChange={(e) => setSearchPet(e.target.value)}
                  />
               </div>
               {renderButtons}
            </section>
            <ul className={styles.list}>{renderListPets}</ul>
         </div>
         {renderModal}
         {renderModalResponse}
      </section>
   );
};

export default DashboardPetsList;
