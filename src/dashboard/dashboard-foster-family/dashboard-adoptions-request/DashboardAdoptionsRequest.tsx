'use client';

import styles from './DashboardAdoptionsRequest.module.scss';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { PawPrint } from '@phosphor-icons/react';
import ModaleAdoptionRequest from '../modal-adoption-request/ModaleAdoptionRequest';

type Props = {
   adoptionsRequest?: any;
};

const DashboardAdoptionsRequest = ({ adoptionsRequest }: Props) => {
   const [isDesktop, setIsDesktop] = useState<boolean>(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
   const [adoption, setAdoption] = useState();
   const [searchAdoption, setSearchAdoption] = useState('');

   const handleOpenModal = useCallback((adopt: any) => {
      setModalIsOpen(true);
      setAdoption(adopt);
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

   //    useEffect(() => {
   //       if (!animals || animals.length === 0) return;

   //       const adoptions = animals.flatMap((pet: any, index: number) => {
   //          return pet.adoptionRequests;
   //       });
   //       setAdoptionsRequest(adoptions);
   //    }, [animals]);

   const renderListAdoptionsRequest = useMemo(() => {
      if (!adoptionsRequest || adoptionsRequest.length === 0) return;

      let filteredAdoptions;

      if (searchAdoption) {
         filteredAdoptions = adoptionsRequest.filter((item: any) =>
            item?.animal.name
               .toLowerCase()
               .startsWith(searchAdoption.toLowerCase())
         );
      } else {
         filteredAdoptions = adoptionsRequest;
      }

      return filteredAdoptions.map((adoption: any, index: number) => {
         return (
            <li className={styles.item} key={index}>
               <div className={styles.infos}>
                  <div className={styles.picture}>
                     {adoption.animal.image ? (
                        <img
                           src={adoption.animal.image}
                           alt="foster-family-picture"
                           className={styles.familyPicture}
                        />
                     ) : (
                        <PawPrint />
                     )}
                  </div>
                  <div className={styles.infosRequest}>
                     <div className={styles.infosAnimal}>
                        <p>
                           <span>Nom :</span>{' '}
                           <span>{adoption.animal.name}</span>
                        </p>
                        <p>
                           <span>Espèce :</span>
                           <span>{adoption.animal.species.name}</span>
                        </p>
                     </div>
                     <p className={styles.name}>
                        Association {adoption.animal.organization.name}
                     </p>
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
   }, [isDesktop, handleOpenModal, adoptionsRequest, searchAdoption]);

   const renderModal = useMemo(() => {
      if (modalIsOpen) {
         return (
            <ModalComponent
               onClose={handleCloseModal}
               children={<ModaleAdoptionRequest adoption={adoption} />}
            />
         );
      }
   }, [modalIsOpen]);

   return (
      <section className={styles.adoptions}>
         <div className={styles.content}>
            <section className={styles.search}>
               <div className="m-input m-input__background">
                  <input
                     type="text"
                     placeholder="Rechercher le nom d'un animal"
                     onChange={(e) => setSearchAdoption(e.target.value)}
                  />
               </div>
            </section>
            <ul className={styles.list}>{renderListAdoptionsRequest}</ul>
         </div>
         {renderModal}
      </section>
   );
};

export default DashboardAdoptionsRequest;
