import AnimalsComponent from '@/animals/AnimalsComponent';
import fetchGetAllAnimals from '@/api/animals/get/route';

export default async function AnimalsPage() {
   const animals = await fetchGetAllAnimals();

   return <AnimalsComponent animals={animals} />;
}
