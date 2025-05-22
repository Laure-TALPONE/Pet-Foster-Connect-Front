import AnimalsComponent from '@/animals/AnimalsComponent';
import fetchGetAllAnimals from '@/api/animals/get/route';
import fetchGetAnimalsByFilters from '@/api/animals/getBySearchFilter/route';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Liste des Animaux - Découvrez les animaux à accueillir",
   description:
      "Explorez notre liste d'animaux en attente d'un foyer d'accueil. Offrez une seconde chance à un chien, un chat ou un autre compagnon en quête d'amour.",
};

type Props = {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function AnimalsPage({ searchParams }: Props) {
   // https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
   const { skip, take, specie, department } = await searchParams;

   let listAnimals;

   if (specie && department) {
      listAnimals = await fetchGetAnimalsByFilters(
         specie,
         department,
         skip,
         take
      );
   } else if (skip && take) {
      listAnimals = await fetchGetAllAnimals(skip, take);
   }

   return <AnimalsComponent animals={listAnimals} />;
}
