'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './DashboardRequests.module.scss';
import Image from 'next/image';
import { Check, User, X } from '@phosphor-icons/react';
import { foster_families } from '@/globals/constants/data';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import ModalHomeRequest from '../modal-home-request/ModalHomeRequest';
import ModalRequestApi from '@/globals/components/modal-request-api/ModalRequestApi';

type Props = {
   animals: any;
};

const DashboardRequests = ({ animals }: Props) => {
   const [isDesktop, setIsDesktop] = useState<boolean>(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const [adoptionsRequest, setAdoptionsRequest] = useState([]);
   const [adoption, setAdoption] = useState<any>();
   const [searchFamily, setSearchFamily] = useState('');
   const [openModalResponse, setOpenModalResponse] = useState<boolean>(false);
   const [textResponseModal, setTextResponseModal] = useState<string>('');
   const [color, setColor] = useState('');

   const handleOpenModal = useCallback((adopt: any) => {
      setModalIsOpen(true);
      setAdoption(adopt);
   }, []);

   const handleCloseModal = useCallback(() => {
      setModalIsOpen(false);
   }, []);

   const handleCloseModaleResponse = useCallback(() => {
      setOpenModalResponse(false);
   }, []);

   const handleSearchFamily = (search: string) => {
      setSearchFamily(search);
   };

   const handleUpdateRequest = useCallback(
      (response: string, status: string) => {
         setOpenModalResponse(true);
         if (response === 'success') {
            // Met à jour le status de chaque requête de la liste
            setAdoptionsRequest((prevList: any) =>
               prevList.map((item: any) =>
                  item.uuid === adoption?.uuid ? { ...item, status } : item
               )
            );

            setTextResponseModal('Votre décision a bien été pris en compte.');
            setColor('#55B048');
         }

         if (response === 'echec') {
            setTextResponseModal('Une erreur est survenue.');
            setColor('#DD4F3A');
         }
      },
      [adoption?.uuid]
   );

   useEffect(() => {
      const handleResize = () => {
         setIsDesktop(window.innerWidth >= 600);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
      if (!animals || animals.length === 0) return;

      const adoptions = animals.flatMap((pet: any, index: number) => {
         return pet.adoptionRequests;
      });
      setAdoptionsRequest(adoptions);
   }, [animals]);

   const renderStatus = (status: string) => {
      if (status === 'pending') return null;

      if (status === 'accepted') {
         return (
            <span className={styles.accepted}>
               <Check weight="bold" />
            </span>
         );
      }

      if (status === 'refused') {
         return (
            <span className={styles.refused}>
               <X weight="bold" />
            </span>
         );
      }
   };

   const renderListPets = useMemo(() => {
      if (!adoptionsRequest || adoptionsRequest.length === 0) return;

      let filteredFamily;

      if (searchFamily) {
         filteredFamily = adoptionsRequest.filter((item: any) =>
            item?.lastname.toLowerCase().startsWith(searchFamily.toLowerCase())
         );
      } else {
         filteredFamily = adoptionsRequest;
      }

      return filteredFamily.map((adoption: any, index: number) => {
         return (
            <li className={styles.item} key={index}>
               <div className={styles.infos}>
                  <div className={styles.picture}>
                     {adoption.fosterCare.image ? (
                        <img
                           src={adoption.fosterCare.image}
                           alt="foster-family-picture"
                           className={styles.familyPicture}
                        />
                     ) : (
                        <User />
                     )}
                  </div>
                  <p className={styles.name}>
                     Famille {adoption.fosterCare.name}
                  </p>
                  <div className={styles.infosRequest}>
                     <p>
                        <span>Nom :</span> <span>{adoption.animal.name}</span>
                     </p>
                     <p>
                        <span>Espèce :</span>
                        <span>{adoption.animal.species.name}</span>
                     </p>
                     {renderStatus(adoption.status)}
                  </div>
               </div>
               <button
                  type="button"
                  className="m-button"
                  onClick={() => handleOpenModal(adoption)}
               >
                  Voir la demande
               </button>
            </li>
         );
      });
   }, [isDesktop, handleOpenModal, adoptionsRequest, searchFamily]);

   const renderModal = useMemo(() => {
      if (modalIsOpen) {
         return (
            <ModalComponent
               onClose={handleCloseModal}
               children={
                  <ModalHomeRequest
                     adoptionRequest={adoption}
                     onSuccess={handleUpdateRequest}
                     onClose={handleCloseModal}
                  />
               }
            />
         );
      }
   }, [modalIsOpen, handleUpdateRequest, handleCloseModal, adoption]);

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
      <section className={styles.request}>
         <div className={styles.content}>
            <section className={styles.search}>
               <div className="m-input m-input__background">
                  <input
                     type="text"
                     placeholder="Rechercher une famille"
                     onChange={(e) => handleSearchFamily(e.target.value)}
                  />
               </div>
            </section>
            <ul className={styles.list}>{renderListPets}</ul>
         </div>
         {renderModal}
         {renderModalResponse}
      </section>
   );
};

export default DashboardRequests;
