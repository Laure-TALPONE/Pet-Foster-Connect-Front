import CookiesComponent from '@/legal/cookies/CookiesComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Politique de Cookies - Informations sur l'utilisation des cookies",
   description:
      "Découvrez notre politique de cookies et comment nous utilisons des cookies pour améliorer votre expérience sur notre site. Gérez vos préférences en matière de cookies ici.",
};


export default function CookiesPage() {
   return <CookiesComponent />;
}
