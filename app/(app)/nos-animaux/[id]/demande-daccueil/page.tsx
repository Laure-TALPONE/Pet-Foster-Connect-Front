import fetchGetAnimalById from '@/api/animals/getById/route';
import HomeRequestComponent from '@/home-request/HomeRequestComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Demande d'Adoption Temporaire - Accueillez un animal chez vous",
   description:
      "Envoyez votre demande d'adoption temporaire et offrez un foyer chaleureux à un animal dans le besoin. Rejoignez notre réseau de familles d'accueil engagées.",
};


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
