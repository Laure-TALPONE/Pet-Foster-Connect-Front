'use client';
import SectionPartners from '@/globals/components/section-partners/SectionPartners';
import styles from './HomeComponent.module.scss';
import AnimalsAdopted from './animals-adopted/AnimalsAdopted';
import ArticleFoster from './article-foster/ArticleFoster';
import ArticleInformation from './article-information/ArticleInformation';
import BannerHomePage from './banner-home-page/BannerHomePage';
import PictureBanner from './picture-banner/PictureBanner';
import SectionAssociation from './section-association/SectionAssociation';
import SectionFosterFamily from './section-foster-family/SectionFosterFamily';
import StepsAdoption from './steps-adoption/StepsAdoption';

const HomeComponent = () => {
   console.log('pouet');
   return (
      <div className={styles.content}>
         <ArticleFoster />
         <BannerHomePage />
         <SectionAssociation />
         <ArticleInformation />
         <AnimalsAdopted />
         <PictureBanner />
         <SectionFosterFamily />
         <SectionPartners />
         <StepsAdoption />
      </div>
   );
};

export default HomeComponent;
