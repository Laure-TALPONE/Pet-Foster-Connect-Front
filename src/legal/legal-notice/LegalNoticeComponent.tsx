'use client';

import { PawPrint } from '@phosphor-icons/react';
import styles from './LegalNoticeComponent.module.scss';

const LegalNoticeComponent = () => {
   return (
      <section className="container">
         <div className={styles.content}>
            <h2 className={styles.title}>Les Mentions légales</h2>
            <div>
               <h3 className={styles.sectiontitle}>Éditeur du site</h3>
               <p>
                  <em className={styles.importantElement}>
                     Pet Foster Connect
                  </em>
               </p>
               <p>
                  Plateforme de mise en relation entre associations de
                  protection animale et familles d’accueil.
               </p>
               <p>
                  <em className={styles.importantElement}>
                     Email : contact@petfosterconnect.fr
                  </em>
               </p>
               <p>
                  Responsable de la publication : [Nom ou fonction du
                  responsable]
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Hébergeur</h3>
               <p>
                  <em className={styles.importantElement}>
                     [Nom de l’hébergeur]
                  </em>
               </p>
               <p>Adresse : [Adresse de l’hébergeur]</p>
               <p>Téléphone : [Téléphone de l’hébergeur]</p>
               <p>Site web : [site de l’hébergeur]</p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Propriété intellectuelle</h3>
               <p>
                  L’ensemble des éléments présents sur le site{' '}
                  <em className={styles.importantElement}>
                     Pet Foster Connect
                  </em>
                  – notamment les textes, images, logos, illustrations, vidéos,
                  et la charte graphique – constitue une œuvre protégée par les
                  lois en vigueur sur la propriété intellectuelle.
               </p>
               <br />
               <p>
                  Ces contenus sont la propriété exclusive de Pest Foster
                  Connect, sauf mention contraire. Toute reproduction,
                  représentation, modification, publication, transmission ou
                  exploitation, totale ou partielle, de ces éléments, par
                  quelque moyen que ce soit, est strictement interdite sans
                  l'autorisation écrite préalable de Pest Foster Connect.
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Données personnelles</h3>
               <p>
                  Les données personnelles collectées sur notre site sont
                  traitées dans le but de faciliter la mise en relation entre
                  les associations de protection animale et les familles
                  d’accueil.
               </p>
               <br />
               <p>
                  Ce traitement s’inscrit dans le cadre d’un usage strictement
                  défini, transparent et respectueux de la vie privée.
               </p>
               <br />
               <p>
                  Conformément au{' '}
                  <em className={styles.importantElement}>
                     Règlement Général sur la Protection des Données (RGPD)
                  </em>
                  , vous disposez de droits concernant vos informations
                  personnelles :
               </p>
               <ul>
                  <li><PawPrint size={12} weight="fill" color="var(--Orange)"/> Droit d’accès</li>
                  <li><PawPrint size={12} weight="fill" color="var(--Orange)"/> Droit de rectification</li>
                  <li><PawPrint size={12} weight="fill" color="var(--Orange)"/> Droit de suppression</li>
                  <li><PawPrint size={12} weight="fill" color="var(--Orange)"/> Droit d’opposition au traitement de vos données</li>
               </ul>
               <br />
               <p>
                  Vous pouvez exercer ces droits à tout moment en nous
                  contactant à l’adresse suivante :{' '}
                  <em className={styles.importantElement}>
                     contact@petfosterconnect.fr
                  </em>
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Cookies</h3>
               <p>
                  Lors de votre navigation sur notre site, des cookies peuvent
                  être déposés sur votre appareil (ordinateur, tablette ou
                  smartphone). Un cookie est un petit fichier texte envoyé par
                  notre serveur et stocké sur votre disque dur via votre
                  navigateur. Il ne permet pas de vous identifier
                  personnellement, mais sert à enregistrer des informations
                  relatives à votre navigation (pages consultées, date et heure
                  de consultation, etc.), afin d'améliorer votre expérience lors
                  de vos prochaines visites.
               </p>
               <br />
               <p>
                  Vous avez la possibilité de gérer ces cookies à tout moment.
                  Il vous suffit de configurer votre navigateur en accédant à
                  ses paramètres, généralement dans les sections « Options » ou
                  « Préférences ». Vous pouvez également supprimer les cookies
                  manuellement, un par un, en suivant les instructions propres à
                  votre navigateur ou au système d’exploitation que vous
                  utilisez.
               </p>
               <br />
               <p>
                  <em className={styles.importantElement}>
                     Pour en savoir plus, veuillez consulter notre politique
                     Cookies.
                  </em>
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Responsabilité</h3>
               <p>
                  Responsabilité Pet Foster Connect agit comme intermédiaire
                  entre les associations et les familles d’accueil. La
                  plateforme ne saurait être tenue responsable des éventuels
                  litiges survenant en dehors de son périmètre d’action.
               </p>
               <br />
               <p>
                  Pet Foster Connect se réserve le droit de modifier ou
                  d’actualiser cette notice d’information à tout moment et sans
                  préavis.
               </p>
               <br />
               <p>
                  <em className={styles.importantElement}>
                     Date de mise à jour : 08 avril 2025
                  </em>
               </p>
            </div>
         </div>
      </section>
   );
};

export default LegalNoticeComponent;
