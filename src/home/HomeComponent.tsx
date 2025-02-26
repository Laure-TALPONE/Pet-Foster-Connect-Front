'use client';
import styles from './HomeComponent.module.scss';
import AnimalsAdopted from './animals-adopted/AnimalsAdopted';
import ArticleFoster from './article-foster/ArticleFoster';
import ArticleInformation from './article-information/ArticleInformation';
import BannerHomePage from './banner-home-page/BannerHomePage';
import SectionAssociation from './section-association/SectionAssociation';

const HomeComponent = () => {
   return (
      <div className={styles.main}>
         <div className={styles.content}>
            <ArticleFoster />
            <BannerHomePage />
            <SectionAssociation />
            <ArticleInformation />
            <AnimalsAdopted />
         </div>
      </div>
   );
};

export default HomeComponent;
