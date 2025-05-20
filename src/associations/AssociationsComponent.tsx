'use client';
import styles from './AssociationsComponent.module.scss';
import ListAssociations from './list-associations/ListAssociations';

type Props = {
   associations?: any;
};

const AssociationsComponent = ({ associations }: Props) => {
   // console.log(associations);

   return (
      <section className="container">
         <div className={styles.association}>
            <div className={styles.top}>
               <h2 className={styles.title}>
                  Découvrez les associations de protection animale proches de
                  chez vous
               </h2>
               <p className={styles.text}>
                  Vous souhaitez devenir famille d’accueil pour un animal dans
                  le besoin ? Retrouvez ici une sélection d’associations
                  engagées dans la protection animale. Ces structures
                  recherchent régulièrement des foyers temporaires pour
                  accueillir chiens, chats et autres compagnons en attente
                  d’adoption. Offrir un toit, même provisoire, c’est déjà
                  changer une vie !
               </p>
            </div>
            <ListAssociations associations={associations} />
         </div>
      </section>
   );
};

export default AssociationsComponent;
