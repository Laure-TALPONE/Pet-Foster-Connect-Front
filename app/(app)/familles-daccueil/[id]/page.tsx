import fetchGetFosterFamilyById from '@/api/foster-family/getById/route';
import FosterFamilySingleComponent from '@/foster-family-single/FosterFamilySingleComponent';

type Props = {
   params: {
      id: string;
   };
};

// doc : https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function FosterFamilyPage({ params }: Props) {
   const { id } = await params;
   const family = await fetchGetFosterFamilyById(id);

   return <FosterFamilySingleComponent family={family} />;
}
