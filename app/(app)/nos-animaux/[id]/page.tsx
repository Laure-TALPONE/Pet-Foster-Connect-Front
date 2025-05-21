import AnimalSingleComponent from '@/animal-single/AnimalSingleComponent';
import fetchGetAnimalById from '@/api/animals/getById/route';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Profil d'un Animal - Découvrez son histoire et ses besoins",
   description:
      "Apprenez-en plus sur un animal en attente d'un foyer. Découvrez son caractère, son histoire et comment lui offrir un nouveau départ.",
};


type Props = {
   params: {
      id: string;
   };
};

// doc : https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function AnimalsSinglePage({ params }: Props) {
   const { id } = await params;
   const animal = await fetchGetAnimalById(id);

   return <AnimalSingleComponent pet={animal} />;
}
