import fetchGetHomeRequestByFosterFamily from '@/api/home-request/getByFosterFamily/route';
import fetchGetUser from '@/api/user/get/route';
import DashboardAdoptionsRequest from '@/dashboard/dashboard-foster-family/dashboard-adoptions-request/DashboardAdoptionsRequest';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardAdoptionsRequestPageFamily() {
   // https://nextjs.org/docs/app/api-reference/functions/cookies
   const cookieStore = await cookies();
   const token = cookieStore.get('token');
   let user;

   if (token) {
      user = await fetchGetUser();
   }

   if (user.role === 'organization') {
      redirect('/error');
   }

   const adoptionsRequest = await fetchGetHomeRequestByFosterFamily(
      user.fosterCares[0].uuid
   );

   return <DashboardAdoptionsRequest adoptionsRequest={adoptionsRequest} />;
}
