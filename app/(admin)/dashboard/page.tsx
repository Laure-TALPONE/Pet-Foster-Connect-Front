import fetchGetUser from '@/api/user/get/route';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
   const cookieStore = await cookies();
   const token = cookieStore.get('token');
   let user;

   if (token) {
      user = await fetchGetUser();
   }

   if (user?.role === 'organization') {
      redirect('/dashboard/nos-animaux');
   } else if (user?.role === 'foster') {
      redirect('/dashboard/mes-demandes-adoption');
   }
}
