import fetchDeleteAnimal from '@/api/animals/delete/route';
import { NextRequest } from 'next/server';

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#url-query-parameters
export async function DELETE(request: NextRequest) {
   const searchParams = request.nextUrl.searchParams;
   const id = searchParams.get('id');
   if (id) {
      return await fetchDeleteAnimal(id);
   }
}
