import DashboardSidebar from '@/dashboard/dashboard-association/sidebar/DashboardSidebar';
import FooterComponent from '@/globals/components/footer/FooterComponent';
import HeaderComponent from '@/globals/components/header/HeaderComponent';

export default function AppRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="layout">
         <HeaderComponent />
         <div className="container">
            <section className="dashboard">
               {/* <DashboardSidebar /> */}
               <div>{children}</div>
            </section>
         </div>
         <FooterComponent />
      </div>
   );
}
