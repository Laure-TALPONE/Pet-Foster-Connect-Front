// app/not-found.tsx

import FooterComponent from '@/globals/components/footer/FooterComponent';
import HeaderComponent from '@/globals/components/header/HeaderComponent';
import LandingComponent from '@/globals/components/landing/LandingComponent';
import NotFoundComponent from '@/not-found/NotFoundComponent'; // Si tu veux un composant séparé

export default async function NotFound() {
   return (
      <div className="layout">
         <HeaderComponent />
         <LandingComponent banner />
         <NotFoundComponent />
         <FooterComponent />
      </div>
   );
}
