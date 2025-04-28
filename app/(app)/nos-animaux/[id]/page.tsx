import AnimalSingleComponent from '@/animal-single/AnimalSingleComponent';
import fetchGetAnimalById from '@/api/animals/getById/route';

type Props = {
   params: {
      id: string;
   };
};

export default async function AnimalsSinglePage({ params }: Props) {
   const animal = await fetchGetAnimalById(params.id);

   return <AnimalSingleComponent pet={animal} />;
}
