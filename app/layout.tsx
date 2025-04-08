import '../styles/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Pets Foster Connect',
   description:
      "L'application qui permet de mettre en relation des familles d’accueil pour les animaux et des associations de protection animale.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="fr">
         <body>{children}</body>
      </html>
   );
}
