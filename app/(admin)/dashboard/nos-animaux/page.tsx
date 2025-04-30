import fetchGetAnimalsByAssociation from '@/api/animals/getByAssociation/route';
import DashboardPetsList from '@/dashboard/dashboard-association/dashboard-pets-list/DashboardPetsList';

export default async function DashboardPetsListPage() {
   const animals = await fetchGetAnimalsByAssociation(
      '3ea9a6a3-aea1-4552-94fe-35f28f470377'
   );

   return <DashboardPetsList animals={animals} />;
}
