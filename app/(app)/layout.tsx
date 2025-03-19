import FooterComponent from '@/globals/footer/FooterComponent';
import HeaderComponent from '@/globals/header/HeaderComponent';
import NavBar from '@/globals/nav-bar/NavBar';
import '../../styles/_bases/_main.scss';

export default function AppRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="layout">
         <NavBar />
         <HeaderComponent />
         <div>{children}</div>
         <FooterComponent />
      </div>
   );
}
