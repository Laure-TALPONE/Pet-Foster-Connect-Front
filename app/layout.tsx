import { UserProvider } from '@/globals/utils/UserContext';
import '../styles/globals.scss';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import fetchGetUser from '@/api/user/get/route';

export const metadata: Metadata = {
   title: 'Pets Foster Connect',
   description:
      "L'application qui permet de mettre en relation des familles d’accueil pour les animaux et des associations de protection animale.",
};

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const cookieStrore = await cookies();
   const token = cookieStrore.get('token');
   let user;

   if (token) {
      user = await fetchGetUser();
   }

   return (
      <html lang="fr">
         <body>
            <UserProvider user={user}>{children}</UserProvider>
         </body>
      </html>
   );
}
