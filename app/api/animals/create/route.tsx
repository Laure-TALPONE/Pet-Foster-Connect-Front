import fetchCreateAnimal from '@/api/animals/create/route';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
   return await fetchCreateAnimal(request);
}
