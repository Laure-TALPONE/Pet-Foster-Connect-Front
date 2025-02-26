import FooterComponent from '@/globals/footer/FooterComponent';
import HeaderComponent from '@/globals/header/HeaderComponent';
import NavBar from '@/globals/nav-bar/NavBar';

export default function AppRootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div>
         <HeaderComponent />
         <NavBar />
         <div>{children}</div>
         <FooterComponent />
      </div>
   );
}
