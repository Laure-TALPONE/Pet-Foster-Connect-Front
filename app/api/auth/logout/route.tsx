import fetchPostLogOut from '@/api/auth/logout/route';

export async function POST() {
   return await fetchPostLogOut();
}
