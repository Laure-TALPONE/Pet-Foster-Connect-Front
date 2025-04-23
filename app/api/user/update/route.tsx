import fetchUpdateUser from '@/api/user/update/route';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
   return await fetchUpdateUser(request);
}
