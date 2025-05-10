import fetchGetAnimalById from '@/api/animals/getById/route';
import HomeRequestComponent from '@/home-request/HomeRequestComponent';

type Props = {
   params: {
      id: string;
   };
};

export default async function HomeRequestPage({ params }: Props) {
   const { id } = await params;
   const animal = await fetchGetAnimalById(id);

   return <HomeRequestComponent pet={animal} />;
}
