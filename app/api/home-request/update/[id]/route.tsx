import fetchUpdateAdoptionRequestStatus from '@/api/home-request/update/route';

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
export async function PATCH(
   request: Request,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   console.log('id', id);
   return await fetchUpdateAdoptionRequestStatus(request, id);
}
