import fetchGetAnimalsByAssociation from '@/api/animals/getByAssociation/route';
import fetchGetUser from '@/api/user/get/route';
import DashboardRequests from '@/dashboard/dashboard-association/dashboard-requests/DashboardRequests';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardRequestsPage() {
   // https://nextjs.org/docs/app/api-reference/functions/cookies
   const cookieStore = await cookies();
   const token = cookieStore.get('token');
   let user;

   if (token) {
      user = await fetchGetUser();
   }

   if (user.role === 'foster') {
      redirect('/error');
   }

   const animals = await fetchGetAnimalsByAssociation(
      user.organizations[0].uuid
   );

   return <DashboardRequests animals={animals} />;
}
