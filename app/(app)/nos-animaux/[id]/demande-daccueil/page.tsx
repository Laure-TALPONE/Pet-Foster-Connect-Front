import fetchGetAnimalById from '@/api/animals/getById/route';
import HomeRequestComponent from '@/home-request/HomeRequestComponent';

type Props = {
   params: {
      id: string;
   };
};

export default async function HomeRequestPage({ params }: Props) {
   const animal = await fetchGetAnimalById(params.id);

   return <HomeRequestComponent pet={animal} />;
}
