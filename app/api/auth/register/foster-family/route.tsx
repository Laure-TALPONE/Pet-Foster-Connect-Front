import fetchPostRegisterFamily from '@/api/auth/register/foster-family/route';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
   return await fetchPostRegisterFamily(request);
}
