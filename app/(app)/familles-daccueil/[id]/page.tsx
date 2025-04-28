import FosterFamilySingleComponent from '@/foster-family-single/FosterFamilySingleComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Profil d'une Famille d'Accueil - Découvrez son engagement",
   description:
      "Apprenez-en plus sur une famille d'accueil engagée pour le bien-être animal. Découvrez son expérience, son environnement et son rôle auprès des animaux en attente d'un foyer.",
};


export default function FosterFamilyPage() {
   return <FosterFamilySingleComponent />;
}
