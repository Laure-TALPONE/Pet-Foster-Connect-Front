'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './DashboardRequests.module.scss';
import Image from 'next/image';
import { User } from '@phosphor-icons/react';
import { foster_families } from '@/globals/constants/data';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import ModalHomeRequest from '../modal-home-request/ModalHomeRequest';

type Props = {
   animals: any;
};

const DashboardRequests = ({ animals }: Props) => {
   const [isDesktop, setIsDesktop] = useState<boolean>(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const [adoptionsRequest, setAdoptionsRequest] = useState([]);

   const handleOpenModal = useCallback(() => {
      setModalIsOpen(true);
   }, []);

   const handleCloseModal = useCallback(() => {
      setModalIsOpen(false);
   }, []);

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
   console.log(adoptionsRequest);

   const renderListPets = useMemo(() => {
      if (!adoptionsRequest || adoptionsRequest.length === 0) return;

      return adoptionsRequest.map((adoption: any, index: number) => {
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
                        <span>Espèce :</span>{' '}
                        <span>{adoption.animal.species.name}</span>
                     </p>
                  </div>
               </div>
               <button
                  type="button"
                  className="m-button"
                  onClick={handleOpenModal}
               >
                  Voir la demande
               </button>
            </li>
         );
      });
   }, [isDesktop, handleOpenModal]);

   const renderModal = useMemo(() => {
      if (modalIsOpen) {
         return (
            <ModalComponent
               onClose={handleCloseModal}
               children={<ModalHomeRequest />}
            />
         );
      }
   }, [modalIsOpen]);

   return (
      <section className={styles.request}>
         <div className={styles.content}>
            <section className={styles.search}>
               <div className="m-input m-input__background">
                  <input type="text" placeholder="Rechercher une famille" />
               </div>
            </section>
            <ul className={styles.list}>{renderListPets}</ul>
         </div>
         {renderModal}
      </section>
   );
};

export default DashboardRequests;
