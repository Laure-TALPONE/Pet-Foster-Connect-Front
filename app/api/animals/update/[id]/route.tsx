import fetchUpdateAnimal from '@/api/animals/update/route';
import { NextRequest } from 'next/server';

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
export async function PUT(
   request: Request,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   return await fetchUpdateAnimal(request, id);
}
