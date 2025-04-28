import HomeRequestComponent from '@/home-request/HomeRequestComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Demande d'Adoption Temporaire - Accueillez un animal chez vous",
   description:
      "Envoyez votre demande d'adoption temporaire et offrez un foyer chaleureux à un animal dans le besoin. Rejoignez notre réseau de familles d'accueil engagées.",
};


export default function HomeRequestPage() {
   return <HomeRequestComponent />;
}
