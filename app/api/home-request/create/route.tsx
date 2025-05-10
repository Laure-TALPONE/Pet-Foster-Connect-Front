import fetchCreateHomeRequest from '@/api/home-request/create/route';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
   return await fetchCreateHomeRequest(request);
}
