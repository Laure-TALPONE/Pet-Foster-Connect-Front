import FooterComponent from '@/globals/components/footer/FooterComponent';
import LandingComponent from '@/globals/components/landing/LandingComponent';
import HeaderComponent from '@/globals/components/header/HeaderComponent';
import { cookies } from 'next/headers';
import '../../styles/_bases/_main.scss';
import fetchGetUser from '@/api/user/get/route';
import fetchGetAllSpecies from '@/api/species/route';

export default async function AppRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const cookieStore = await cookies();
   const token = cookieStore.get('token');
   let user;
   const species = await fetchGetAllSpecies();

   if (token) {
      user = await fetchGetUser();
   }

   return (
      <div className="layout">
         <HeaderComponent token={token} />
         <LandingComponent banner species={species} />
         <div>{children}</div>
         <FooterComponent />
      </div>
   );
}
