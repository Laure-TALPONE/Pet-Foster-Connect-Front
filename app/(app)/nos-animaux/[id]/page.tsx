import AnimalSingleComponent from '@/animal-single/AnimalSingleComponent';
import fetchGetAnimalById from '@/api/animals/getById/route';

type Props = {
   params: {
      id: string;
   };
};

// doc : https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function AnimalsSinglePage({ params }: Props) {
   const { id } = await params;
   const animal = await fetchGetAnimalById(id);

   return <AnimalSingleComponent pet={animal} />;
}
