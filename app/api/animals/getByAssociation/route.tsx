import fetchGetAnimalsByAssociation from '@/api/animals/getByAssociation/route';

export async function GET() {
   return await fetchGetAnimalsByAssociation();
}
