import fetchGetAssociationById from '@/api/associations/getById/route';
import AssocationSingleComponent from '@/association-single/AssociationSingleComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Profil de l'Association - Découvrez son engagement et ses actions",
   description:
      "Explorez le profil d'une association dédiée au bien-être animal. Apprenez-en plus sur son engagement, ses actions et comment vous pouvez contribuer à ses projets.",
};


type Props = {
   params: {
      id: string;
   };
};

// doc : https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function AssociationSinglePage({ params }: Props) {
   const { id } = await params;
   const association = await fetchGetAssociationById(id);

   return <AssocationSingleComponent association={association} />;
}
