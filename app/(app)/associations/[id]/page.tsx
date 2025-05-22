import fetchGetAssociationById from '@/api/associations/getById/route';
import AssocationSingleComponent from '@/association-single/AssociationSingleComponent';

// doc : https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function AssociationSinglePage({
   params,
}: {
   params: Promise<{ id: string }> | { id: string };
}) {
   const { id } = await params;
   const association = await fetchGetAssociationById(id);

   return <AssocationSingleComponent association={association} />;
}
