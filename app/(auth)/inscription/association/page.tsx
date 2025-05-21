import SubcriptionAssociation from '@/subcribe/association/SubcriptionAssociation';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Inscription d'une Association - Rejoignez notre réseau d'entraide animale",
   description:
      "Inscrivez votre association sur notre plateforme pour trouver des familles d'accueil et donner une nouvelle chance aux animaux en attente d'un foyer.",
};

export default function SubcriptionAssociationPage() {
   return <SubcriptionAssociation />;
}
