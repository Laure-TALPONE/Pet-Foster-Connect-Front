import AnimalSingleComponent from '@/animal-single/AnimalSingleComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Profil d'un Animal - Découvrez son histoire et ses besoins",
   description:
      "Apprenez-en plus sur un animal en attente d'un foyer. Découvrez son caractère, son histoire et comment lui offrir un nouveau départ.",
};


export default function AnimalsSinglePage() {
   return <AnimalSingleComponent />;
}
