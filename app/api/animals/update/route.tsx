import fetchUpdateAnimal from '@/api/animals/update/route';
import { NextRequest } from 'next/server';

export async function PUT(request: NextRequest) {
   return await fetchUpdateAnimal(request);
}
