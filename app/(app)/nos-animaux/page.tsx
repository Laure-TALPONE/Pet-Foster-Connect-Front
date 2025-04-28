import AnimalsComponent from '@/animals/AnimalsComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Liste des Animaux - Découvrez les animaux à accueillir",
   description:
      "Explorez notre liste d'animaux en attente d'un foyer d'accueil. Offrez une seconde chance à un chien, un chat ou un autre compagnon en quête d'amour.",
};


export default function AnimalsPage() {
   return <AnimalsComponent />;
}
