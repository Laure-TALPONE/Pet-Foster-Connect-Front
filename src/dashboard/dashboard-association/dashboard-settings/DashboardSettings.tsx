'use client';

import sendRequest from '@/globals/hooks/sendRequest';
import styles from './DashboardSettings.module.scss';
import { useUser } from '@/globals/utils/UserContext';

const DashboardSettings = () => {
   const user = useUser().user;

   const handleDeleteAccount = async () => {
      const result = await sendRequest(
         'DELETE',
         `/api/user/delete/${user.uuid}`
      );

      console.log(result);

      if (result) {
         console.log("L'utilisateur a bien été supprimé.");
         window.location.href = '/accueil';
      }

      if (!result) {
         console.log("Erreur lors de la suppression de l'utilisateur.");
      }
   };

   return (
      <section className={styles.settings}>
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
