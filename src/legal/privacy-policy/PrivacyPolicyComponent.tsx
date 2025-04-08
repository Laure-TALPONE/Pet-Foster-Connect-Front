'use client';

import { PawPrint } from '@phosphor-icons/react';
import Link from 'next/link';
import styles from './PrivacyPolicyComponent.module.scss';

const PrivacyPolicyComponent = () => {
   return (
      <section className="container">
         <div className={styles.content}>
            <h2 className={styles.title}>Politique de Confidentialité</h2>
            <div>
               <h3 className={styles.sectiontitle}>Introduction</h3>
               <p>
                  La protection de vos données personnelles est une priorité
                  pour{' '}
                  <em className={styles.importantElement}>
                     {' '}
                     Pet Foster Connect
                  </em>
                  . Cette politique de confidentialité a pour objectif de vous
                  informer sur la manière dont nous collectons, utilisons et
                  protégeons vos informations personnelles lorsque vous utilisez
                  notre plateforme.​
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>
                  Responsable du Traitement
               </h3>
               <p>
                  Le responsable du traitement des données personnelles
                  collectées sur le site Pet Foster Connect est :​
                  <br />
                  <em className={styles.importantElement}>
                     {' '}
                     Email : contact@petfosterconnect.fr​
                  </em>
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Données Collectées</h3>
               <p>
                  Dans le cadre de l'utilisation de notre plateforme, nous
                  pouvons collecter les données suivantes :​
               </p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>
                        Informations d'identification
                     </em>{' '}
                     : nom, prénom, adresse email, adresse postale, numéro de
                     téléphone.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>
                        Informations de connexion
                     </em>{' '}
                     : adresse IP, type de navigateur, pages visitées, durée de
                     la visite.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>
                        Informations professionnelles
                     </em>{' '}
                     : si vous représentez une association, nom, adresse email,
                     adresse postale, numéro de téléphone de l’association. ​
                  </li>
               </ul>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Finalités du Traitement</h3>
               <p>
                  Les données collectées sont utilisées pour les finalités
                  suivantes :​
               </p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Mise en relation entre familles d'accueil et associations
                     de protection animale.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Gestion des comptes utilisateurs et authentification.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Envoi de communications relatives à l'utilisation de la
                     plateforme.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Amélioration de nos services et de l'expérience
                     utilisateur.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Respect de nos obligations légales et réglementaires.​
                  </li>
               </ul>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>
                  Base Légale du Traitement
               </h3>
               <p>
                  Le traitement de vos données personnelles repose sur les bases
                  légales suivantes
               </p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>
                        Exécution d'un contrat
                     </em>{' '}
                     : pour la fourniture des services de mise en relation
                     proposés par la plateforme.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>Consentement</em> :
                     pour l'envoi de communications électroniques.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>
                        Intérêt légitime
                     </em>{' '}
                     : pour l'amélioration de nos services et la prévention de
                     la fraude.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>
                        Obligations légales
                     </em>{' '}
                     : pour répondre à nos obligations légales et
                     réglementaires.​
                  </li>
               </ul>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>
                  Destinataires des Données
               </h3>
               <p>
                  Vos données personnelles sont destinées aux services internes
                  de{' '}
                  <em className={styles.importantElement}>
                     Pet Foster Connect
                  </em>{' '}
                  et peuvent être partagées avec les destinataires suivants :​
               </p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Les associations de protection animale inscrites sur notre
                     plateforme, dans le cadre de la mise en relation.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Les prestataires techniques et sous-traitants, pour les
                     besoins stricts de l'exécution des services.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Les autorités administratives ou judiciaires, lorsque cela
                     est requis par la loi.​
                  </li>
               </ul>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Durée de Conservation</h3>
               <p>
                  Vos données personnelles sont conservées pour une durée
                  n'excédant pas celle nécessaire aux finalités pour lesquelles
                  elles sont collectées, soit :​
               </p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>
                        Données relatives à votre compte
                     </em>{' '}
                     : jusqu'à la suppression de votre compte ou après une
                     période d'inactivité de 2 ans.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>
                        Données de navigation
                     </em>{' '}
                     : 13 mois maximum.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     <em className={styles.importantElement}>
                        Données nécessaires au respect d'obligations légales
                     </em>{' '}
                     : conformément aux durées de conservation légales en
                     vigueur.
                  </li>
               </ul>
               <br />
               <p>
                  <em className={styles.importantElement}>
                     Pour en savoir plus, veuillez consulter notre{' '}
                     <Link href="/cookies" className={styles.link}>
                        politique Cookies
                     </Link>
                  </em>
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Sécurité des Données</h3>
               <p>
                  Nous mettons en œuvre des mesures techniques et
                  organisationnelles appropriées pour assurer la sécurité et la
                  confidentialité de vos données personnelles, et notamment pour
                  empêcher qu'elles soient déformées, endommagées, ou que des
                  tiers non autorisés y aient accès.​
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Vos Droits</h3>
               <p>
                  Conformément à la réglementation applicable, vous disposez des
                  droits suivants concernant vos données personnelles :​
               </p>
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Droit d'accès : obtenir confirmation que vos données sont
                     traitées et en obtenir une copie.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Droit de rectification : demander la modification de vos
                     données inexactes ou incomplètes.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Droit à l'effacement : demander la suppression de vos
                     données dans certaines circonstances.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Droit à la limitation du traitement : demander le gel du
                     traitement de vos données dans certains cas.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Droit d'opposition : vous opposer au traitement de vos
                     données pour des motifs légitimes.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Droit à la portabilité : recevoir vos données dans un
                     format structuré et couramment utilisé, ou demander leur
                     transmission à un autre responsable de traitement.​
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Droit de retirer votre consentement : lorsque le traitement
                     est fondé sur votre consentement, vous pouvez le retirer à
                     tout moment.​
                  </li>
               </ul>
               <br />
               <p>
                  Pour exercer ces droits, vous pouvez nous contacter à
                  l'adresse suivante :{' '}
                  <em className={styles.importantElement}>
                     contact@petfosterconnect.fr.​
                  </em>
               </p>
               <br />
               <p>
                  Vous avez également le droit d'introduire une réclamation
                  auprès de la Commission Nationale de l'Informatique et des
                  Libertés (CNIL) si vous estimez que le traitement de vos
                  données personnelles constitue une violation de la
                  réglementation applicable.​
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>
                  Modifications de la Politique de Confidentialité
               </h3>
               <p>
                  Nous pouvons être amenés à modifier la présente politique de
                  confidentialité afin de refléter les évolutions de notre
                  plateforme, de nos services ou des exigences légales. Nous
                  vous encourageons à consulter régulièrement cette page pour
                  prendre connaissance des éventuelles modifications.
               </p>
            </div>
            <div>
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

export default PrivacyPolicyComponent;
