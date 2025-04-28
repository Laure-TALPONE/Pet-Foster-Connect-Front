import FosterFamiliesComponent from '@/foster-families/FosterFamiliesComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Liste des Familles d'Accueil - Trouvez une famille pour votre animal",
   description:
      "Découvrez notre liste de familles d'accueil prêtes à offrir un foyer temporaire aux animaux. Trouvez la famille idéale pour prendre soin de votre compagnon.",
};


export default function FosterFamiliesPage() {
   return <FosterFamiliesComponent />;
}
