import { NextRequest } from 'next/server';
import fetchPostLogOut from '@/api/auth/logout/route';

export async function POST(request: NextRequest) {
   return await fetchPostLogOut(request);
}
