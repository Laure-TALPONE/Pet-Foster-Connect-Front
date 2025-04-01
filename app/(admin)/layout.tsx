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
         <div>{children}</div>
         <FooterComponent />
      </div>
   );
}
