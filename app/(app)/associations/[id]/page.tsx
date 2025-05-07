import fetchGetAssociationById from '@/api/associations/getById/route';
import AssocationSingleComponent from '@/association-single/AssociationSingleComponent';

type Props = {
   params: {
      id: string;
   };
};

// doc : https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function AssociationSinglePage({ params }: Props) {
   const { id } = await params;
   const association = await fetchGetAssociationById(id);

   return <AssocationSingleComponent association={association} />;
}
