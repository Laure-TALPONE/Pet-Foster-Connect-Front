import fetchUpdateFosterCare from '@/api/foster-family/update/route';

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
export async function PATCH(
   request: Request,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   return await fetchUpdateFosterCare(request, id);
}
