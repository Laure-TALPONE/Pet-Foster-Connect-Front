import FooterComponent from '@/globals/components/footer/FooterComponent';
import LandingComponent from '@/globals/components/landing/LandingComponent';
import HeaderComponent from '@/globals/components/header/HeaderComponent';
import '../../styles/_bases/_main.scss';

export default function AppRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="layout">
         <HeaderComponent />
         <LandingComponent buttons />
         <div>{children}</div>
         <FooterComponent />
      </div>
   );
}
