
import HomeComponent from '@/home/HomeComponent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Pets Foster Connect - Connectez-vous avec des familles d'accueil pour animaux",
    description:
       "Pets Foster Connect facilite la mise en relation entre animaux et familles d'accueil. Offrez un foyer temporaire à un animal en besoin.",
 };

export default async function HomePage() {
   return <HomeComponent />;
}
