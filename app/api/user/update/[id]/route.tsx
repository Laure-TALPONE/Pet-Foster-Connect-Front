import fetchUpdateUser from '@/api/user/update/route';
import { NextRequest } from 'next/server';

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
export async function PATCH(
   request: Request,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   return await fetchUpdateUser(request, id);
}
