import fetchGetAllAssociations from '@/api/associations/get/route';
import AssociationsComponent from '@/associations/AssociationsComponent';

export default async function AssociationsPage() {
   const associations = await fetchGetAllAssociations();

   return <AssociationsComponent associations={associations} />;
}
