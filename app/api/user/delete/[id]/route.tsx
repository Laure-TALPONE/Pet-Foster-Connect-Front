import fetchDeleteUser from '@/api/user/delete/route';

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
export async function DELETE(
   request: Request,
   { params }: { params: Promise<{ id: string }> }
) {
   const { id } = await params;
   return await fetchDeleteUser(id);
}
