'use client';

import styles from './DashboardSettings.module.scss';
import { useRouter } from 'next/navigation';

const DashboardSettings = () => {
   const router = useRouter();

   const handleDeleteAccount = async () => {
      //   try {
      //      const response = await fetch('/api/auth/delete-account', {
      //         method: 'DELETE',
      //         headers: {
      //            'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(user),
      //      });
      //      const result = await response.json();
      //      if (!response.ok) {
      //         throw new Error(result.message || 'Une erreur est survenue.');
      //      }
      //      console.log('Compte supprimé avec succès :', result);
      //      router.push('/accueil');
      //   } catch (error) {
      //      console.error('Erreur lors de la suppression du compte :', error);
      //   }
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
