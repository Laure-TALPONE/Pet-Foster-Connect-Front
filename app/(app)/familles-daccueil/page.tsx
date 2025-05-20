import fetchGetAllFosterFamilies from '@/api/foster-family/getAll/route';
import FosterFamiliesComponent from '@/foster-families/FosterFamiliesComponent';

type Props = {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function FosterFamiliesPage({ searchParams }: Props) {
   // https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
   const { skip, take } = await searchParams;

   const fosterFamilies = await fetchGetAllFosterFamilies(skip, take);

   return <FosterFamiliesComponent fosterFamilies={fosterFamilies} />;
}
