import fetchGetAllAssociations from '@/api/associations/get/route';
import AssociationsComponent from '@/associations/AssociationsComponent';

type Props = {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function AssociationsPage({ searchParams }: Props) {
   // https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
   const { skip, take } = await searchParams;

   const associations = await fetchGetAllAssociations(skip, take);

   return <AssociationsComponent associations={associations} />;
}
