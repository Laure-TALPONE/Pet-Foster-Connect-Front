import AnimalsComponent from '@/animals/AnimalsComponent';
import fetchGetAllAnimals from '@/api/animals/get/route';
import fetchGetAnimalsByFilters from '@/api/animals/getBySearchFilter/route';

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
