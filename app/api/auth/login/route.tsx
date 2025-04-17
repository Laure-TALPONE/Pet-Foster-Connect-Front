import { NextRequest } from 'next/server';
import fetchPostLogin from '@/api/auth/login/route';

export async function POST(request: NextRequest) {
   // appel du controller
   await fetchPostLogin(request);
}
