'use client';
import Image from 'next/image';
import styles from './ArticleInformation.module.scss';

const ArticleInformation = () => {
   return (
      <div className={styles.article}>
         <div className={styles.custom}>
            <svg
               data-name="Layer 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1200 120"
               preserveAspectRatio="none"
            >
               <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className={styles.shapeFill}
               ></path>
            </svg>
         </div>
         <div className={styles.content}>
            <div className={styles.picture}>
               <Image
                  src={'/images/kitty.webp'}
                  alt="pets"
                  width={504}
                  height={393}
               />
            </div>
            <div className={styles.text}>
               <h2 className={styles.title}>Offrons-leur une seconde chance</h2>
               <p className={styles.details}>
                  Chaque année, des milliers d’animaux se retrouvent sans foyer,
                  victimes d’abandon ou de situations d’urgence. Grâce aux
                  familles d’accueil, ces compagnons retrouvent un environnement
                  chaleureux en attendant une adoption définitive. Chiens, chats
                  et autres animaux ont chacun leur histoire, mais tous
                  partagent un même besoin : amour et sécurité. Un simple
                  accueil peut faire toute la différence, leur offrant le temps
                  de se rétablir et de trouver une famille pour la vie. En
                  rejoignant notre réseau, vous participez activement à leur
                  bien-être et leur donnez une seconde chance. Parce qu’ils
                  méritent tous un foyer !
               </p>
               <button type="button" className="m-button">
                  Découvrir nos animaux
               </button>
            </div>
         </div>
      </div>
   );
};

export default ArticleInformation;
