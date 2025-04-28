import AssocationSingleComponent from '@/association-single/AssociationSingleComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Profil de l'Association - Découvrez son engagement et ses actions",
   description:
      "Explorez le profil d'une association dédiée au bien-être animal. Apprenez-en plus sur son engagement, ses actions et comment vous pouvez contribuer à ses projets.",
};


export default function AssociationSinglePage() {
   return <AssocationSingleComponent />;
}
