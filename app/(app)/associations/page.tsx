import fetchGetAllAssociations from '@/api/associations/get/route';
import AssociationsComponent from '@/associations/AssociationsComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Liste des Associations - Trouvez des associations pour animaux à soutenir",
   description:
      "Explorez notre liste d'associations dédiées aux animaux. Découvrez des organisations engagées pour le bien-être animal et comment vous pouvez les soutenir.",
};

type Props = {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function AssociationsPage({ searchParams }: Props) {
   // https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
   const { skip, take } = await searchParams;

   const associations = await fetchGetAllAssociations(skip, take);

   return <AssociationsComponent associations={associations} />;
}
