import fetchGetAllAnimals from '@/api/animals/get/route';

export async function GET() {
   return await fetchGetAllAnimals();
}
