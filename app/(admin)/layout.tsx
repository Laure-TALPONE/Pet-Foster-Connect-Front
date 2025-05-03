import fetchGetUser from '@/api/user/get/route';
import DashboardSidebar from '@/dashboard/dashboard-association/sidebar/DashboardSidebar';
import FooterComponent from '@/globals/components/footer/FooterComponent';
import HeaderComponent from '@/globals/components/header/HeaderComponent';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AppRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const cookieStore = await cookies();
   const token = cookieStore.get('token');

   if (!token) {
      // si pas de token, redirection vers la page d'accueil
      redirect('/');
   }

   return (
      <div className="layout">
         <HeaderComponent token={token} />
         <div className="container">
            <section className="dashboard">
               <DashboardSidebar token={token} />
               <div className="main">{children}</div>
            </section>
         </div>
         <FooterComponent />
      </div>
   );
}
