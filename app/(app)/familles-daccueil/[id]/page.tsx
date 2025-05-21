import fetchGetFosterFamilyById from '@/api/foster-family/getById/route';
import FosterFamilySingleComponent from '@/foster-family-single/FosterFamilySingleComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Profil d'une Famille d'Accueil - Découvrez son engagement",
   description:
      "Apprenez-en plus sur une famille d'accueil engagée pour le bien-être animal. Découvrez son expérience, son environnement et son rôle auprès des animaux en attente d'un foyer.",
};


type Props = {
   params: {
      id: string;
   };
};

// doc : https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function FosterFamilyPage({ params }: Props) {
   const { id } = await params;
   const family = await fetchGetFosterFamilyById(id);

   return <FosterFamilySingleComponent family={family} />;
}
