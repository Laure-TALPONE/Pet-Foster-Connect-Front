'use client';
import Image from 'next/image';
import styles from './ArticleInformation.module.scss';

const ArticleInformation = () => {
   return (
      <div className={styles.article}>
         <div className={styles.content}>
            <Image
               className={styles.picture}
               src={'/images/kitty.webp'}
               alt="pets"
               width={504}
               height={393}
            />
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
