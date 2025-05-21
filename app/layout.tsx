import fetchGetUser from '@/api/user/get/route';
import { UserProvider } from '@/globals/utils/UserContext';
import { cookies } from 'next/headers';
import '../styles/globals.scss';


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
