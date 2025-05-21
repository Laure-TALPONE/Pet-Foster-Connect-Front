import fetchGetAllFosterFamilies from '@/api/foster-family/getAll/route';
import FosterFamiliesComponent from '@/foster-families/FosterFamiliesComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Liste des Familles d'Accueil - Trouvez une famille pour votre animal",
   description:
      "Découvrez notre liste de familles d'accueil prêtes à offrir un foyer temporaire aux animaux. Trouvez la famille idéale pour prendre soin de votre compagnon.",
};


type Props = {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function FosterFamiliesPage({ searchParams }: Props) {
   // https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
   const { skip, take } = await searchParams;

   const fosterFamilies = await fetchGetAllFosterFamilies(skip, take);

   return <FosterFamiliesComponent fosterFamilies={fosterFamilies} />;
}
