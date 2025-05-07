import fetchPostRegisterAssociation from '@/api/auth/register/association/route';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
   return await fetchPostRegisterAssociation(request);
}
