import FooterComponent from '@/globals/components/footer/FooterComponent';
import LandingComponent from '@/globals/components/landing/LandingComponent';
import HeaderComponent from '@/globals/components/header/HeaderComponent';
import { cookies } from 'next/headers';
import '../../styles/_bases/_main.scss';

export default async function AppRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const cookieStore = await cookies();
   const token = cookieStore.get('token');
   console.log(token, 'ici le tokeeeeeeeeeeen');

   return (
      <div className="layout">
         <HeaderComponent token={token} />
         <LandingComponent banner />
         <div>{children}</div>
         <FooterComponent />
      </div>
   );
}
