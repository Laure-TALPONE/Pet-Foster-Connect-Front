import fetchGetUser from '@/api/user/get/route';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
   return await fetchGetUser();
}
