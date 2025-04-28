import SubcriptionFamily from '@/subcribe/foster-family/SubscriptionFamily';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Inscription d'une Famille d'Accueil - Devenez foyer temporaire pour un animal",
   description:
      "Rejoignez notre réseau de familles d'accueil en inscrivant votre profil. Offrez un environnement chaleureux et sécurisé aux animaux en quête d'un foyer temporaire.",
};

export default function SubcriptionAssociationPage() {
   return <SubcriptionFamily />;
}
