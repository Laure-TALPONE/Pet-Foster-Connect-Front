import AnimalsComponent from '@/animals/AnimalsComponent';
import fetchGetAllAnimals from '@/api/animals/get/route';
import fetchGetAnimalsByFilters from '@/api/animals/getBySearchFilter/route';

// type Props = {
//    params: {
//       specie: string;
//       department: string;
//    };
// };

export default async function AnimalsPage() {
   const animals = await fetchGetAllAnimals();
   // const animalsFiltered = await fetchGetAnimalsByFilters(specie, department);

   return <AnimalsComponent animals={animals} />;
}
