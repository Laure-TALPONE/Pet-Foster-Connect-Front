import fetchGetAnimalsByAssociation from '@/api/animals/getByAssociation/route';
import fetchGetAllSpecies from '@/api/species/route';
import fetchGetUser from '@/api/user/get/route';
import DashboardPetsList from '@/dashboard/dashboard-association/dashboard-pets-list/DashboardPetsList';
import { cookies } from 'next/headers';

export default async function DashboardPetsListPage() {
   // https://nextjs.org/docs/app/api-reference/functions/cookies
   const cookieStore = await cookies();
   const token = cookieStore.get('token');
   let user;

   if (token) {
      user = await fetchGetUser();
   }

   const animals = await fetchGetAnimalsByAssociation(
      user.organizations[0].uuid
   );

   const species = await fetchGetAllSpecies();

   return <DashboardPetsList animals={animals} species={species} />;
}
