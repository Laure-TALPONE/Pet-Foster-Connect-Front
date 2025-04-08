'use client';

import { PawPrint } from '@phosphor-icons/react';
import Link from 'next/link';
import styles from './CookiesComponent.module.scss';

const CookiesComponent = () => {
   return (
      <section className="container">
         <div className={styles.content}>
            <h2 className={styles.title}>Politique de gestion des cookies</h2>
            <div>
               <h3 className={styles.sectiontitle}>Qu'est-ce qu'un cookie ?</h3>
               <p>
                  Un <em className={styles.importantElement}>cookie</em> est un
                  petit fichier texte enregistré sur le disque dur de votre
                  appareil (ordinateur, smartphone, tablette…) par votre
                  navigateur lors de votre visite sur un site internet.
               </p>
               <br />
               <p>
                  Il contient une série d’informations, souvent anonymes, qui
                  permettent de vous reconnaître indirectement lors de vos
                  prochaines visites. Ces fichiers sont essentiels pour le bon
                  fonctionnement de nombreux sites web et contribuent à vous
                  offrir une expérience de navigation plus fluide et
                  personnalisée.
               </p>
               <br />
               <p>Concrètement, un cookie peut permettre :</p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     De mémoriser vos préférences de navigation (comme la langue
                     ou la région)
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     De suivre votre parcours sur le site afin d’en améliorer
                     l’ergonomie
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     D’assurer le bon fonctionnement de certaines
                     fonctionnalités techniques (connexion à un espace
                     personnel, panier d'achat, etc.)
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     De mesurer l’audience du site pour mieux en comprendre les
                     usages
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Ou encore de proposer des contenus adaptés à vos centres
                     d’intérêt
                  </li>
               </ul>
               <br />
               <p>
                  Les cookies ne permettent pas de vous identifier
                  personnellement, mais ils facilitent votre navigation et
                  permettent de vous proposer des services plus pertinents.
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>
                  Pourquoi utilisons-nous des cookies ?
               </h3>
               <p>
                  Le site{' '}
                  <em className={styles.importantElement}>
                     Pet Foster Connect
                  </em>{' '}
                  utilise des cookies afin de garantir une navigation optimale,
                  d’améliorer l’expérience utilisateur, et de vous proposer des
                  contenus adaptés à vos préférences. Ces cookies sont répartis
                  en plusieurs catégories selon leur finalité :
               </p>
               <br />
               <p>
                  <em className={styles.importantElement}>
                     🍪 Cookies techniques
                  </em>
               </p>
               <p>
                  Ces cookies sont{' '}
                  <em className={styles.importantElement}>
                     essentiels au bon fonctionnement du site.
                  </em>{' '}
                  Ils vous permettent d’accéder aux fonctionnalités de base
                  telles que la navigation entre les pages, l'accès sécurisé à
                  votre espace personnel, ou encore la gestion de vos
                  préférences. Sans ces cookies, certaines fonctionnalités
                  peuvent être altérées ou totalement inaccessibles, ce qui
                  pourrait dégrader considérablement votre expérience sur le
                  site.
               </p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Connexion à votre compte utilisateur
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Sécurité de la navigation
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Sauvegarde des paramètres de session
                  </li>
               </ul>
               <br />
               <p>
                  <em className={styles.importantElement}>
                     📈 Cookies de performance
                  </em>
               </p>
               <p>
                  Ces cookies nous aident à{' '}
                  <em className={styles.importantElement}>
                     mieux comprendre comment le site est utilisé.
                  </em>{' '}
                  Ils collectent de manière anonyme des données sur le
                  comportement des visiteurs (pages visitées, durée de
                  consultation, erreurs éventuelles, etc.) afin de nous
                  permettre d’identifier les contenus les plus consultés et les
                  éventuels points de friction.
               </p>
               <br />
               <p>
                  Ces informations nous servent uniquement à améliorer la
                  qualité de notre site, ses contenus et son ergonomie.
               </p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Outils d’analyse d’audience (Google Analytics, etc.)
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Statistiques de fréquentation
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Mesure du temps de chargement des pages
                  </li>
               </ul>
               <br />
               <p>
                  <em className={styles.importantElement}>
                     ⚙️ Cookies de fonctionnalité
                  </em>
               </p>
               <p>
                  Ces cookies permettent{' '}
                  <em className={styles.importantElement}>
                     une personnalisation de votre expérience utilisateur.
                  </em>{' '}
                  Ils se souviennent de vos choix antérieurs (comme votre nom
                  d’utilisateur, votre langue ou votre localisation
                  géographique) pour vous offrir une navigation plus fluide et
                  adaptée à vos préférences.
               </p>
               <br />
               <p>
                  Ils ne sont pas strictement nécessaires au fonctionnement du
                  site, mais leur désactivation peut limiter certaines
                  fonctionnalités personnalisées.
               </p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Mémorisation des préférences de formulaire
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Pré-remplissage automatique de certains champs
                  </li>
               </ul>
               <br />
               <p>
                  <em className={styles.importantElement}>
                     🎯 Cookies de ciblage ou publicitaires
                  </em>
               </p>
               <p>
                  Ces cookies sont utilisés pour{' '}
                  <em className={styles.importantElement}>
                     vous proposer des publicités plus pertinentes.
                  </em>{' '}
                  et adaptées à vos centres d’intérêt. Ils permettent également
                  de limiter le nombre d’affichages d’une même publicité,
                  d’évaluer l'efficacité des campagnes publicitaires, et parfois
                  de partager des informations avec des tiers, comme des régies
                  publicitaires ou des réseaux sociaux.
               </p>
               <br />
               <p>
                  En désactivant ces cookies, la publicité que vous verrez sera
                  moins pertinente, mais elle ne sera pas pour autant supprimée.
               </p>
               <br />
               <ul>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Affichage de publicités ciblées sur d'autres sites
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Suivi de votre navigation à des fins marketing
                  </li>
                  <li>
                     <PawPrint size={12} weight="fill" color="var(--Orange)" />{' '}
                     Partage de contenus sur les réseaux sociaux
                  </li>
               </ul>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Gestion des cookies</h3>
               <p>
                  Lors de votre première visite sur le site{' '}
                  <em className={styles.importantElement}>
                     Pet Foster Connect,
                  </em>
                  un bandeau vous informe de la présence de cookies et vous
                  invite à les accepter ou à les refuser. Vous pouvez à tout
                  moment modifier vos préférences en matière de cookies en
                  accédant aux paramètres de votre navigateur.​
               </p>
               <br />
               <p>
                  Veuillez noter que le refus des cookies peut altérer votre
                  expérience sur notre site et limiter l'accès à certaines
                  fonctionnalités.​
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>
                  Durée de conservation des cookies
               </h3>
               <p>
                  Les cookies ont une durée de validité limitée à 13 mois après
                  leur premier dépôt dans votre terminal. À l'expiration de ce
                  délai, votre consentement sera à nouveau requis.​
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>Vos droits</h3>
               <p>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez d'un droit d'accès, de
                  rectification, de suppression et d'opposition aux données
                  personnelles vous concernant. Pour exercer ces droits ou pour
                  toute question relative à notre politique de gestion des
                  cookies, vous pouvez nous contacter à l'adresse suivante :{' '}
                  <em className={styles.importantElement}>
                     contact@pestfosterconnect.fr.​
                  </em>
               </p>
            </div>
            <div>
               <h3 className={styles.sectiontitle}>
                  Comment paramétrer les cookies sur les navigateurs web ?
               </h3>
               <p>
                  Vous avez la possibilité de configurer votre navigateur pour
                  accepter, refuser ou supprimer les cookies à tout moment. Il
                  est également possible d’être averti lorsqu’un cookie est en
                  cours de dépôt, de consulter sa durée de validité, ainsi que
                  son contenu, et de choisir d’en empêcher l’enregistrement sur
                  votre appareil.
               </p>
               <br />
               <p>
                  Chaque navigateur propose ses propres options de paramétrage.
                  Que vous soyez sur ordinateur, tablette ou smartphone, vous
                  pouvez désactiver ou bloquer les cookies en suivant les
                  instructions fournies par votre navigateur. Pour vous
                  accompagner dans cette démarche, vous trouverez ci-dessous des
                  liens vers les pages d’aide des principaux navigateurs :
               </p>
               <br />
               <p>
                  <em className={styles.importantElement}>
                     Sur Internet explorer & Microsoft Edge
                  </em>
               </p>
               <p>
                  Ouvrez le menu « Outils », puis sélectionnez « Options
                  internet »; cliquez sur l’onglet « Confidentialité » puis
                  l’onglet « Avancé » choisissez le niveau souhaité ou suivez le
                  lien suivant :
               </p>
               <Link
                  href="https://support.microsoft.com/fr-fr/windows/g%C3%A9rer-les-cookies-dans-microsoft-edge-afficher-autoriser-bloquer-supprimer-et-utiliser-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
               >
                  Support Microsoft
               </Link>
               <br />
               <br />
               <p>
                  <em className={styles.importantElement}>
                     Sur Mozilla Firefox
                  </em>
               </p>
               <p>
                  Ouvrez le menu « Outils », puis sélectionnez « Options »;
                  cliquez sur l’onglet « Vie privée » puis choisissez les
                  options souhaitées ou suivez ce lien :
               </p>
               <Link
                  href="https://support.mozilla.org/fr/kb/effacer-cookies-donnees-site-firefox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
               >
                  Support Mozilla
               </Link>
               <br />
               <br />
               <p>
                  <em className={styles.importantElement}>
                     Sur Safari Mac/Iphone/Ipad/iOs
                  </em>
               </p>
               <p>
                  Choisissez " Safari " Préférences » puis cliquez sur «
                  Sécurité »; Dans la section « Accepter les cookies »
                  choisissez les options souhaitées ou suivez ce lien :
               </p>
               <Link
                  href="https://support.apple.com/fr-fr/105082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
               >
                  Support sur Ipad
               </Link>
               <p>ou</p>
               <Link
                  href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
               >
                  Support sur Mac
               </Link>
               <br />
               <br />
               <p>
                  <em className={styles.importantElement}>Sur Google Chrome</em>
               </p>
               <p>
                  Ouvrez le menu de configuration (logo clé à molette), puis
                  sélectionnez « Options », cliquez sur « Options avancées »
                  puis dans la section « Confidentialité », cliquez sur «
                  Paramètres de contenu », et choisissez les options souhaitées
                  ou suivez le lien suivant :
               </p>
               <Link
                  href="https://support.google.com/chrome/answer/95647?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
               >
                  Support Google Chrome
               </Link>
               <br />
               <br />
               <p>
                  Pour plus de précisions, vous pouvez également consulter{' '}
                  <Link
                     href="https://www.cnil.fr/fr/cnil-direct/question/un-cookie-quest-ce-que-cest"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.link}
                  >
                     le site de la CNIL
                  </Link>
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

export default CookiesComponent;
