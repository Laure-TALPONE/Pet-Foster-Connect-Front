import AnimalsComponent from '@/animals/AnimalsComponent';
import fetchGetAllAnimals from '@/api/animals/get/route';
import fetchGetAnimalsByFilters from '@/api/animals/getBySearchFilter/route';

type Props = {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function AnimalsPage({ searchParams }: Props) {
   // https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
   const { skip, take, specie, department } = await searchParams;
   const animals = await fetchGetAllAnimals(skip, take);

   let listAnimals;

   if (specie && department) {
      listAnimals = await fetchGetAnimalsByFilters(specie, department);
   } else if (skip && take) {
      listAnimals = animals;
   }

   return <AnimalsComponent animals={listAnimals} />;
}
