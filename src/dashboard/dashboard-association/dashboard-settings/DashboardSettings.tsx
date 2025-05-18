'use client';

import sendRequest from '@/globals/hooks/sendRequest';
import styles from './DashboardSettings.module.scss';
import { useUser } from '@/globals/utils/UserContext';
import { useCallback, useMemo, useState } from 'react';
import ModalComponent from '@/globals/components/modal/ModalComponent';
import ModalRequestApi from '@/globals/components/modal-request-api/ModalRequestApi';

const DashboardSettings = () => {
   const user = useUser().user;
   const [openModalResponse, setOpenModalResponse] = useState<boolean>(false);
   const [textResponseModal, setTextResponseModal] = useState<string>('');
   const [color, setColor] = useState('');

   const handleCloseModaleResponse = useCallback(() => {
      setOpenModalResponse(false);
   }, []);

   const handleDeleteAccount = async () => {
      const result = await sendRequest(
         'DELETE',
         `/api/user/delete/${user.uuid}`
      );

      console.log(result);
      setOpenModalResponse(true);

      if (result) {
         console.log("L'utilisateur a bien été supprimé.");
         setTextResponseModal(
            "Votre compte a bien été supprimé. Vous allez être redirigé vers la page d'accueil"
         );
         setColor('#55B048');
         setTimeout(() => {
            window.location.href = '/accueil';
         }, 10000);
      }

      if (!result) {
         console.log("Erreur lors de la suppression de l'utilisateur.");
         setTextResponseModal("Une erreur s'est produite.");
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
      <section className={styles.settings}>
         {renderModalResponse}
         <button
            type="button"
            className="m-button"
            onClick={handleDeleteAccount}
         >
            Supprimer mon compte
         </button>
      </section>
   );
};

export default DashboardSettings;
