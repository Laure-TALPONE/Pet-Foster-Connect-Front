'use client';
import styles from './HomeComponent.module.scss';
import ArticleFoster from './article-foster/ArticleFoster';
import BannerHomePage from './banner-home-page/BannerHomePage';

const HomeComponent = () => {
   return (
      <div className={styles.main}>
         <div className={styles.content}>
            <ArticleFoster />
            <BannerHomePage />
         </div>
      </div>
   );
};

export default HomeComponent;
