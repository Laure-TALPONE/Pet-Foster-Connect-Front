'use client';

import { User, XCircle } from '@phosphor-icons/react';
import styles from './ModalComponent.module.scss';

type Props = {
   onClose: any;
};

const ModalComponent = ({ onClose }: Props) => {
   const handleCloseModal = () => {
      onClose(false);
   };

   return (
      <div className={styles.modal}>
         <div className={styles.wrapper}>
            <section className={styles.close}>
               <button
                  type="button"
                  className={styles.btnClose}
                  onClick={handleCloseModal}
               >
                  <XCircle />
               </button>
            </section>
            <div className={styles.content}>
               <section className={styles.top}>
                  <div className={styles.name}>
                     <div className={styles.picture}>
                        <User />
                     </div>
                     <h2>La famille Dupont</h2>
                  </div>
                  <div className={styles.infoPet}>
                     <p>
                        <span>Nom :</span> <span>Bobby</span>
                     </p>
                     <p>
                        <span>Espèce :</span> <span>Chien</span>
                     </p>
                  </div>
               </section>

               <section className={styles.infosRequest}>
                  <h2>La demande</h2>
                  <div className={styles.infosFamily}>
                     <p>Mr André Dupont</p>
                     <p>andredupont@gmail.com</p>
                     <p>123 Rue des Pattes Heureuses, 69001 Lyon, France</p>
                     <p>01 23 45 67 89</p>
                  </div>
                  <div className={styles.lifestyle}>
                     <div className={styles.item}>
                        <p>Je possède un animal :</p>
                        <span>Chien</span>
                        <span>Chat</span>
                     </div>
                     <div className={styles.item}>
                        <p>Avez vous des enfants :</p>
                        <span>Oui</span>
                     </div>
                     <div className={styles.item}>
                        <p>Votre Famille :</p>
                        <span>Aventureux</span>
                        <span>Urbain</span>
                     </div>
                  </div>
               </section>

               <section className={styles.motivations}>
                  <h2>Motivation :</h2>
                  <p className={styles.text}>
                     Depuis toujours, j’ai eu un profond amour pour les animaux
                     et l’envie de m’engager pour leur bien-être. Devenir
                     famille d’accueil est pour moi une façon concrète d’aider
                     ceux qui en ont le plus besoin, en leur offrant un foyer
                     chaleureux et sécurisé le temps qu’ils trouvent une
                     adoption définitive. Je souhaite apporter à un animal de la
                     stabilité, de l’affection et de l’attention, tout en
                     contribuant à la belle mission des associations de
                     protection animale. Accueillir temporairement un compagnon
                     est une expérience enrichissante, à la fois pour lui et
                     pour moi. 💙
                  </p>
               </section>

               <section className={styles.response}>
                  <h3>Réponse à la demande* :</h3>
                  <div className="m-input m-input__background">
                     <textarea />
                  </div>
                  <div className={styles.btnResponse}>
                     <button type="button" className="m-button">
                        Valider de la demande
                     </button>
                     <button type="button" className=" m-button--square">
                        Refuser de la demande
                     </button>
                  </div>
               </section>
            </div>
         </div>
      </div>
   );
};

export default ModalComponent;
