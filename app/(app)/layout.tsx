import FooterComponent from '@/globals/footer/FooterComponent';
import LandingComponent from '@/globals/landing/LandingComponent';
import HeaderComponent from '@/globals/header/HeaderComponent';
import '../../styles/_bases/_main.scss';

export default function AppRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="layout">
         <HeaderComponent />
         <LandingComponent />
         <div>{children}</div>
         <FooterComponent />
      </div>
   );
}
