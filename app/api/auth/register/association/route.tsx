import fetchPostRegister from '@/api/auth/register/route';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
   return await fetchPostRegister(request);
}
